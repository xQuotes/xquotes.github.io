deploy:
	cd blog && npm run production
	git add .
	git commit -m "deploy"
	git push origin HEAD