[![.github/workflows/tests.yml](https://github.com/taleeus/benthos-v2/actions/workflows/tests.yml/badge.svg)](https://github.com/taleeus/benthos-v2/actions/workflows/tests.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/fab2a20c-ed4d-4398-9028-e012c0679503/deploy-status)](https://app.netlify.com/sites/benthos/deploys)

---

![Benthos Logo](https://github.com/taleeus/benthos-v2/blob/main/public/assets/logos/logo-black.svg?raw=true)

---

Website for my band Benthos. Powered by Vue 3 and Tailwind ✌️

## Instructions
Install packages by running:
```sh
yarn
```

Provide a Postgres database connection; we need it for the EPK login. To do this, create a `.env` file in the root of the project, copy the `env.template` content and fill the placeholders.

Then, run Prisma Deploy to build the tables and seed them:
```sh
yarn prisma:deploy
```

Start the development server by running:
```sh
yarn netlify:dev
```
