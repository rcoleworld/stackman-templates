API := "node-api-container"
USER := "rcoleworld"

.PHONY: build-image
build-image:
	cd $(PWD)/db &&\
	docker-compose build
	cd $(PWD)/api &&\
	docker-compose build &&\
	cd $(PWD)/frontend &&\
	docker-compose build
	

.PHONY: run-server
run-server: build-image
	cd $(PWD)/db &&\
	docker-compose up -d
	cd $(PWD)/api &&\
	docker-compose up -d &&\
	cd $(PWD)/frontend &&\
	docker-compose up

.PHONY: remove-all
remove-all:
	cd ./api &&\
	docker rmi -f $(API).

.PHONY: stop 
stop:
	cd $(PWD)/api &&\
	docker-compose down &&\
	cd $(PWD)/frontend &&\
	docker-compose down

.PHONY: query
query:
	mysql -h 127.0.0.1 -u root -P 3306 -p db

.PHONY: purge
purge: stop
	docker system prune -af