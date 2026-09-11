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
cd technical-test
cp .env.example .env
docker compose up -d
docker compose exec app sh
  > composer install
  > php artisan key:generate
  > php artisan migrate
```

### But de l'exercice

Réaliser une intégration avec l'API du service RH Lucca, et afficher la liste des utilisauters côté front.

```sh
BASE_URL: https://jsonplaceholder.typicode.com/users
```

Discussion libre sur le format et l'organisation du code pour réaliser ce service.

