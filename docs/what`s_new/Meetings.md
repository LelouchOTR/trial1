## 03.11.2023, Initioal Meeting at MHH
  - Getting to know each other
  - Define the project
  - setting expactations

Project:
Create a data warehouse for hematology and oncology. Based on open source or low budget. Good usability for non-technical people must be ensured (easy to expand, simple data extraction).
Division into subcategories:
  
    - PROJECT RESEARCH

    - FEATURE-SELECTION

    - SOFTWARE INSTALLATION
    
    - PILOT PROJECT USING TEST DATASET


## 10.11.2023
  - Assignment of Roles
  - Initial Software Collection
  - GitHub Setup
  - Discussion of Next Steps:

        - Further Development on GitHub

        - Deepen Knowledge in Software

        - Prepare Software for Presentation in the next Meeting


## 13.11.2023: Software Presentation
- Problem: Hosting? MHH vs lokal vs Amazon

- If low-budget, then how much is the maximum? --> Discuss with the MHH

- Select 3 databases and present them to the MHH

      - Snowflake (https://www.snowflake.com/de/solutions/industries/healthcare-and-life-sciences/)
    
      - Clickhouse (https://clickhouse.com/)
    
      - elastic search --> Why can/should we use it if it costs money? --> Wait for the presentation on Friday


## 17.11.2023: Presentation of Elasticsearch Installation
- Short verbal summary of the Discord meeting on 13.11.23 to get everyone up to speed

- Brief introduction to the installation of a free version of Elasticsearch

- First steps: Installation and discussion of the next steps

      - Install and familiarize with Elasticsearch
  
      - Creating a presentation for the MHH with three software options, including estimated costs and features
    
      - Creating the presentation for the lecture (group introduction) - OneDrive, collaborative editing (link in the WhatsApp group)



## 22.11 Meeting for elasticsearch

- We have realized that we need to build a frontend (web-based)
- Speak with supervisors again about ClickHouse or Elasticsearch
- Discussed user stories
- Discussed Meilisearch --> Everyone, please take some time to familiarize yourselves with it
- Task distribution has been done:
  
		  - Muneeb is writing a guide for Elasticsearch
		  - Patricia is revising the user story
	  	  - Eline is finishing the presentations
			    --> Everyone else, please review the presentation
	          - Everyone is working on how we want to design our frontend

## 24.11 Discussion during and after the lecture

- Opensearch as an alternative for Elasticsearch
- Complete the frontend design idea by Monday
- Generate test data

## 01.12 Discussion during and after the lecture

- Everyone gets Opensearch up and running
- Everyone is getting familiar with React (watching tutorials, trying it out, ...)
- Updating the current status, what already exists, on GitHub

## 01.12. Document Manager meeting

- "Edit folder structure on GitHub (not too many folders with only one or two files inside)
  	- Guidelines for structure, see GitHub
  	- Not every folder needs a readme.md file
- On the first page (README.md), pictures are welcome to quickly and easily explain what we do
- Folder and file names in lowercase, not uppercase
- Use branches
- Code and images that exist should always be consistent on GitHub
- Recommend using Autodoc string in Visual Studio Code for explanations of functions or similar
  

## 06.12 Pilot- Project 
- Muneeb installed the pilot project on a second computer
- Problem: Search function is not working with OpenSearch
  - Uncertain about the effort required to solve the problem
- Current solution: Using Elasticsearch
- Next Steps (More detailed explanation in the Issues section):
  	- Download Button
  	- Adjustment of the test data to numbers
  	- Graphical representation
  ![Bildschirmfoto 2023-12-07 um 10 49 58](https://github.com/health-io/2023-6a/assets/147921668/c0f92ef1-ea65-4755-ad31-6dbd16feb2db)


## 08.12. Lecture
Appointments: 
 - 19.01.2024 - Presentation of projects
 - 26.01.2024 - Alternative date for the presentation of projects (in case of illness)
 - Early March (04.03?)- Submission of the written summary

## 15.12. Lecture 
 - Editing GitHub (links, spelling errors, ...)
 - Frontend web app successfully running on various laptops
   - Main issue: uploading files not using curl, but curl.exe (corrected on GitHub)
 - Next week, the lecture probably won't take place
