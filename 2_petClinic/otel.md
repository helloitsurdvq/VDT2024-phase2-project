## Install OpenTelemetry Collector Agent on Ubuntu Machine:
Please run the below commands to install Otel Collector for receiving the metrics

```shell
wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.88.0/otelcol-contrib_0.88.0_linux_amd64.deb
sudo dpkg -i otelcol-contrib_0.88.0_linux_amd64.deb
sudo cd /etc/otelcol-contrib
sudo mv config.yaml config_orig.yaml
sudo vi /etc/otelcol-contrib/config.yaml
```
Paste the contents from "otelcol_config_petclinic.yaml" from this repo to /etc/otelcol-contrib/config.yaml

Change the ipaddress(localhost) to prometheus server ip address

```shell
sudo systemctl daemon-reload
sudo service otelcol-contrib stop
sudo service otelcol-contrib start
sudo service otelcol-contrib status
```

to run zipkin from docker: 
```shell
docker run -d -p 9411:9411 openzipkin/zipkin 
```

run petClinic application: 
```shell
java -javaagent:opentelemetry-javaagent.jar -Dotel.service.name=petclinic -jar target/*.jar
```

systemctl list-units --type=service
systemctl list-units --type=service --all
systemctl list-units --type=service --state=running
