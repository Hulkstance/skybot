#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 5000
EXPOSE 5001

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["src/Skybot.Web/Skybot.Web.csproj", "src/Skybot.Web/"]
COPY ["src/Skybot.Application/Skybot.Application.csproj", "src/Skybot.Application/"]
COPY ["src/Skybot.Domain/Skybot.Domain.csproj", "src/Skybot.Domain/"]
COPY ["src/Skybot.Infrastructure/Skybot.Infrastructure.csproj", "src/Skybot.Infrastructure/"]
RUN dotnet restore "src/Skybot.Web/Skybot.Web.csproj"
COPY . .
WORKDIR "/src/src/Skybot.Web"
RUN dotnet build "Skybot.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Skybot.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Skybot.Web.dll"]