# Building a centralized Agent management platform
Author: **Đinh Việt Quang**

## Table of Contents 
- [0. Requirements](#0-requirements)
- [1. Assignment list](#1-assignment-list)

## 0. Requirements
Currently, OpenTelemetry is becoming a leading ecosystem for system observability. The OpenTelemetry Collector, in particular, plays a crucial role in collecting, processing, and transmitting data to storage systems. To ensure the OpenTelemetry Collector functions properly, operators must install and configure a YAML file. While managing a small number of OpenTelemetry Collectors is relatively easy.  challenges arise as the number of collectors grows and they are deployed across different environments, including:
+ Configuration differences between systems, such as needing to modify configuration files on servers or ConfigMaps in Kubernetes
+ Monitoring the status of each agent.
+ Manage agent versions.

Therefore, it is necessary to build a centralized agent management system to:
+ Provide remote configuration management.
+ Continuously monitor and report agent status.
+ Manage agent versions and hadle upgrades.

Outcome: Complete research on related technologies, make comparisons and provide recommendations for developing a comprehensive solution.

## 1. Assignment list 
This section provides links to various assignments related to the OpenTelemetry Collector and its integration into different applications. Each assignment focuses on specific aspects of setting up, configuring, and utilizing OpenTelemetry in microservices, applications, and the OpAmp protocol. Below is the list of assignments with links to their respective repositories.

**Note**: The documentation for each assignment are written in *README.md* file.

### Update: 22/08/2024
|Name | Link  |
|--------------------------|---|
|Starting out | [link](https://github.com/helloitsurdvq/VDT2024_phase2-OpenTelemetryCollector/tree/main/0_startingOut) |
|Movies dashboard | [link](https://github.com/helloitsurdvq/VDT2024_phase2-OpenTelemetryCollector/tree/main/1_moviesMicroservices) |
|Pet clinic application | [link](https://github.com/helloitsurdvq/VDT2024_phase2-OpenTelemetryCollector/tree/main/2_petClinic) |
|OpAmp with Go | [link](https://github.com/helloitsurdvq/VDT2024_phase2-OpenTelemetryCollector/tree/main/3_opamp-go) |