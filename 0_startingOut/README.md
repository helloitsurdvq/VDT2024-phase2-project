# OpenTelemetry starting out

This repository contains a basic Node.js application that is instrumented with OpenTelemetry to trace and collect metrics. The application uses Express.js to create a simple server with a few endpoints, and OpenTelemetry is set up to export trace and metric data to the console.

## Usage
### Starting the Application
To start the application, run the following command:

```bash
node app.js
```
The server will start listening on port 7000 by default.

### Available Endpoints
+ `GET /`: Returns "Hello world"
+ `GET /rolldice`: Returns a random number between 1 and 6
+ `GET /date`: Returns the current date in JSON format

### OpenTelemetry Instrumentation
The application is instrumented with OpenTelemetry to automatically capture trace and metric data. The following components are included:

- NodeSDK: Sets up the OpenTelemetry SDK for Node.js.
- ConsoleSpanExporter: Exports trace data to the console.
- PeriodicExportingMetricReader: Periodically exports metric data to the console.
- Auto Instrumentations: Automatically instruments supported modules in the Node.js ecosystem.

### Viewing Trace and Metric Data
All trace and metric data are exported to the console.