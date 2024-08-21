const { NodeSDK } = require('@opentelemetry/sdk-node');
const { ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-node');
const {
  getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node');
const {
  PeriodicExportingMetricReader,
  ConsoleMetricExporter,
} = require('@opentelemetry/sdk-metrics');

const sdk = new NodeSDK({
  traceExporter: new ConsoleSpanExporter(),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new ConsoleMetricExporter(),
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();


// const { diag, DiagConsoleLogger, DiagLogLevel } = require("@opentelemetry/api");
// const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
// const { SimpleSpanProcessor } = require("@opentelemetry/sdk-trace-base");
// const { ZipkinExporter } = require("@opentelemetry/exporter-zipkin");

// diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ERROR);

// const provider = new NodeTracerProvider();

// const exporter = new ZipkinExporter({
//   serviceName: "get-date",
//   // You can specify the URL if needed, e.g., url: 'http://localhost:9411/api/v2/spans'
// });

// provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

// provider.register();
