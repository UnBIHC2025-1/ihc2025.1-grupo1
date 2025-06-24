# Desenvolvimento Web

"Nessa fase, é importante garantir que a equipe de desenvolvimento saiba como implementar acessibilidade, verificá-la e usar as ferramentas disponíveis no mercado para testes e padronizações. Também é importante que a equipe saiba como as pessoas com deficiência usam os sítios web e aplicativos". Nesse caso, foram incluídas técnicas relacionadas ao desenvolvimento e também formas de verificar a acessibilidade conforme as diretrizes da **WCAG 2.2**, **Guia Brasil-Reino Unido**, e **ABNT NBR 17225:2025**.

## Imagens

- [ ] **Adicionar `alt`** para imagens, botões-imagem, gráficos e imagens de mapas com pontos de acesso. <a id="TEC1" href="#RP1">[1]</a>
    - **WCAG 2.2**: A inclusão do atributo `alt` nas imagens é essencial para garantir que o conteúdo visual seja descrito para usuários com deficiência visual. O texto alternativo deve ser claro e conciso:contentReference[oaicite:0]{index=0}.
- [ ] **Adicionar `alt=""`** para imagens decorativas que não têm significado. <a id="TEC1" href="#RP1">[1]</a>
    - **WCAG 2.2**: Imagens decorativas, como ícones ou gráficos sem conteúdo informativo, devem ter o atributo `alt=""` para garantir que tecnologias assistivas ignorem tais elementos sem prejudicar a experiência do usuário:contentReference[oaicite:1]{index=1}.
- [ ] **Incluir a descrição no `alt`** para imagens que contêm texto. <a id="TEC1" href="#RP1">[1]</a>
    - **WCAG 2.2**: Se uma imagem contém texto que é relevante para a compreensão do conteúdo, o `alt` deve descrever esse texto para garantir que ele seja acessível:contentReference[oaicite:2]{index=2}.
- [ ] **Adicionar descrições detalhadas em imagens de gráficos e tabelas**. <a id="TEC14" href="#RP14">[14]</a>
    - **WCAG 2.2**: Gráficos e tabelas que contêm informações essenciais devem ter descrições textuais detalhadas que expliquem o conteúdo visual para usuários de leitores de tela.
- [ ] **Fornecer alternativas para conteúdo em movimento**. <a id="TEC15" href="#RP15">[15]</a>
    - **Guia Brasil-Reino Unido**: Conteúdo que envolve movimento, como animações ou vídeos, deve ter uma alternativa acessível, como uma descrição ou pausa controlada, para garantir que todos os usuários possam interagir com o conteúdo sem dificuldades.

## Vídeos

- [ ] **Adicionar legendas** para áudio em vídeos existentes. <a id="TEC2" href="#RP2">[2]</a>
    - **WCAG 2.2**: Legendas são essenciais para garantir que o conteúdo em vídeo seja acessível a pessoas com deficiência auditiva. Elas devem ser claras e sincronizadas com o áudio:contentReference[oaicite:5]{index=5}.
- [ ] **Adicionar transcrição para vídeos**. <a id="TEC16" href="#RP16">[16]</a>
    - **WCAG 2.2**: Transcrições de vídeos também são fundamentais, especialmente para conteúdos que não podem ser compreendidos completamente por legendas sozinhas. Elas garantem a acessibilidade para todos os usuários.
- [ ] **Evitar conteúdo com flashes** (gatilhos para convulsões) ou mantê-lo abaixo dos limites. <a id="TEC3" href="#RP3">[3]</a>
    - **WCAG 2.2**: O conteúdo não deve causar flashes ou piscadas rápidas que possam desencadear convulsões em usuários com epilepsia. Caso seja necessário, a frequência dos flashes deve ser limitada a um máximo de três por segundo.
- [ ] **Adicionar controles de reprodução de mídia** (play, pausa, volume, etc.). <a id="TEC17" href="#RP17">[17]</a>
    - **WCAG 2.2**: Permitir que o usuário controle a reprodução de mídia é essencial para pessoas com deficiências auditivas e de cognição, garantindo uma experiência mais acessível e personalizada.

## Controles

- [ ] **Adicionar `href`** para links. <a id="TEC4" href="#RP4">[4]</a>
    - **WCAG 2.2**: Todos os links devem ser acessíveis e identificáveis. O uso do atributo `href` é necessário para garantir que os links sejam funcionalmente identificáveis:contentReference[oaicite:9]{index=9}.
- [ ] **Adicionar underline** nos links. <a id="TEC5" href="#RP5">[5]</a>
    - **Guia Brasil-Reino Unido**: Links devem ser visualmente destacados, como com um sublinhado, para facilitar a identificação de elementos clicáveis:contentReference[oaicite:10]{index=10}.
- [ ] **Adicionar estados de foco** em campos de entrada, botões, e elementos interativos. <a id="TEC6" href="#RP6">[6]</a>
    - **WCAG 2.2**: Os estados de foco visíveis são essenciais para permitir que os usuários naveguem facilmente pelos elementos interativos da página com teclado ou outras tecnologias assistivas:contentReference[oaicite:11]{index=11}.
- [ ] **Adicionar `type="button"`** nos botões. <a id="TEC4" href="#RP4">[4]</a>
    - **WCAG 2.2**: Definir o tipo de botões ajuda a melhorar a acessibilidade, especialmente quando esses botões têm funcionalidades específicas. Isso assegura que o papel do botão seja claramente identificado pelas tecnologias assistivas:contentReference[oaicite:12]{index=12}.
- [ ] **Adicionar skip-link** (link para pular) para o conteúdo principal. <a id="TEC7" href="#RP7">[7]</a>
    - **WCAG 2.2**: Links de pular conteúdo (skip-links) são essenciais para usuários de leitores de tela e para navegação rápida. Eles permitem que os usuários pulem as navegações e acessem diretamente o conteúdo principal da página:contentReference[oaicite:13]{index=13}.
- [ ] **Identifique e comunique** links que abrem em uma nova guia ou janela. <a id="TEC8" href="#RP8">[8]</a>
    - **WCAG 2.2**: É importante alertar os usuários sobre links que abrem novas janelas ou guias, para que eles possam se preparar para a mudança de contexto:contentReference[oaicite:14]{index=14}.

## Formulário

- [ ] **Adicionar `label`** para os campos de entradas associadas ao elemento correspondente. <a id="TEC9" href="#RP9">[9]</a>
    - **WCAG 2.2**: Os rótulos (`label`) devem ser associados corretamente aos campos de entrada para que usuários de tecnologias assistivas possam entender e interagir com os formulários:contentReference[oaicite:15]{index=15}.
- [ ] **Adicionar `<fieldset>` e `<legend>`** para seção no formulário. <a id="TEC4" href="#RP4">[4]</a>
    - **WCAG 2.2**: O uso de `<fieldset>` e `<legend>` ajuda a agrupar e descrever as seções de formulários, tornando-os mais acessíveis para leitores de tela:contentReference[oaicite:16]{index=16}.
- [ ] **Adicionar `autocomplete`** para campos de entrada. <a id="TEC10" href="#RP10">[10]</a>
    - **WCAG 2.2**: O atributo `autocomplete` facilita a navegação para usuários, sugerindo entradas baseadas em dados anteriores e melhorando a experiência geral de preenchimento de formulários:contentReference[oaicite:17]{index=17}.
- [ ] **Exibir `errors`** (erros) de entrada acima do formulário, após envio. <a id="TEC11" href="#RP11">[11]</a>
    - **WCAG 2.2**: Os erros de entrada devem ser claramente comunicados e exibidos de forma visível para os usuários, tanto visualmente quanto por outras formas de comunicação para garantir que os erros sejam corrigidos com facilidade:contentReference[oaicite:18]{index=18}.
- [ ] **Adicionar `aria-describedby`** para os campos de entrada. <a id="TEC11" href="#RP11">[11]</a>
    - **WCAG 2.2**: O atributo `aria-describedby` permite que a descrição do campo de entrada seja lida pelos leitores de tela, proporcionando um contexto mais claro para os usuários:contentReference[oaicite:19]{index=19}.

## Mídia

- [ ] **Impedir `autoplay`** para vídeos e áudios. <a id="TEC12" href="#RP12">[12]</a>
    - **WCAG 2.2**: O **autoplay** pode ser problemático para usuários que dependem de leitores de tela ou outros dispositivos assistivos. Impedir o autoplay garante que os usuários tenham controle sobre a mídia que está sendo reproduzida:contentReference[oaicite:20]{index=20}.
- [ ] **Adicionar `type`** para botões e entradas. <a id="TEC4" href="#RP4">[4]</a>
    - **WCAG 2.2**: Definir corretamente os tipos de botões e entradas melhora a acessibilidade e permite que as tecnologias assistivas entendam melhor as interações possíveis:contentReference[oaicite:21]{index=21}.
- [ ] **Adicionar pausa** para todas as mídias. <a id="TEC13" href="#RP13">[13]</a>
    - **WCAG 2.2**: Permitir que os usuários pausem ou interrompam qualquer mídia que esteja em reprodução é um requisito básico de acessibilidade, garantindo controle total sobre o conteúdo multimodal:contentReference[oaicite:22]{index=22}.
- [ ] **Adicionar transcrição** para áudios. <a id="TEC1" href="#RP1">[1]</a>
    - **WCAG 2.2**: Fornecer transcrições para áudio é essencial para garantir que o conteúdo seja acessível para usuários com deficiência auditiva:contentReference[oaicite:23]{index=23}.

## Semântica

- [ ] **Uso de elementos nativos HTML**. <a id="TEC18" href="#RP18">[18]</a>
- [ ] **Fluxo contínuo e lógico**. <a id="TEC19" href="#RP19">[19]</a>
- [ ] **Tem descrições que podem ser facilmente compreendidas**. <a id="TEC20" href="#RP20">[20]</a>
- [ ] **Tem a semântica correta**. <a id="TEC21" href="#RP21">[21]</a>
- [ ] **É objetivo nos rótulos**. <a id="TEC22" href="#RP22">[22]</a>

## Texto

- [ ] **Evitar** o uso de **textos dentro de imagens**. <a id="TEC23" href="#RP23">[23]</a>
- [ ] **Redimensiona os textos na página**, aumentando o zoom em até 200%. <a id="TEC24" href="#RP24">[24]</a>
- [ ] **Alturas** das fontes **não são fixas**. <a id="TEC25" href="#RP25">[25]</a>

## Teclado

- [ ] **Funcionalidades** da página web estão **disponíveis por teclado**. <a id="TEC26" href="#RP26">[26]</a>
- [ ] Quando se tem o **mouseover é permitido o uso de teclado**. <a id="TEC27" href="#RP27">[27]</a>
- [ ] **Foco visível** remova elementos focalizáveis invisíveis. <a id="TEC28" href="#RP28">[28]</a>
- [ ] Adicione o **`.hover, .focus {}`** para tornar o foco visível. <a id="TEC29" href="#RP29">[29]</a>
- [ ] Permite/visa o uso de **Atalhos de teclado** como o `TAB`. <a id="TEC30" href="#RP30">[30]</a>
- [ ] **Primeiro** item interativo da página é um link para o **conteúdo principal**. <a id="TEC31" href="#RP31">[31]</a>

## Título

- [ ] A **hierarquia** de conteúdo da página é definida por sua **lógica**, não pelo tamanho do texto. <a id="TEC17" href="#RP17">[17]</a>
- [ ] Use **elementos de título `h1`, `h2`, `h3`** para apresentar o conteúdo. <a id="TEC17" href="#RP17">[17]</a>
- [ ] **Não pular níveis lógicos**. <a id="TEC32" href="#RP32">[32]</a>
- [ ] **Toda página contém um título `h1`** descrevendo a página. <a id="TEC17" href="#RP17">[17]</a><a id="TEC19" href="#RP19">[19]</a>

## Tabela

- [ ] **Use o `table`** para elementos em formato de tabela. <a id="TEC4" href="#RP4">[4]</a>
- [ ] Insira cabeçalhos para explicar os dados, **use `th` com `scope` correto**. <a id="TEC15" href="#RP15">[15]</a>
- [ ] **Use o `caption`** elemento para fornecer um título para a tabela. <a id="TEC17" href="#RP17">[17]</a>

## Modais

- [ ] Deve ser **fácil fechar**. <a id="TEC19" href="#RP19">[19]</a>
- [ ] Permitir o **uso da tecla escape `ESC`**. <a id="TEC19" href="#RP19">[19]</a>
- [ ] A interação é uma **tarefa simples**. <a id="TEC19" href="#RP19">[19]</a>
- [ ] **Evitar** modais em **tela cheia**. <a id="TEC19" href="#RP19">[19]</a>
- [ ] **Não abrir um modal a partir de outro modal**. <a id="TEC19" href="#RP19">[19]</a>

## Dispositivo Móvel e Tocável

- [ ] O site pode ser **rotacionado** para qualquer orientação. <a id="TEC15" href="#RP15">[15]</a>
- [ ] **Impedir** rolagem horizontal. <a id="TEC16" href="#RP15">[16]</a>
- [ ] **Garantir** que botões e links possam ser ativados facilmente. <a id="TEC18" href="#RP18">[18]</a>
- [ ] **Garantir** espaço suficiente entre elementos interativos. <a id="TEC7" href="#RP7">[7]</a>

## Ferramentas e Extras

- [ ] Permitir **pausar, parar ou ocultar conteúdo em movimento**.
- [ ] Usar **Breadcrumbs** informando a localização atual nas páginas.
- [ ] Colocar página ou **área de esclarecimento de dúvidas e dicas de acessibilidade**.
- [ ] Áreas clicáveis com no mínimo **44px (pixels) de altura e 44px de largura**.
- [ ] No caso de **captcha** garanta que seja simples de entender e tenha alternativas para pessoas com deficiência.
- [ ] Incluir um **campo de busca**.

## Referência Bibliográfica

> <a id="RP1" href="#TEC1">1.</a> WCAG 2.2 Understanding Docs. SC 1.1.1 Non-text Content (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html). Acesso em: 23 jun. 2025.

> <a id="RP2" href="#TEC2">2.</a> WCAG 2.2 Understanding Docs. SC 1.2.2 Captions (Prerecorded) (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html). Acesso em: 23 jun. 2025.

> <a id="RP3" href="#TEC3">3.</a> WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Acesso em: 23 jun. 2025.

> <a id="RP4" href="#TEC4">4.</a> WCAG 2.2 Understanding Docs. SC 2.1.1 Keyboard (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html). Acesso em: 23 jun. 2025.

> <a id="RP5" href="#TEC5">5.</a> Guia de Boas Práticas para Acessibilidade Digital (UK-BR), p. 45. Links com aparência distinta.

> <a id="RP6" href="#TEC6">6.</a> WCAG 2.2 Understanding Docs. SC 2.4.7 Focus Visible (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html). Acesso em: 23 jun. 2025.

> <a id="RP7" href="#TEC7">7.</a> WCAG 2.2 Understanding Docs. SC 2.4.1 Bypass Blocks (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html). Acesso em: 23 jun. 2025.

> <a id="RP8" href="#TEC8">8.</a> WCAG 2.2 Understanding Docs. SC 3.2.5 Change on Request (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html](https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html). Acesso em: 23 jun. 2025.

> <a id="RP9" href="#TEC9">9.</a> WCAG 2.2 Understanding Docs. SC 1.3.1 Info and Relationships (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html). Acesso em: 23 jun. 2025.

> <a id="RP10" href="#TEC10">10.</a> WCAG 2.2 Understanding Docs. SC 1.3.5 Identify Input Purpose (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). Acesso em: 23 jun. 2025.

> <a id="RP11" href="#TEC11">11.</a> WCAG 2.2 Understanding Docs. SC 3.3.1 Error Identification (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html). Acesso em: 23 jun. 2025.

> <a id="RP12" href="#TEC12">12.</a> WCAG 2.2 Understanding Docs. SC 1.2.5 Audio Description (Prerecorded) (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html). Acesso em: 23 jun. 2025.

> <a id="RP13" href="#TEC13">13.</a> WCAG 2.2 Understanding Docs. SC 2.2.2 Pause, Stop, Hide (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html). Acesso em: 23 jun. 2025.

> <a id="RP14" href="#TEC14">14.</a> WCAG 2.2 Understanding Docs. SC 1.1.1 Non-text Content (Level A). Descrições detalhadas para imagens complexas.

> <a id="RP15" href="#TEC15">15.</a> Guia de Boas Práticas para Acessibilidade Digital (UK-BR), p. 25. Alternativas para conteúdo em movimento.

> <a id="RP16" href="#TEC16">16.</a> WCAG 2.2 Understanding Docs. SC 1.2.8 Media Alternative (Prerecorded) (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html](https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html). Acesso em: 23 jun. 2025.

> <a id="RP17" href="#TEC17">17.</a> WCAG 2.2 Understanding Docs. SC 2.2.1 Timing Adjustable (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html). Acesso em: 23 jun. 2025.

> <a id="RP18" href="#TEC18">18.</a> WCAG 2.2 Understanding Docs. SC 4.1.1 Parsing (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/parsing.html](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html). Acesso em: 23 jun. 2025.

> <a id="RP19" href="#TEC19">19.</a> WCAG 2.2 Understanding Docs. SC 1.3.2 Meaningful Sequence (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html). Acesso em: 23 jun. 2025.

> <a id="RP20" href="#TEC20">20.</a> WCAG 2.2 Understanding Docs. SC 3.1.3 Unusual Words (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html](https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html). Acesso em: 23 jun. 2025.

> <a id="RP21" href="#TEC21">21.</a> WCAG 2.2 Understanding Docs. SC 1.3.1 Info and Relationships (Level A). Semântica correta dos elementos.

> <a id="RP22" href="#TEC22">22.</a> WCAG 2.2 Understanding Docs. SC 2.4.6 Headings and Labels (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html). Acesso em: 23 jun. 2025.

> <a id="RP23" href="#TEC23">23.</a> WCAG 2.2 Understanding Docs. SC 1.4.5 Images of Text (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html). Acesso em: 23 jun. 2025.

> <a id="RP24" href="#TEC24">24.</a> WCAG 2.2 Understanding Docs. SC 1.4.4 Resize Text (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html). Acesso em: 23 jun. 2025.

> <a id="RP25" href="#TEC25">25.</a> WCAG 2.2 Understanding Docs. SC 1.4.8 Visual Presentation (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html). Acesso em: 23 jun. 2025.

> <a id="RP26" href="#TEC26">26.</a> WCAG 2.2 Understanding Docs. SC 2.1.1 Keyboard (Level A). Funcionalidades acessíveis por teclado.

> <a id="RP27" href="#TEC27">27.</a> WCAG 2.2 Understanding Docs. SC 2.1.1 Keyboard (Level A). Equivalentes de teclado para mouseover.

> <a id="RP28" href="#TEC28">28.</a> WCAG 2.2 Understanding Docs. SC 2.4.7 Focus Visible (Level AA). Foco visível em elementos focalizáveis.

> <a id="RP29" href="#TEC29">29.</a> WCAG 2.2 Understanding Docs. SC 2.4.7 Focus Visible (Level AA). Estilos de foco visível.

> <a id="RP30" href="#TEC30">30.</a> WCAG 2.2 Understanding Docs. SC 2.1.1 Keyboard (Level A). Atalhos de teclado e navegação por TAB.

> <a id="RP31" href="#TEC31">31.</a> WCAG 2.2 Understanding Docs. SC 2.4.1 Bypass Blocks (Level A). Skip links para conteúdo principal.

> <a id="RP32" href="#TEC32">32.</a> WCAG 2.2 Understanding Docs. SC 1.3.1 Info and Relationships (Level A). Hierarquia lógica de títulos.

## Histórico de Versões

| Versão | Descrição | Autor(es) | Data | Revisor(es) | Data de revisão |
|--------|-----------|-----------|------|-------------|-----------------|
| 1.0 | Adição de WCAG 2.2, conformidade ABNT NBR 17225:2025 e itens sobre o guia Brasil - Reino Unido| [Gabriel Lopes](https://github.com/BrzGab) | 17/06/2025 | [Uires Carlos](https://github.com/uires2023) | 17/06/2025 |
| 1.1 | Correção e Adicionando mais itens em conformidade WCAG 2.2 e ABNT NBR 17225:2025 | [Taynara Vitorino](https://github.com/taybalau) | 23/06/2025 | [Gabriel Lopes](https://github.com/BrzGab) | 23/06/2025 |