FROM php:8.3-cli-alpine AS base
WORKDIR /var/app
ENV TZ=Europe/Paris
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

FROM base AS dev
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"
COPY . /var/app
RUN composer install
ENTRYPOINT ["sh", "-c", "composer install && php artisan serve --host 0.0.0.0"]
