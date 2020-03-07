# Getting Started
1.	[Instalar o NodeJS](https://nodejs.org/en/)
2.	Instalar as dependências respectivas: <code>npm install</code>
3.	Rodar o projeto em DEV (Executa o nodemon para auxílio): <code>npm run dev</code>
4. <strong>TODA E QUALQUER ALTERAÇÃO</strong> Validar seu código: <code>npm run lint</code>
4. Existe um path para swagger: <code>/docs</code>

# Rotas

<b><strong>GET: </strong>/{token}</b>
<ul>
	<li>Input: <code>{"token": String}</code> (Token JWT)</li>
	<ul>
		<li>JWT decoded:</li>
	</ul>
</ul>

```javascript
			{
				"reference": String,
				"role": String
			}
```
<ul>
	<li>Output:</li>
	<ul>
		<li>StatusCode: <strong>200</strong> 
			<code>{ "reference": String, "role": String }</code> Exmaple: <code>{"reference":"systemOrigin","role":"signer"}</code>
		</li>
		<li>StatusCode: <strong>401</strong> 
			<code>Unauthorized</code>
		</li>
	</ul>
</ul>

# Build and Test

Este projeto contém uma dependência chamada [HUSKY](https://www.npmjs.com/package/husky), sendo assim, qualquer <b>commit</b> ou <b>push</b>, será acionado automaticamente o [LINT](https://www.npmjs.com/package/eslint) e testes unitários [JASMINE](https://jasmine.github.io/setup/nodejs.html).

<ul>
    <li>
        Rodar projeto em DEV: <code>npm run dev</code>
    </li>
    <li>
        Rodar projeto: <code>npm start</code>, (Colocar variáveis de ambiente)
    </li>
    <li>
        Rodar testes de cobertura: <code>npm run cover</code>
    </li>
    <li>
        Validar seu código: <code>npm run lint</code>
    </li>
    <li>
		SWAGGER <code>/docs/</code>
    </li>
</ul>

Rodando o projeto com DOCKER:

<ul>
	<li>
		No terminal, acessar a raiz do projeto, onde se encontra o Dockerfile.
	</li>
    <li>
        Criar imagem: <code>docker build -t luiza-labs/api-authenticator .</code>
    </li>
    <li>
        Rodar a imagem: <code>docker run -p 3000:3000 luiza-labs/api-authenticator</code>
    </li>
</ul>