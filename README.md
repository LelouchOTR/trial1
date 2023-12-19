# Willkommen bei DWH_HEMATOLOGY

DWH_HEMATOLOGY is an ambitious project aimed at improving data analysis in hematology, hemostaseology, oncology, and stem cell transplantation. Our focus is on developing a user-friendly data warehouse that allows for easy handling and analysis of medical data without the need for programming skills.

#### Our commitment to excellence:

 - Our team strives to create a pioneering solution that sets new standards. We are motivated, dedicated, and work intensively to push the boundaries of medical data analysis.

#### Our internal motivation:

 - In our team, we bring together our talents and our passion for innovation. We are firmly committed to motivating each other and bringing out the best in our abilities to make this project a success.

#### Shaping the Future Together:

 - We document our progress to remain transparent and accessible. Within our team, we create an environment that supports our shared vision for the future of medical data analysis. Your support, ideas, and expertise are valuable to us in achieving this goal and advancing the project.





## Topics


* [Projektinhalt und Ziele](https://github.com/health-io/2023-6a/tree/5157ee6f25184b2d91f290500488a6b2ca0390eb/docs/Projektinhalt_und_Ziele)

* [Anleitungen zur Software-Installation](https://github.com/health-io/2023-6a/tree/9c79a6af5a9fabc4aaf10ef3a0c54d7f1fd62d57/docs/software_installation)
  
* Pilotprojekt mittels Testdatensatz





## Projektmanagement

Die aktuellen To Dos sind in dem Reiter [Issues](https://github.com/health-io/2023-6a/issues) zu finden:
 


### Rolleneinteilung
* Beutel Gernot (MHH): Projekt Inhaber
* Geerits Eline: Projekt Maneger
* Mohammad Muneeb: Entwickler
* Lelke Thies: Entwickler
* Lösekrug Julia: Anforderungsmanegment
* Weßel Patricia: Anforderungsmanegment
* Kirstein Janka: Dokumentationsmanegmet
* Daecke Niklas: Dokumentationsmanegmet
* Wiechers Lara (MHH):


## Übersicht über Grundidee

Für ein einfaches Verständnis über die Idee/Ziele dieses Projekts sind hier die Userstory und eine erste Idee eines möglichen Frontend für eine einfache Nutzung des DWH dargestellt. 

### Userstory

Durch das Projekt soll es möglich sein, alle zu einem Patienten gesammelten Daten zusammenzufügen und gemeinsam zu speichern. 
Benötigt ein Arzt zu einem späteren Zeitpunkt die Daten oder auch nur einen Teil davon, kann er sich diese über ein intuitiv zu bedienenen Frondend ausgeben lassen. 

![alt text](docs/user-story.png)

### Frontend

Eine Idee für ein Frondend für die intuitive Nutzung ist hier dargestellt. Inwieweit dies umgesetzt werden kann muss im laufe des Projekts geklärt werden.

![alt text](docs/erster-entwurf-frontend.jpeg)

## Setup

### Prerequisites

Make sure Node.js and npm are installed and configured correctly. 

Get your elasticsearch node running by following the instructions in the [elasticsearch setup tutorial](https://github.com/health-io/2023-6a/blob/f4e09bb266f90e8198dc85516c62dc5e8b1930d1/docs/software_installation/elasticsearch/es_kib_installation_for_dummies.md). 

Make sure you have the data from the sample data file present in the ```bulk.json``` file imported into elasticsearch(/opensearch). You will find the file in the ```simple_search_interface``` branch's root directory. You can bulk import data into elasticsearch using: 

```
curl.exe -X PUT "localhost:9200/productdata/_bulk?pretty" -H 'Content-Type: application/x-ndjson' --data-binary "@[...path to sample_data_set...]\bulk.json"
```
### Starting the app

Clone the repository onto your machine. Open the repository in VS Code, then open a terminal and run ```npm install``` to update the dependencies. Then run ```npm run dev```. Make sure the working directory is ```"~\2023-6a"```

You should now see the search interface on port 3000 and be able to interact with it. In case of missing modules, manually install the modules mentioned in the error message using ```npm install```

### Developer notes

#### Upload data from excel sheet to elasticsearch

In the web app, upload the file ```example_medical.xlsx``` present in the ```sample_datasets``` folder. The data will be uploaded to a temporary index called ```temp_index```. Take note that any data that was already present on this index will be overwritten. The functionality on empty fields/values has not been tested.

To easily view the data in the index, download the tool called ```elasticvue``` (or add the browser extension) from https://elasticvue.com/ and navigate to ```indices``` and click on ```temp_index```. If you successfully managed to upload the file to your elastic node, you will see the sample patient data.
