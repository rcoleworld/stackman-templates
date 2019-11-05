#!/bin/bash
if docker-compose ps | grep mysql-db | grep Up; then
    mysql -h 127.0.0.1 -u root -P 3306 -p db
else
    echo "There is not container instance of mysql"
fi