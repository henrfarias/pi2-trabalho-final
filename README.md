# pi2-trabalho-final
Trabalho final da disciplina de programação para internet 2.

Este projeto é sobre simulação de investimentos onde os rendimentos são calculados com juros compostos. Preencha as informações e veja quanto será o rendimento.

Para rodar a API, você precisará de **node versão >= 16.14.0** e **npm >= 8.5**. Certifique-se de que foram instalados corretamente usando os comandos a seguir no console:
```
node -v
// 16.14.0
```

```
npm -v
// 8.5.0
```

## Passo a passo
1 - Antes de tudo, você precisa ter uma instância Postgres de banco de dados para persistir os dados da aplicação. Crie uma e separe as credenciais. 

2 - Entre na pasta db, copie o conteúdo do arquivo **create_tables.sql** e faça uma query pelo sua GUI de postgres favorita. Isso irá criar o schema e as tabelas necessárias.

3 - Agora navegue até o diretório **api**, crie um arquivo **.env**, copie o conteúdo do arquivo .env.example e repasse para o .env recém criado.
Preencha corretamente com as credencias do seu banco de dados criado no passo 1.
Por fim, com seu console dentro do diretório **api**, rode os seguintes comandos no console: 
```
npm install
```
```
npm run start
```
Quando aparecer a mensagem no console "***server running on port 3000***" significa que a API está no ar.

4 - Agora, para utilizar o frontend da aplicação. Vamos precisar de um servidor hospedando nossas páginas. Uma forma muito simples de fazer isto, é pela extensão do Visual Studio Code, **Live Server**
![image](https://user-images.githubusercontent.com/72604637/167271719-91812863-11a0-4ea6-94b7-7242718e4880.png)

Com a extensão instalada, abra a pasta **frontend** com o VSCode, note que há um botão no canto inferior direito, "Go Live".
![image](https://user-images.githubusercontent.com/72604637/167271796-1e6e8ff4-ade2-49ee-b1d2-90f8eb7de91b.png)

Clique nela e a extensão irá disponibilizar as páginas em seu localhost.

![image](https://user-images.githubusercontent.com/72604637/167271829-9720e7c1-d310-4b9c-96ad-6974ccee64f3.png)

Acesse a página login para começar a utilizar a aplicação!

