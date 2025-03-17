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
    npm i -D typescript
    npx tsc --init
```
