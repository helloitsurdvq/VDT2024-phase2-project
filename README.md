# Building a centralized Agent management platform
Author: **Đinh Việt Quang**

## Table of Contents 
- [0. Requirements](#0-requirements)

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