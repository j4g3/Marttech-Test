## Requerimentos

- docker e docker-compose instalado

## Deploy

Sobe, aplicações e bancos de dados, definidos no docker-compose.yml

```sh
docker-compose up --build -d # ou docker compose up --build -d
```

## Populate

Para rodar migrations no banco de dados e popular os dados

```sh
./backend/POPULATE.sh
```

## Testar

## Aplicação Web http://localhost:3000

## Aplicação API http://localhost:3333

## Aplicação WebSocket ws://localhost:3333

---

## API

# Usuário

- ## Novo usuário

  ## POST: /users

  ### Body

  ```json
  {
    "name": "nome do usuário",
    "email": "email@gmail.com",
    "password": "senha do usuário"
  }
  ```

- ## Login de usuário

  ## GET: /users

  ### Headers

  ```json
  {
    "Authorization": "Basic ZW1haWxAZ21haWwuY29tOnNlbmhhIGRvIHVzdeFyaW8="
  }
  ```

# Salas

- ## Nova sala

  ## POST: /rooms

  ### Body

  ```json
  {
    "name": "Nome da nova sala"
  }
  ```

- ## Mudar nome da sala

  ## PUT: /rooms

  ### Body

  ```json
  {
    "id": "61bec9c5-fc01-4b41-9ca2-273d143264a0",
    "new_name": "Novo nome para a sala"
  }
  ```

- ## Todas salas

  ## GET: /rooms

  ### Sem headers

  ```json
  {}
  ```

- ## Mensagems de uma sala especifica
  ## GET: /rooms/:room_id
  ### Sem headers
  ```json
  {}
  ```
