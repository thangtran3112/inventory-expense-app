# Backend with AWS and RDS

## Techstacks

- Express, RDS

## Installing local postgres

- Docker
- Or using local postgres. [See instructions](https://medium.com/yavar/install-and-configure-postgresql-and-pgadmin-on-ubuntu-20-04-22-04-52c52c249b9e)

## Configure local postgres

```zsh
sudo -i -u postgres
psql
```

```psql
SELECT version();
ALTER USER postgres WITH PASSWORD 'your_password';
\q
```

```zsh
sudo ufw allow 5432/tcp
sudo service postgresql status
sudo service postgresql start
sudo service postgresql stop
```

## Setup backend and primsma

```zsh
    npm init -y
    npm i prisma @prisma/client
    npx prisma init
    npm i -D typescript ts-node @types/node
    npx tsc --init
    npm i express body-parser cors dotenv helmet morgan concurrently
    npm i -D nodemon @types/cors @types/express @types/morgan
```

## Build prisma schema into database and create client

```zsh
    npx prisma generate
    npx prisma migrate dev --name init
    npm run seed
```

- View schema diagram with either `npx prisma studio` or through `ERD Tool` in `Pg Admin`
