<p align="center"><a href="https://deskare.io" target="_blank"><img src="https://app.deskare.io/photo/logo/small-logo.svg" width="200"></a></p>

## Test technique Deskare

Bienvenue dans le test technique de Deskare. <br>
Le but sera ici de comprendre avec Victor les enjeux et les aboutissants d'une intégration API.

## Stack technique
    Backend
        Laravel 11
    Frontend
        Vue
        Tailwind css
## Prérequis

- Docker

## Installation

```sh
git clone https://github.com/Deskare/technical-test.git
cd technical-test && composer install
cp .env.example .env
docker compose up -d
docker compose exec app sh
  > php artisan key:generate
  > php artisan migrate
```

### But de l'exercice

Réaliser une intégration avec une api ([Documentation](https://lucca.stoplight.io/docs/lucca-legacyapi/ZG9jOjM3OTk0NDk5-getting-started)).
Credentials : 

```sh
#User
URL: https://randomuser.me/api/?results=50
```

Discussion libre sur le format et l'organisation du code pour réaliser ce service.

