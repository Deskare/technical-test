<p align="center"><a href="https://deskare.io" target="_blank"><img src="https://app.deskare.io/picture/logo/small-logo.svg" width="400"></a></p>

## Test technique Deskare

Bienvenue dans le test technique de Deskare. <br>
Le but sera ici de comprendre avec Victor les enjeux et les aboutissants d'une intégration API.

## Prérequis

- Docker
- PHP 8.1
- composer

## Installation

```sh
git clone https://github.com/Deskare/technical-test.git
cd technical-test && composer install
cp .env.example .env
./vendor/bin/sail up -d
```

### But de l'exercice

Réaliser une intégration avec le SIRH Lucca ([Documentation](https://lucca.stoplight.io/docs/lucca-legacyapi/ZG9jOjM3OTk0NDk5-getting-started)).
Credentials : 

```sh
API_KEY : de6c75c9-e77e-48be-9a0b-a1f240a3b347,
DOMAIN : https://deskare.ilucca-demo.net
```

Discussion libre sur le format et l'organisation du code pour réaliser ce service.

