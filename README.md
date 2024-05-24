# Kira_Backend_Dev

## Run the project

Prerequisites:

- [Docker](https://docs.docker.com/get-docker/)
- [NodeJS](https://nodejs.org/en/)

Steps:

- Install NodeJS dependencies: `npm i`
- Create files named `.common.env` and `.docker.env`
- The `.common.env` file should contain this line:

```bash
NODE_ENV=docker
```

- Copy the content of the file `.example.env` into the file `.docker.env` and set the right values of the variables
- Run the command:

```bash
npm run docker:start
```

## Usefull commands

- Fix running `pgadmin` in `docker compose`:

```bash
sudo chown -R 5050:5050 db/pgadmin
```

- Restart docker containers:

```bash
npm run docker:restart
```

- Stop docker containers

```bash
npm run docker:stop
```

- Show the application logs

```bash
npm run docker:logs
```

- Show current `docker compose` configuration:

```bash
npm run docker:config
```

## Generators

- Generate `JWT` certificates:

```bash
npm run generate:certs
```

This will generate two file: **es512-private.pem** and **es512-public.pem**. Make sure you have already installed [openssl](https://www.openssl.org/)

- Generate a new schema:

```bash
npm run generate:schema
```

- Generate `swagger` documentation

```bash
npm run generate:swagger
```

- Generate `postman` documentation

```bash
npm run generate:postman
```

**NB**: this command requires that you have already generated swagger documentation

- Generate an API access token

```bash
npm run generate:token
```

This command line is usefull in order to create an access token that can be used for Server-To-Server communication.

It uses the `ADMIN_ID` environment variable to generate the token linked to the given admin identifier if specified. Otherwise it will generate an access token of the user with email address `admin@paramlabs.io` (The user will be create if not found).

## VSCode snippets

- To generate a swagger documentation block, use this snippet: `@swagger`
- To initiate a `routes file` use the snippet `routes`
- To add a new route to an existing `routes file` use the snippet `routes:add`
- To add a new method to an existing `route` use the snippet `routes:method`
