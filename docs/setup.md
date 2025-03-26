# Configurações gerais
Este documento contém instruções para configurar e executar o projeto.
O projeto é dividido em duas partes: `backend` e `frontend`, que devem ser configuradas separadamente.

---

## Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão recomendada: 22+)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/) (para clonar o repositório)

## Instalação do Projeto

1. Clone este repositório:
```bash
git clone https://github.com/Ricardo-Tanabe/myapp.git
```

2. Acesse o diretório do projeto:
```bash
cd myapp
```

3. Instale as dependências em `backend` e `frontend`, ambas da pasta raiz:
```bash
npm install --prefix backend
npm install --prefix frontend
```
ou
```bash
yarn install --cwd backend
yarn install --cwd frontend
```

4. Configuração de Variáveis de Ambiente <br />
No `backend`, crie o arquivo .env e insira as informações conforme o arquivo `.env.example`.

5. Rodando o Projeto <br />
Para iniciar tanto o `backend` e o `frontend` execute os seguintes comandos em abas separadas do terminal:

**Iniciar o Backend**
```bash
cd backend && npm run dev
```

**Iniciar o Frontend**
```bash
cd frontend && npm run dev
```

No navegador, acesse http://localhost:3000 para visualizar o `frontend`.

## Resumo
Este documento fornece todas as etapas para configurar e rodar o projeto localmente. <br />
Caso enfrente problemas, consulte a documentação ou abra uma issue no repositório.