FROM php:8.2-apache
# Activer les modules Apache
RUN a2enmod rewrite headers
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html
RUN apt-get update -y
RUN apt-get install -y libzip-dev
RUN apt-get install -y libzip-dev zip
RUN docker-php-ext-install mysqli pdo_mysql
RUN docker-php-ext-configure zip
RUN docker-php-ext-install zip
# Redémarrer le service Apache
RUN service apache2 restart

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('sha384', 'composer-setup.php') === 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer