# Adiscount app

This is the source code for the Adiscount app. It contains both client and back code.

## Requirements
- [dotnet v6](https://dotnet.microsoft.com/en-us/)
- [node.js](https://nodejs.org/en/download/)
- [mariadb](https://mariadb.org/)
## to deploy
- [docker](https://www.docker.com/products/docker-desktop)
- [WSL limux kerner](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

## Setup
- Clone the project
```shell script
$> git clone https://github.com/Thegitway/Adiscount.git
```
- Go in the project
```shell script
$> cd Adiscount
```
you will find in (Adiscount\db\MariaDbContext.cs) the user and password for the database

- Exec the following commands to run the project
```shell script
$> dotnet run
```
the api will listening to port 5000:80 or 5003:443 ssl

for exemple to make a call 
https://localhost:5000/api/client
you will get all client in the DB


## Deployment

Deployments are handled by [Docker] i user docker-compose to generate both container for mariadb and (api+react)

- Exec this command:
- to generate a deployment folder named `out`
```shell script
$> dotnet publish -o out
```
- now you should create an image and also containers from the docker-compose.yaml file
 `Docker Desktop must be launched`
```shell script
$> docker-compose up
```
