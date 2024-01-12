# OpenSearch ohne Docker

1. Downloading the zip file from: https://opensearch.org/downloads.html

2. Editing the opensearch.yml file in the config folder - inserting at the very bottom:


      plugins.security.disabled: true

      http.cors.enabled : true
   
      http.cors.allow-origin: "*"
   
      http.cors.allow-methods: OPTIONS,HEAD,GET,POST,PUT,DELETE
   
      http.cors.allow-headers: X-Requested-With,X-Auth-Token,Content-Type,Content-Length

4.   ./opensearch-windows-install.bat enter and execute in the terminal of the folder

5. Enter in the browser: http://localhost:9200/
