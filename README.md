An express-typescript boilerplate with a sample user module.

### Includes following

- Typescript,
- Prettier,
- ESLint,
- Express

### How to use?

- You should have NodeJS 14+ installed.

```shell script
# This you should run once, when you clone this repository
npm install

# This allows for instant compilations.
npx tsc --watch

# Styling, based on .prettierrc.json
npx prettier --write .

# Linting, based on .eslintrc.json
npx eslint --fix

# Starting the app
node index.js
```

- Additionally you can use nodemon or pm2 for automatic restart on compilation.