# Avaliação quanto a Desenvolvimento Web



## Imagens
- [ ] **Adicionar `alt`** para imagens, botões-imagem, gráficos e imagens de mapas com pontos de acesso.
- [ ] **Adicionar `alt=""`** para imagens decorativas que não têm significado.
- [ ] **Incluir a descrição no `alt`** para imagens que contêm texto.
- [ ] **Fornecer descrição detalhada** para imagens complexas (gráficos, diagramas, etc.).
- [ ] **Texto alternativo para imagens funcionais** (botões e links com ícones).


## padrão de imagem do site avaliado
[Imagem retirada do site](../../imagens/imgAlt.png)

![ALT da imagem retirada do site](../../imagens/alt.png)

## Vídeos
- [X] **Adicionar legendas** para áudio em vídeos existentes.
- [X] **Evitar conteúdo com *flashes* (gatilhos para convulsões)** ou manter abaixo dos limites.
- [ ] **Incluir audiodescrição** para vídeos com conteúdo visual relevante.
- [ ] **Incluir janela de Libras** para vídeos com informação essencial.
- [ ] **Fornecer transcrição** também para vídeos e áudios ao vivo.

## Padrão de vídeo 

![Vídeo retirado do site](../imagens/video.png)


## Controles
- [X] **Adicionar `href`** para links.
- [X] **Adicionar underline** nos links.
- [X] **Adicionar estados de foco** em campos de entrada, botões e elementos interativos.
- [ ] **Adicionar `type="button"`** nos botões.
- [ ] **Adicionar skip-link** (link para pular) para o conteúdo principal.
- [ ] **Identifique e comunique** links que abrem em uma nova guia ou janela.
- [ ] **Evitar mudanças de contexto por foco ou entrada**, ou informar ao usuário.
- [ ] **Permitir desfazer ações feitas por clique ou toque**.
- [ ] **Evitar acionamento com down-event apenas** (usar up-event ou alternativa).

# Padrões de campos de entrada, links e botões
![Vídeo retirado do site](../imagens/link.png)
![Vídeo retirado do site](../imagens/href.png)
![Vídeo retirado do site](../imagens/foco.png)


## Formulário
- [ ] **Adicionar `label`** para os campos de entrada associados ao elemento correspondente.
- [ ] **Adicionar `<fieldset>` e `<legend>`** para seções no formulário.
- [ ] **Adicionar `autocomplete`** para campos de entrada.
- [ ] **Exibir `errors`** (erros) de entrada acima do formulário, após envio.
- [ ] **Adicionar `aria-describedby`** para os campos de entrada.
- [ ] **Exibir mensagens de erro e sucesso** não só visualmente.
- [ ] **Evitar solicitar reentrada de informações já fornecidas.**
- [ ] **Autenticação sem desafios cognitivos** (sem puzzles, cálculos, etc.).

## Mídia
- [ ] **Impedir `autoplay`** para vídeos e áudios.
- [ ] **Adicionar `type`** para botões e entradas.
- [ ] **Adicionar pausa** para todas as mídias.
- [ ] **Adicionar transcrição** para áudios.

## Semântica
- [ ] Uso de elementos **nativos HTML**.
- [ ] Fluxo contínuo e **lógico**.
- [ ] Tem **descrições** que podem ser **facilmente compreendidas**.
- [ ] Tem a **semântica correta**.
- [ ] É **objetivo** nos **rótulos**.

## Texto
- [ ] **Evitar** o uso de **textos dentro de imagens**.
- [ ] **Redimensiona os textos na página**, aumentando o zoom em até 200%.
- [ ] **Alturas** das fontes **não são fixas**.
- [ ] **Garantir espaçamento entre letras, palavras e parágrafos**.

## Teclado
- [ ] **Funcionalidades** da página web estão **disponíveis por teclado**.
- [ ] Quando se tem o **mouseover é permitido o uso de teclado**.
- [ ] **Foco visível** – remova elementos focalizáveis ​​invisíveis.
- [ ] Adicionar o **`.hover, .focus {}`** para tornar o foco visível.
- [ ] Permite/visa o uso de **atalhos de teclado** como o `TAB`.
- [ ] **Primeiro** item interativo da página é um link para o **conteúdo principal**.
- [ ] **Evitar atalhos com teclas únicas** ou permitir desativar/remapear.
- [ ] **Fornecer instruções** para uso de componentes customizados.

## Título
- [ ] A **hierarquia** de conteúdo da página é definida por sua **lógica**, não pelo tamanho do texto.
- [ ] Use **elementos de título `h1 h2 h3`** para apresentar o conteúdo.
- [ ] **Não pular níveis lógicos**.
- [ ] **Toda página contém um título `h1`** descrevendo a página.

## Tabela
- [ ] **Use o `table`** para elementos em formato de tabela.
- [ ] Insira cabeçalhos para explicar os dados, **use `th` com `scope` correto**.
- [ ] **Use o `caption`** para fornecer um título para a tabela.
- [ ] **Associação semântica entre cabeçalhos e células**.
- [ ] **Evitar uso de tabelas para layout**.

## Modais
- [ ] Deve ser **fácil fechar**.
- [ ] Permitir o **uso da tecla escape `ESC`**.
- [ ] A interação é uma **tarefa simples**.
- [ ] **Evita** modais em **tela cheia**.
- [ ] **Não abrir um modal a partir de outro modal**.

## Dispositivo Móvel e Tocável
- [ ] O site pode ser **rotacionado** para qualquer orientação.
- [ ] **Impedir** rolagem horizontal.
- [ ] **Garantir** que botões e links possam ser ativados facilmente.
- [ ] **Garantir** espaço suficiente entre elementos interativos.
- [ ] **Área clicável mínima de 24px CSS**, preferencialmente 44px (WCAG 2.2).

## Ferramentas e Extras
- [ ] Permitir **pausar, parar ou ocultar conteúdo em movimento**.
- [ ] Usar **breadcrumbs** informando a localização atual nas páginas.
- [ ] Colocar página ou **área de dúvidas e dicas de acessibilidade**.
- [ ] Áreas clicáveis com no mínimo **44px de altura e largura**.
- [ ] No caso de **captcha**, garantir alternativa acessível.
- [ ] Incluir um **campo de busca**.


## Histórico de Versões

| Versão | Descrição | Autor(es) | Data | Revisor(es) | Data de revisão |
|--------|-----------|-----------|------|-------------|-----------------|
| 1.0 | adição de checklist e inicio da avaliação de imagens | [Pedro Luiz](https://github.com/pedroluizfo) | 23/06/2025 |  |  |