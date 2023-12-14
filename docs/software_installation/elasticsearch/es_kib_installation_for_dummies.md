# Installation of Elasticsearch and Kibana for dummies

In this tutorial, you will learn how to install Elasticsearch and Kibana on your local machine

## Prerequisites:
- Windows operating system

## Install Elasticsearch and Kibana with zip on Windows

1. Download Elasticsearch for Windows from here:
    https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.11.1-windows-x86_64.zip

2. Extract the archive to your desired location, such as C:\Users\username\Downloads.
    Hint: Please do not use the built-in extractor in Windows Explorer, use a dedicated archive manager such as 7-zip.

3. Open the elasticsearch.yml file located in the config folder in the extracted folder using your favorite text editor and disable the security features. 

    ```xpack.security.enabled: false```

    and add

        http.cors.enabled : true

        http.cors.allow-origin: "*"

        http.cors.allow-methods: OPTIONS,HEAD,GET,POST,PUT,DELETE

        http.cors.allow-headers: X-Requested-With,X-Auth-Token,Content-Type,Content-Length



3. Open a Powershell terminal and navigate to the extracted folder.

    ```cd C:\Users\username\Downloads\elasticsearch-8.11.1```

4. Start the elasticsearch engine present in the bin folder and leave the terminal window running.

    ```.\bin\elasticsearch.bat```

5. Download Kibana for Windows from here:
    https://artifacts.elastic.co/downloads/kibana/kibana-8.11.1-windows-x86_64.zip

6. Repeat the same steps as earlier. Extract the archive to your desired location, such as C:\Users\username\Downloads\. Hint: Again, AVOID using the built-in extractor in Windows.

7. Open a new Powershell terminal and navigate to the extracted folder.

    ```cd C:\Users\username\Downloads\kibana-8.11.1```

8. Start the kibana engine and leave the terminal window running.

    ```.\bin\kibana.bat```

9. Wait a few moments and let the two processes start. Leave the two terminal windows running in the background and using your favorite browser, navigate to http://localhost:9200. If elasticsearch has successfully started, you'll see a json as output. 

10. Open a new tab and navigate to http://localhost:5601. You'll see the kibana landing page if successful. 

That's it! You have successfully set up Elasticsearch and Kibana on Windows locally. You can now start exploring and analyzing your data using Kibana's powerful features.

## Some common issues: 

1. Port not available: Open up the elasticsearch.yml file again and change the http port to any other port that is free, for e.g. 49351.

    ```http.port: 49351```

2. Elasticsearch quit unexpectedly: Restart your computer and try again. 

## Next steps: Connect to elasticsearch through Python
First, we will import the elasticsearch module into a Python file. Make sure the Elasticsearch module is installed. Then, we will create an instance of Elasticsearch and connect to the cluster through port 9200. FInally, we will ping the cluster to check if it is reachable.
    
    from elasticsearch import Elasticsearch
    es = Elasticsearch("http://localhost:9200")r
    es.ping()
    
