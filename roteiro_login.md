Funcionalidade: Login no site Adopet

Regra de Negócio:
O e-mail deve ter um formato válido.
A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres

-----------------------------------------------------------------------------------

Cenário: Login no sistema com sucesso

Passos:

O usuário acessa a página de login.
O usuário insere seu email "ana@gmail.com" e a senha "Senha123" nos campos correspondentes.
O usuário clica no botão "Entrar".

Resultados Esperados:
O sistema autentica as credenciais fornecidas.
O sistema redireciona o usuário para a página "/home".

------------------------------------------------------------------------------------

Cenário: Falha no login do sistema

Passos:

O usuário acessa a página de login.
O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes.
O usuário clica no botão "Entrar".
Resultados Esperados:

O sistema valida as credenciais fornecidas.
O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".
