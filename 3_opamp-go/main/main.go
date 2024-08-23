package main

import (
   "context"
   "fmt"
   "go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"
   "go.opentelemetry.io/otel"
   "go.opentelemetry.io/otel/exporters/stdout/stdouttrace"
   sdktrace "go.opentelemetry.io/otel/sdk/trace"
   "go.opentelemetry.io/otel/trace"
   "gopkg.in/yaml.v3"
   "io/ioutil"
   "log"
   "net/http"
   "os"
   "path/filepath"
)

type configurations struct {
   Instrument bool
}

var tracer trace.Tracer

func newConsoleExporter() (sdktrace.SpanExporter, error) {
   return stdouttrace.New(
      stdouttrace.WithWriter(os.Stdout),
      stdouttrace.WithPrettyPrint(),
   )
}

func httpHandler(w http.ResponseWriter, r *http.Request) {
   fmt.Fprintf(w, "Hi! This action could create a trace!")
}

func setHandler(handler http.Handler, config configurations) http.Handler {
   if config.Instrument {
      return otelhttp.NewHandler(handler, "instrumentation activated by OpAMP")
   }
   return http.HandlerFunc(httpHandler)
}

func main() {
   filename, _ := filepath.Abs("./effective.yaml")
   yamlFile, _ := ioutil.ReadFile(filename)

   var config configurations
   yaml.Unmarshal(yamlFile, &config)

   exp, _ := newConsoleExporter()
   tp := sdktrace.NewTracerProvider(sdktrace.WithBatcher(exp))
   defer func() { _ = tp.Shutdown(context.Background()) }()

   otel.SetTracerProvider(tp)

   tracer = tp.Tracer("ControlledOpAMPAgentDemo")
   handler := http.HandlerFunc(httpHandler)
   http.Handle("/", setHandler(handler, config))
   fmt.Println("Starting server on port 8080")
   log.Fatal(http.ListenAndServe(":8080", nil))
}