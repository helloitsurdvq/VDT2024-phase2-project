# Grafana setup
## Installation
```shell
sudo apt-get install -y apt-transport-https software-properties-common
sudo wget -q -O /usr/share/keyrings/grafana.key https://apt.grafana.com/gpg.key
echo "deb [signed-by=/usr/share/keyrings/grafana.key] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
sudo apt-get update

sudo apt-get install grafana
```

```shell
sudo systemctl daemon-reload
sudo systemctl enable grafana-server.service
sudo systemctl start grafana-server
sudo systemctl stop grafana-server
```

Access the Grafana web interface with default login and password
http://localhost:3000 with the following infor:
```
login: admin
password: password
```
If admin password **doesn't work** then perform below steps:
```shell
sudo apt-get install sqlite3
sudo sqlite3 /var/lib/grafana/grafana.db
update user set password = '59acf18b94d7eb0694c61e60ce44c110c7a683ac6a8f09580d626f90f4a242000746579358d77dd9e570e83fa24faa88a8a6', salt = 'F3FAxVm33R' where login = 'admin';
```
Now, log in your Grafana web interface using 
```
username: admin 
password: admin
```

Then, add the Prometheus as a DataSource in Grafana.  

To Search all of the time series data points grouping by job  in query
  ```shell
  count({__name__=~".+"}) by (job)
  ```
  
Server Requests count for App endpoints ```http_server_requests_seconds_count{job="petclinic_otel",status!="200"}```