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
BASE_URL: https://deskare-2025-01-17.ilucca-demo.net
API_KEY: ae8655e6-9841-4686-a983-321425f2e88c
```

Discussion libre sur le format et l'organisation du code pour réaliser ce service.

