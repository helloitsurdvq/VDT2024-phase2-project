# Movies dashboard application 

## Usage
To start a zipkin container

```shell
docker run -d -p 9411:9411 openzipkin/zipkin
```
To install the packages

```shell
npm i
```

To run the application, please run these two commands in 2 separate tab
```shell 
cd 1_moviesMicroservices
node movies.js
node dashboard.js
```


### Available Endpoints

- `GET /movies`: Returns a list of movies in JSON format.
- `GET /dashboard`: Fetches the list of movies from the movies-service and returns it in a JSON format.

## OpenTelemetry Instrumentation
Both services are instrumented with OpenTelemetry to trace HTTP requests. The traces are exported to:

- Console: View traces in the terminal where the service is running.
- Zipkin: View traces in the Zipkin UI at http://localhost:9411/zipkin.