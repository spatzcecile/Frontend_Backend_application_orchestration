# Frontend_Backend_application_orchestration
Create a simple web NodeJS application consisting of a frontend and a backend. The application simply counts the number of times the page has been accessed by the current user.  The application is to be Dockerized, so that requires 2 docker containers that need to communicate with each other: one for the frontend and one for the backend. Remember that you can use the available Node docker image on the Docker hub. Since the 2 containers need to communicate, make sure to use the Docker Compose to facilitate deployment.  The code must also contain an integration test, that tests the communication between the frontend and backend. This test will be later ran on release.