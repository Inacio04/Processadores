# Comparador de Processadores AMD x Intel

## Descrição
Este projeto web visa auxiliar na comparação de processadores AMD e Intel. O usuário pode realizar pesquisas por palavras-chave e obter informações detalhadas sobre os modelos encontrados, como número de núcleos, clock speed e links para especificações técnicas.

## Tecnologias Utilizadas
* **HTML:** Estrutura básica da página web.
* **CSS:** Estilização da página, definindo a aparência visual dos elementos.
* **JavaScript:** Lógica da aplicação, responsável por:
    * Capturar a entrada do usuário no campo de pesquisa.
    * Filtrar os dados da base de dados.
    * Renderizar os resultados na página.
* **Markdown:** Formato utilizado para escrever o README.

## Como funciona
1. **Pesquisa:** O usuário digita uma palavra-chave relacionada a um processador no campo de pesquisa.
2. **Filtragem:** O JavaScript filtra a base de dados (armazenada no arquivo `dados.js`) para encontrar os processadores que correspondem à pesquisa.
3. **Exibição:** Os resultados da pesquisa são exibidos na seção "Resultados da Pesquisa", com informações como título, descrição e link para mais detalhes.

## Estrutura dos arquivos
* **index.html:** Arquivo principal da página web.
* **project.css:** Arquivo de estilo CSS para a página.
* **dados.js:** Arquivo JavaScript contendo a base de dados com informações sobre os processadores.
* **app.js:** Arquivo JavaScript principal, responsável pela lógica da aplicação.

## Como rodar o projeto
1. **Clonar o repositório:** Clone este repositório para o seu computador local.
2. **Abrir em um editor de código:** Abra os arquivos em seu editor de código favorito (Visual Studio Code, Sublime Text, etc.).
3. **Abrir um servidor local:** Utilize um servidor local como o Live Server (extensão para Visual Studio Code) ou um servidor HTTP para visualizar a aplicação no seu navegador.

## Próximos passos
* **Expandir a base de dados:** Adicionar mais informações sobre os processadores, como benchmarks e gráficos comparativos.
* **Melhorar a interface do usuário:** Criar uma interface mais visual e interativa.
* **Implementar filtros adicionais:** Permitir que o usuário filtre os resultados por fabricante, número de núcleos, etc.

Feito com ajuda da Alura na Imersão com IA

https://meu-projeto-final.vercel.app
