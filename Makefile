deploy:
	cd blog && npm run production
	git add .
	git commit -m "deploy"
	git push origin HEAD

dazangjing:
	cd dazangjing &&  && npm run production
	git add .
	git commit -m "deploy"
	git push origin HEAD