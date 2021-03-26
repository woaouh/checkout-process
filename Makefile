install:
	npm ci

start:
	npm start

lint:
	npm run lint

lint-styles:
	npm run lint-styles

lint-styles-fix:
	npm run lint-styles-fix

test:
	npm test

push: lint lint-styles
	git push
