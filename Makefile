.PHONY: query
query:
	mysql -h 127.0.0.1 -u root -P 3306 -p db

.PHONY: purge
purge: stop
	docker system prune -af