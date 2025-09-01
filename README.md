<p align="center"><a href="https://deskare.io" target="_blank"><img src="https://app.deskare.io/photo/logo/small-logo.svg" width="200"></a></p>

## Test technique Deskare

Bienvenue dans le test technique de Deskare. <br>
Le but sera ici de comprendre avec Victor les enjeux et les aboutissants d'une intégration API.

## Stack technique
    Backend
        Laravel 12
    Frontend
        Vue 3.5
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

Réaliser une intégration avec une api, et afficher le résultat de l'API côté front.

```sh
#User
URL: https://randomuser.me/api/?results=50
```

Discussion libre sur le format et l'organisation du code pour réaliser ce service.

