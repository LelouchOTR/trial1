# How to install


Start by goingt to: https://opensearch.org/downloads.html

Then right klick on docker-compose.yml and download into your desired directory

  Example:
    
    C:\Users\Eline_Geerits\Opensearch

When Downloaded Open a Terminal for Example your PowerShell

Then open the directory with the docker-compose.yml file

  Examle:
  
     cd "C:\Users\Eline_Geerits\Opensearch"

This is what it should look like:
![image](https://github.com/health-io/2023-6a/assets/101985205/bde5a260-b8dd-4639-81bd-e83125f59ac2)

Once in the directory run docker-compose up (to see what this looks like watch https://www.youtube.com/watch?v=UIr5krQVIVI)

    docker-compose up


If that does not work make sure to install WSL 2 (https://learn.microsoft.com/en-us/windows/wsl/install)

  - now WSL 2 is installed open it with:

        wsl
![image](https://github.com/health-io/2023-6a/assets/101985205/b8af3b3e-7ae4-4b75-950e-e40e3406d336)

  - now run:

        sudo snap install docker
![image](https://github.com/health-io/2023-6a/assets/101985205/d5deedb2-7b39-40cf-b9ab-bc8f508cb448)


  - check if the installation has worked with:

        docker run hello-world

  - once vrified run docker-composed (if docker dose not run verify Group Membership)

        docker-compose up

    
![image](https://github.com/health-io/2023-6a/assets/101985205/255ebc9b-a405-4e80-8bb4-c89437a81bc6)


  - now you can navigate to: http://localhost:5601/ 

