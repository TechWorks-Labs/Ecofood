FROM php:8.2.0-apache-bullseye

# Activer pdo, conf et la réécriture d'url
RUN apt-get update && apt-get install -y unzip \
    && docker-php-ext-install pdo pdo_mysql \
    && a2enmod rewrite \
    && pecl install redis-5.3.7 \
    && pecl install xdebug-3.2.0 \
    && docker-php-ext-enable redis xdebug

COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

WORKDIR /var/www/html
COPY fr.techworks.ecofood .

RUN composer install

CMD ["sh", "-c", "composer install; apache2-foreground"]
