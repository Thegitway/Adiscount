FROM mcr.microsoft.com/dotnet/sdk:6.0
WORKDIR /app


# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0

COPY out .
COPY Assets ./Assets
ENTRYPOINT ["dotnet","Adiscount.dll"]