deploy:
	cd dazangjing && npm run production
	mv dist/index.html index.html
	git add .
	git commit -m "deploy"
	git push origin HEAD
