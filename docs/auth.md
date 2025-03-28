# Autenticação (Auth)

## Introdução
A autenticação nesta aplicação é baseada em **JSON Web Tokens (JWT)**. Os usuários realizam login e recebem um **token de acesso** e um **refresh token**, garantindo acesso seguro aos recursos protegidos.
- O **frontend** gerencia o estado de autenticação via **Context API** e armazena os tokens de forma segura.
- O **backend** valida os tokens, protege rotas e permite a renovação de sessão.
- Tokens invalidados não podem ser reutilizados, reforçando a segurança.

---

## Fluxo de Autenticação
1. O usuário envia email e senha para `POST /api/auth/login`.
2. O backend valida as credenciais e retorna:
    - Token de Acesso (expira rapidamente, usado nas requisições).
    - Refresh Token (expira em um tempo maior e é usado para renovar o Token de Acesso).
3. O frontend salva os tokens de maneira segura (`httpOnly cookies` ou `Secure Storage` no mobile).
4. Para acessar rotas protegidas, o frontend envia o Token de Acesso no cabeçalho `Authorization`.
5. Se o Token de Acesso expirar, o frontend usa o Refresh Token para obter um novo.

## Endpoints do Backend
Método|Rota|Descrição
------|----|---------
POST|/api/auth/login|Realiza login e retorna tokens
POST|/api/auth/refresh|Gera um novo Token de Acesso com o Refresh Token
POST|/api/auth/logout|Invalida o Refresh Token
GET|/api/auth/me|Retorna os dados do usuário autenticado

## Gerenciamento de Autenticação no Frontend
- O **Context API** gerencia o estado do usuário.
- O **Token de Acesso** é enviado automaticamente nas requisições autenticadas.
- O **Refresh Token** é usado apenas quando o **Token de Acesso** expira.
- Em caso de erro de autenticação, o usuário é **deslogado automaticamente** e redirecionado para a tela de login.

## Validação e Autorização
- O backend utiliza **middlewares de autenticação** para proteger rotas sensíveis.
- Roles (`admin`, `user`, etc.) determinam acessos específicos a recursos.
- Tokens são armazenados de forma segura para evitar vulnerabilidades.
- Medidas contra ataques:
    - Tokens curtos e com escopo limitado.
    - Validação estrita dos tokens antes do uso.
    - Logout remove permanentemente o Refresh Token

## Tratamento de Erros
Erro|Causa|Solução
----|-----|-------
`401 Unauthorized`|Token inválido ou ausente|O frontend deve redirecionar para login
`403 Forbidden`|Usuário sem permissão|Verificar role do usuário
`TokenExpiredError`|Token de Acesso expirado|Renovar token usando Refresh Token
`InvalidTokenError`|Token inválido|Solicitar login novamente
`RefreshTokenInvalidError`|O Refresh Token foi revoado ou é inválido|Redirecionar usuário para login

O presente documento serve como referência para entender a autenticação no projeto.