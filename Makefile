API := "node-api-container"
USER := "rcoleworld"
.PHONY: build-image
build-image:
	cd ./api &&\
	docker-compose build

.PHONY: run-server
run-server: build-image
	cd ./api &&\
	docker-compose up

.PHONY: remove-all
remove-all:
	cd ./api &&\
	docker rmi -f $(API).

.PHONY: stop 
stop:
	docker ps -aq | xargs docker stop 2> /dev/null || echo "none"

.PHONY: purge
purge: stop
	docker system prune -af