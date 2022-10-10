# React Feed

**Criando Container do Banco**

`docker run --name react-feed_postgres -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres`

**Subindo o Container**

`docker start react-feed_postgres`

**Instalando as Dependências**

`yarn`

**Executando a Aplicação**

`yarn dev`