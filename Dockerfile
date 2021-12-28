# syntax=docker/dockerfile:1
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app


# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0

COPY out .
COPY Assets ./Assets
ENTRYPOINT ["dotnet","Adiscount.dll"]