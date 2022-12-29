FROM php:8.2.0-apache-bullseye

# Activer pdo, conf et la réécriture d'url
RUN docker-php-ext-install pdo pdo_mysql \
    && a2enmod rewrite