## 03.11.2023, Initioal Meeting at MHH
  - Kennenlernen
  - Projekt definieren
  - Erwartungen abfragen

Projekt:
  Datawarehouse für die Hämatologie Onkologie erstellen. Auf Basis von Open Source oder Low Budget. Good usebility für non technical People muss gewärleistet sein (einfach erweiterbar einfache Daten Extraktion).
  Aufteilung in Unterkategorien:
  
    - PROJEKT-RECHERCHE

    - FEATURE-SELECTION

    - SOFTWARE INSTALLATION
    
    - PILOTPROJEKT MITTELS TESTDATENSATZ


## 10.11.2023
  - Rollenverteilung
  - Erste Software Sammlung
  - Github Einrichtung
  - Besprechung weiteres Vorgehen:

        - Github weiter ausbauen

        - In Software vertiefen

        - Software presentable machen für nächstes Meeting


## 13.11.2023: Sofware Vorstellung
- Problem: Hosting? MHH vs lokal vs Amazon

- Wenn low-budget, dann wie viel maximal? --> mit der MHH besprechen

- 3 Databasses aussuchen und der MHH vorstellen

      - Snowflake (https://www.snowflake.com/de/solutions/industries/healthcare-and-life-sciences/)
    
      - Clickhouse (https://clickhouse.com/)
    
      - elastic search --> Warum können/sollen wir das nutzen, wenn es Geld kostet? --> Am Freitag die Vorstellung abwarten


## 17.11.2023: Vorstellung Installation Elastic search
- kurze mündliche Zusammenfassung des discord Meetings vom 13.11.23 um alle auf einen Stand zu bringen

- Kurzvorstellung der Installation einer kostenlosen Variante von elasticsearch

- Erste Schritte Installation und Besprechung des weiteren Vorgehens

      - Installieren und einarbeiten in elasticsearch
  
      - Erstellen einer Präsentation für die MHH mit drei Software-Möglichkeiten inkl. vorraussichtliche Kosten und Features
    
      - Erstellen der Präsentation für die Vorlesung (Vorstellung der Gruppe) - OneDrive, gemeinsames bearbeiten (Link in der WhatsApp Gruppe)



## 22.11 Meeting zu elasticsearch

- haben festgestellt wir müssen ein frontend bauen (web based)
- Mit betreuern nochmal sprechen clickhoese oder elasticsearch
- Userstory angesprochen
- meilisearch angesprochen --> alle bitte mal mit auseinandersetzten
- Aufgaben verteilung gemacht:
  
		  - Muneeb schreibt guid für Elasticsearch
		  - Patricia überarbeitet Userstory
	  	- Eline macht die Präsentationen fertig
			    --> alle anderen überprüfen dies
	  	- Alle setzten sich damit auseinander wie wir unser Frontend gestallten wollen
    

## 24.11 Besprechung in und nach der Vorlesung

- Opensearch als alternative für elasticsearch
- Frontend Design Idee bis Montag Fertig machen
- Test Daten generieren


## 01.12 Besprechung in und nach der Vorlesung

- alle bringen openserch zum laufen
- alle setzen sich mit React auseinander (Tutorials schauen, ausprobieren, ...)
- updaten der bisherigen Stände, was bereits besteht auf GitHub 


## 01.12. Dokumentenmanager-Besprechung

- Ordnerstruktur bearbeiten in GitHub (nicht viele Ordner mit nur ein oder zwei Dateien dirn)
  	- Vorgabe für Struktur s. Github
  	- nicht jeder Ordner braucht eine readme.md Datei
- auf der ersten Seite (README.md) sind Bilder gern gesehen, die schnell und einfach erklären was wir machen
- Ordner und Dateinamen nicht in Großbuchstaben 
- Branches verwenden
- Code und Bilder die bestehen auch immer gleich auf GitHub
- Autodoc string in visual Studio Code nutzen für erklärungen von Funktionen oder ähnliches empohlen
  

## 06.12 Pilot- Projekt 
- Pilot Projekt von Muneeb auf zweiten Rechner installiert
- Problem: Suchfunktion funktioniert nicht mit OpenSearch
  - Ungewiss wie viel Aufwand es ist das Problem zu lösen
- Derzeitige Lösung: Verwendung von Elastich Search
- Next Steps (genauere Ausführung in Issues):
  	- Download Button
  	- Anpassung des Test datas auf Zahlen
  	- Graphische Darstellung
  ![Bildschirmfoto 2023-12-07 um 10 49 58](https://github.com/health-io/2023-6a/assets/147921668/c0f92ef1-ea65-4755-ad31-6dbd16feb2db)
