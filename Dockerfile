# syntax=docker/dockerfile:1
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app
#RUN dotnet publish -c Release -o out

# Build runtime image
COPY omar .
COPY Assets ./Assets
ENTRYPOINT ["dotnet","Adiscount.dll"]