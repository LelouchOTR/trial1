# OpenSearch ohne Docker

1. Herunterladen der zip-Datei von https://opensearch.org/downloads.html

2. Ändern der opensearch.yml im config-Ordner - Ganz unten einfügen:


      plugins.security.disabled: true

      http.cors.enabled : true
   
      http.cors.allow-origin: "*"
   
      http.cors.allow-methods: OPTIONS,HEAD,GET,POST,PUT,DELETE
   
      http.cors.allow-headers: X-Requested-With,X-Auth-Token,Content-Type,Content-Length

4.   ./opensearch-windows-install.bat im terminal des Ordners eingeben & ausführen

5. Im Browser eingeben: http://localhost:9200/
