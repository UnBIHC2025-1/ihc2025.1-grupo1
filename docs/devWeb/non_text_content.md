# Desenvolvimento

"Nessa fase, é importante garantir que a equipe de desenvolvimento saiba como implementar acessibilidade, verificá-la e usar as ferramentas disponíveis no mercado para testes e padronizações. Também é importante que a equipe saiba como as pessoas com deficiência usam os sítios web e aplicativos". Nesse caso, foram incluídas técnicas relacionadas ao desenvolvimento e também formas de verificar.

## Imagens
- [ ] **Adicionar `alt`** para imagens, botões-imagem, gráficos e imagens de mapas com pontos de acesso.
- [ ] **Adicionar `alt=""`** para imagens decorativas que não têm significado.
- [ ] **Incluir a descrição no `alt`** para imagens que contêm texto.
- [ ] **Adicionar descrição detalhada** para imagens complexas como gráficos e infográficos. (ABNT NBR 17225:2025)
- [ ] **Evitar imagens de texto**, exceto em casos essenciais (logotipos). (ABNT NBR 17225:2025)

## Vídeos
- [ ] **Adicionar legendas** para áudio em vídeos existentes.
- [ ] **Evitar conteúdo com *flashes*** (gatilhos para convulsões) ou manter abaixo dos limites.
- [ ] **Adicionar audiodescrição sincronizada**. (Guia de Acessibilidade / ABNT NBR 17225:2025)
- [ ] **Oferecer transcrição de vídeo**. (ABNT NBR 17225:2025)
- [ ] **Oferecer janela de Libras** para vídeos com áudio. (Guia de Acessibilidade)

## Controles
- [ ] **Adicionar `href`** para links.
- [ ] **Adicionar underline** nos links.
- [ ] **Adicionar estados de foco** em campos de entrada, botões e elementos interativos.
- [ ] **Adicionar `type="button"`** nos botões.
- [ ] **Adicionar skip-link** (link para pular) para o conteúdo principal.
- [ ] **Identificar e comunicar** links que abrem em nova guia ou janela.
- [ ] **Evitar ativação acidental** de controles (ex: clique só no *mouseup*). (ABNT NBR 17225:2025)

## Formulário
- [ ] **Adicionar `label`** para os campos de entrada associados ao elemento correspondente.
- [ ] **Adicionar `<fieldset>` e `<legend>`** para seção no formulário.
- [ ] **Adicionar `autocomplete`** para campos de entrada.
- [ ] **Exibir `errors`** (erros) de entrada acima do formulário, após envio.
- [ ] **Adicionar `aria-describedby`** para os campos de entrada.
- [ ] **Exibir mensagens de erro e sucesso** não só visualmente.
- [ ] **Usar mensagens de erro descritivas e sugestões de correção**. (ABNT NBR 17225:2025)
- [ ] **Indicar campos obrigatórios e tipo de dado esperado**. (ABNT NBR 17225:2025)
- [ ] **Evitar testes de memória ou desafio cognitivo para autenticação**. (Guia de Acessibilidade)

## Mídia
- [ ] **Impedir `autoplay`** para vídeos e áudios.
- [ ] **Adicionar `type`** para botões e entradas.
- [ ] **Adicionar pausa** para todas as mídias.
- [ ] **Adicionar transcrição** para áudios.
- [ ] **Permitir controle de volume independente**. (ABNT NBR 17225:2025)

## Semântica
- [ ] Uso de elementos **nativos HTML**.
- [ ] Fluxo contínuo e **lógico**.
- [ ] Tem **descrições** que podem ser **facilmente compreendidas**.
- [ ] Tem a **semântica correta**.
- [ ] É **objetivo** nos **rótulos**.
- [ ] **Adicionar regiões semânticas** como `main`, `nav`, `footer`, etc. (ABNT NBR 17225:2025)

## Texto
- [ ] **Evitar** o uso de **textos dentro de imagens**.
- [ ] **Redimensiona os textos na página**, aumentando o zoom em até 200%.
- [ ] **Alturas** das fontes **não é fixa**.
- [ ] **Garantir espaçamento adequado** entre linhas, parágrafos, letras e palavras. (ABNT NBR 17225:2025)
- [ ] **Evitar texto totalmente justificado**. (ABNT NBR 17225:2025)

## Teclado
- [ ] **Funcionalidades** da página web estão **disponíveis por teclado**.
- [ ] Quando se tem o **mouseover é permitido o uso de teclado**.
- [ ] **Foco visível**: remova elementos focalizáveis invisíveis.
- [ ] Adicione o **`.hover`, `.focus {}`** para tornar o foco visível.
- [ ] Permite/visa o uso de **atalhos de teclado** como o `TAB`.
- [ ] **Primeiro** item interativo da página é um link para o **conteúdo principal**.
- [ ] **Evitar armadilhas de foco** e manter ordem lógica. (ABNT NBR 17225:2025)

## Título
- [ ] A **hierarquia** de conteúdo da página é definida por sua **lógica**, não pelo tamanho do texto.
- [ ] Use **elementos de título `h1 h2 h3`** para apresentar o conteúdo.
- [ ] **Não pular níveis lógicos**.
- [ ] **Toda página contém um título `h1`** descrevendo a página.

## Tabela
- [ ] **Use o `table`** para elementos em formato de tabela.
- [ ] Insira cabeçalhos para explicar os dados, **use `th` com `scope` correto**.
- [ ] **Use o `caption`** para fornecer um título para a tabela.
- [ ] **Evite usar tabela para layout**. (ABNT NBR 17225:2025)

## Modais
- [ ] Deve ser **fácil fechar**.
- [ ] Permitir o **uso da tecla escape `ESC`**.
- [ ] A interação é uma **tarefa simples**.
- [ ] **Evita** modais em **tela cheia**.
- [ ] **Não abrir um modal a partir de outro modal**.

## Dispositivo Móvel e tocável
- [ ] O site pode ser **rotacionado** para qualquer orientação.
- [ ] **Impedir** rolagem horizontal.
- [ ] **Garantir** que botões e links possam ser ativados facilmente.
- [ ] **Garantir** espaço suficiente entre elementos interativos.
- [ ] **Evitar gestos de arrastar obrigatórios**, oferecer alternativa. (ABNT NBR 17225:2025)

## Ferramentas e extras
- [ ] Permitir **pausar, parar ou ocultar conteúdo em movimento**.
- [ ] Usar **breadcrumbs** informando a localização atual nas páginas.
- [ ] Colocar página ou **área de esclarecimento de dúvidas e dicas de acessibilidade**.
- [ ] Áreas clicáveis com no mínimo **44px** de altura e largura.
- [ ] No caso de **captcha**, garantir que seja simples de entender e tenha alternativas para pessoas com deficiência.
- [ ] Incluir um **campo de busca**.

## Referência Bibliográfica

> <a id="RP1" href="#TEC1">1.</a> WCAG 2.2 Understanding Docs. SC 1.1.1 Non-text Content (Level A) . Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html). Acesso em: 9 Mai. 2024.

> <a id="RP2" href="#TEC2">2.</a> WCAG 2.2 Understanding Docs. SC 1.2.2 Captions (Prerecorded) (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html). Acesso em: 9 Mai. 2024.

> <a id="RP3" href="#TEC3">3.</a> WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Acesso em: 9 Mai. 2024.

> <a id="RP4" href="#TEC4">4.</a> WCAG 2.2 Understanding Docs. SC 1.3.1 Info and Relationships (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html). Acesso em: 9 Mai. 2024.

> <a id="RP5" href="#TEC5">5.</a> WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). Acesso em: 9 Mai. 2024.

> <a id="RP6" href="#TEC6">6.</a> WCAG 2.2 Understanding Docs. SC 2.4.7 Focus Visible (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html). Acesso em: 9 Mai. 2024.

> <a id="RP7" href="#TEC7">7.</a> WCAG 2.2 Understanding Docs. SC 2.4.1 Bypass Blocks (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html). Acesso em: 9 Mai. 2024.

> <a id="RP8" href="#TEC8">8.</a> WCAG 2.2 Understanding Docs. G201 Giving users advanced warning when opening a new window. Disponível em: [https://www.w3.org/WAI/WCAG22/Techniques/general/G201](https://www.w3.org/WAI/WCAG22/Techniques/general/G201). Acesso em: 9 Mai. 2024.

> <a id="RP9" href="#TEC9">9.</a> WCAG 2.2 Understanding Docs. SC 3.2.2 On Input (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/on-input.html](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html). Acesso em: 9 Mai. 2024.

> <a id="RP10" href="#TEC10">10.</a> WCAG 2.2 Understanding Docs. SC 1.3.5 Identify Input Purpose (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). Acesso em: 9 Mai. 2024.

> <a id="RP11" href="#TEC11">11.</a> WCAG 2.2 Understanding Docs. SC 3.3.1 Error Identification (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html). Acesso em: 9 Mai. 2024.

> <a id="RP12" href="#TEC12">12.</a> WCAG 2.2 Understanding Docs. SC 1.4.2 Audio Control (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html). Acesso em: 9 Mai. 2024.

> <a id="RP13" href="#TEC13">13.</a> WCAG 2.2 Understanding Docs. SC 2.1.1 Keyboard (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html). Acesso em: 9 Mai. 2024.

> <a id="RP14" href="#TEC14">14.</a> WCAG 2.2 Understanding Docs. SC 1.3.4 Orientation (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/orientation.html](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html). Acesso em: 9 Mai. 2024.

> <a id="RP15" href="#TEC15">15.</a> WCAG 2.2 Understanding Docs. SC 4.1.1 Orientation (Level). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/parsing.html](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html). Acesso em: 9 Mai. 2024.

> <a id="RP16" href="#TEC16">16.</a> WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reflow.html](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Acesso em: 9 Mai. 2024.

> <a id="RP17" href="#TEC17">17.</a> WCAG 2.2 Understanding SC 2.4.6 Headings and Labels (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html). Acesso em: 9 Mai. 2024.

> <a id="RP18" href="#TEC18">18.</a> WCAG 2.2 Understanding Docs. SC 2.5.5 Target Size (Enhanced) (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html). Acesso em: 9 Mai. 2024.

> <a id="RP19" href="#TEC19">19.</a> GUIA DE BOAS PRÁTICAS PARA ACESSIBILIDADE DIGITAL. Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html](https://www.w3.org/WAI/WCAG22/Understandin/target-size-enhanced.html). Acesso em: 9 Mai. 2024.

## Bibliografia

> ABNT. NBR 17225:2025 - Acessibilidade em conteúdo para a web. Associação Brasileira de Normas Técnicas, 2025.

> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024.

## Histórico de Versões

| Versão | Descrição | Autor(es) | Data | Revisor(es) | Data de revisão |
|--------|-----------|-----------|------|-------------|-----------------|
| 1.0 | Versão inicial | Equipe WebAAA | 17/06/2025 | - | - |
| 2.0 | Adição de WCAG 2.2 e conformidade ABNT NBR 17225:2025 | [Gabriel Lopes](https://github.com/BrzGab) | 17/06/2025 | [Uires Carlos](https://github.com/uires2023) | 17/06/2025 |
| 3.0 | Correção em conformidade WCAG 2.2 e ABNT NBR 17225:2025 | [Taynara Vitorino](https://github.com/taybalau) | 23/06/2025 | [Gabriel Lopes](https://github.com/BrzGab) | 23/06/2025 |