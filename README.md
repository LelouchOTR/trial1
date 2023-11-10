# 2023-6a
# DWH_HEMATOLOGY


## VORBEMERKUNG
Die folgende Dokumentation soll die Strukturierung und Abstimmung des Projektteams "DWH_hematology" verbessern. Die eigentliche Dokumentation des Projekts erfolgt über GitHub.
Dieses Dokument ist daher für alle offen und beschreibbar, auf einen Track Change Modus wird bewusst verzichtet. Inhaltliche Ergänzungen, die noch nicht im Team besprochen wurden, sollten allerdings kenntlich gemacht werden. Durch kursive Schrift und Angabe des Namenskürzel [gb] können neue Einträge inklusive Autor kenntlich gemacht werden und werden beim nächsten Meeting besprochen.




## THEMENÜBERSICHT
VORBEMERKUNG	1

THEMENÜBERSICHT	1

PROJEKTMANAGEMENT	2

TODO	2

DOING	2

DONE	2

ARCHIVE	2

BACKLOG	2

PROJEKTINHALT UND ZIELE	3

PROJEKT-RECHERCHE	3

FEATURE-SELECTION	3

SOFTWARE INSTALLATION	4

PILOTPROJEKT MITTELS TESTDATENSATZ	4




## PROJEKTMANAGEMENT
Unter Issues zu finden (https://github.com/health-io/2023-6a/issues)

##### TODO

##### DOING

##### DONE

##### ARCHIVE

##### BACKLOG
(Hier sollen Ideen aufgeführt werden, die im aktuellen Projektvorhaben nicht umgesetzt werden können, aber nicht in Vergessenheit geraten sollten.)





## PROJEKTINHALT UND ZIELE

### PROJEKT-RECHERCHE 
Das Ziel der Projekt-Recherche besteht darin, eine Übersicht über die am Markt verfügbaren DWH-Projekte zu erstellen, die als Open Source- oder Low-Budget-Projekte angeboten werden.
* Recherche über verfügbare Open Source- oder Low-Budget DWH-Projekte
* Geeignete Projekte in verschiedenen Quellen finden: Internet, Communities, Fachforen, Open Source-Verzeichnisse, Open Source-Plattformen, Blogs
* Bewertungen und Erfahrungsberichten von anderen Nutzern, um Einblicke in die Stärken und Schwächen des jeweiligen DWHs zu bekommen
* Erstellung einer Liste von verfügbaren Projekten und den jeweiligen Features der Software





### FEATURE-SELECTION
Mit der Feature-Selection soll zwei Aufgaben nachgegangen werden: (A) Die Definition der Anforderungen und Funktionalität aus der Sicht der medizinischen Einrichtung und (B) Listung der Features, die durch die Projekte vorgegeben sind. Nach einem Abgleich werden dann 3 Projekte ausgewählt, die beide Voraussetzungen erfüllen.


(A) DEFINITION DER ANFORDERUNGEN UND FUNKTIONALITÄT 
* Open Source- oder Low-Budget Projekt
* Lokale Installation auf einem Webserver (LAMP)
* Usability & User Experience
  * Anforderungen der Software mit den Fähigkeiten der User (Humanmediziner) abgleichen
  * Nutzerrollen hinsichtlich Datenabfrage (User) und Datenimport (Admin) definieren
* Information über die zu speichernden Daten (Texte, Zahlen, Bilder)
* Kompatibilität und Interoperabilität mit den vorhandenen Daten
* Überprüfung der Skalierbarkeit und Erweiterbarkeit des DWH (Kapazitätsgrenzen bei wachsender Datenmenge?)


(B) LISTUNG DER FEATURES DER SOFTWARE
* Listung der identifizierten Projekte und Vergleich der jeweiligen Features
* Bewertung der Features der einzelnen Projekte und Abgleich mit den Anforderungen der User und der medizinischen Einrichtung
* Beispiele für Features des DWH-Projekts:
  * Vorliegende Dokumentation zum DWH über Installation, Konfiguration und Nutzung
  * Überprüfung der Projekt-Community: Eine aktive Community kann Indikator für die Qualität und die Langlebigkeit des Projekts sein
  * Verfügbarkeit von Support für Fragen, Problemen oder Unterstützung
* Die Lizenz des Projekts muss mit dem geplanten Einsatz übereinstimmen





## SOFTWARE INSTALLATION
Mit der Installation auf einem lokalen oder virtuellen Server sollen praktische Erfahrungen im Bereich des Frontend und des Backends gesammelt werden. Zu diesen gehören die Installation, die Einrichtung von Datenbanken, die Anpassung von Einstellungen und die Einrichtung von Benutzerkonten (Liste nicht vollständig). Dieser Teil soll mit den 3 zuvor selektierten Software-Projekten umgesetzt werden.
  - Projekt 1: 
  - Projekt 2: 
  - Projekt 3: 





## PILOTPROJEKT MITTELS TESTDATENSATZ
Um die Funktionalität und Benutzerfreundlichkeit des DWH in einer realen Umgebung zu testen und Erfahrungen zu sammeln, soll ein geeigneter Testdatensatz importiert werden. Die Testdaten bestehen aus zwei Datensätzen: einem Basisdatensatz, der aus einer (anonymisierten) Kohorte von stammzelltransplantierten Patienten besteht, und einem Datensatz, der die entsprechenden Laborparameter enthält. Im Rahmen der Evaluation soll der Vorgang des Imports und selektiven Exports einer Subgruppe beurteilt werden.
* Erstellung eines zweiteiligen Testdatensatzes
  * Basisdatensatz von stammzelltransplantierten Patienten
  * Anreicherung mit Labordaten über primary key (ID-Zahl)
* Testbatterie zur Überprüfung der Features, Benutzerfreundlichkeit und Leistung des DWH_hematology
* Bewertung der Ergebnisse und Diskussion möglicher Verbesserungen des DWH als Kernelement der Projektarbeit (Dokumentation in GitHub)
* Überprüfung der Integrationsmöglichkeiten (vorhandene Schnittstellen), ob das ausgewählte DWH mit anderen Systemen und Technologien integriert werden kann (elektronische Patientenakten, Laborinformationssysteme)
* Einarbeitung eines ärztlichen Kollegen/ einer ärztlichen Kollegin in den Umgang mit dem Data Warehouse (DWH) und Bewertung, inwieweit das System für das vorhandene (medizinische) digitale Ökosystem der Medizinischen Hochschule geeignet ist.
