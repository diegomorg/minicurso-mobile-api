# API RESTfull desenvolvida com [Node](https://nodejs.org/en/download/), [Express](http://expressjs.com/pt-br/) e [MongoDB](https://www.mongodb.com/what-is-mongodb)

API para fins de estudo no minicurso de mobile

## Requisitos

- [Node](https://nodejs.org/en/download/) e [NPM](https://www.npmjs.com/get-npm) (já incluso)

## Instalação

- Clone o repositório: `git clone https://diego_m@bitbucket.org/diego_m/mc-mobile-api.git`
- Instale as dependências: `npm install`
- Inicie o servidor: `npm start`

## Testando a API
Você poderá testar as requisições HTTP com alguma ferramenta auxiliar, como o [Postman](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop) ou [Advanced Rest Client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo)


## Tutorial para instalar o MongoDB localmente e iniciá-lo como um serviço
- criar pasta `C:\mongodb\data\db`
- criar pasta `C:\mongodb\data\log`
- criar o arquivo `C:\mongodb\data\log\log.txt`
- criar o arquivo `C:\mongodb\mongod.cfg` com o seguinte conteúdo:
```
	systemLog:
		destination: file
		path: C:\mongodb\data\log\mongod.log
	storage:
		dbPath: C:\mongodb\data\db
```
- executar o comando (administrador) de criação do serviço `sc.exe create MongoDB binPath= "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe --service --config=\"C:\mongodb\mongod.cfg\"" DisplayName= "MongoDB" start= "auto"`
- executar o comando para iniciar o serviço `net start MongoDB`

> PS: a variável MONGO_DB, localizada no arquivo .env deverá ser substituída por `mongodb://localhost/nome_do_seu_banco`