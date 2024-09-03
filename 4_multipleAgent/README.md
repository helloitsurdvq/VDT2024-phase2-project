# Multiple agents management

In this section, some methods to run multiple agents in the project are provided with description. The OpAMP Supervisor for the OpenTelemetry Collector is designed to manage the configuration and status of one or more OpenTelemetry collector instances.

### 1. Running separate supervisors
Multiple instances of the OpAMP Supervisor can be run each with a different configuration. Each supervisor can start and manage a separate Collector instance. Make sure that the OpAMP server is able to handle connections and scale appropriately. 

In this experiment, 2 different supervisors are used to manage `otelcol` and `otelcol-contrib` collector, respectively, running on the same server via [http://localhost:4321/](http://localhost:4321/).

![img](1_multiplesupervisor.png)

(to be continued)