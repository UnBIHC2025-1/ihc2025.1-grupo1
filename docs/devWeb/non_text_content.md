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

## Checklists de Desenvolvimento Web - ABNT NBR 17225:2025

### Interação por Teclado

- [ ] **Indicador de foco visível**: Todos os elementos focáveis devem ter um indicador de foco visível.
- [ ] **Elemento em foco totalmente visível**: Todos os elementos focáveis devem estar completamente visíveis quando recebem foco.
- [ ] **Elemento em foco parcialmente visível**: Todos os elementos focáveis devem estar pelo menos parcialmente visíveis quando recebem foco.
- [ ] **Ordem de foco previsível**: A ordem de foco deve ser lógica e intuitiva, consistente com a apresentação da página.
- [ ] **Uso de foco**: Todos os elementos focáveis devem ser utilizáveis para interação.
- [ ] **Armadilha de foco**: Não pode haver componentes que bloqueiem ou interrompam a navegação por teclado.
- [ ] **Conteúdo adicional**: Nenhum conteúdo adicional deve ser exibido apenas pelo foco do teclado ou posicionamento do cursor.
- [ ] **Conteúdo adicional persistente**: Todo conteúdo adicional exibido por foco do teclado deve permanecer visível até que o usuário o dispense.
- [ ] **Conteúdo adicional dispensável**: O conteúdo adicional deve poder ser dispensado sem necessidade de retirar o foco ou reposicionar o cursor.
- [ ] **Atalhos de teclado**: Evite atalhos de teclado que utilizam apenas uma tecla; sempre use uma tecla modificadora (como Ctrl ou Alt).
- [ ] **Atalhos de teclado sem tecla modificadora**: Se houver atalhos sem tecla modificadora, deve haver um mecanismo simples para desativá-los ou remapeá-los.
- [ ] **Acessibilidade por teclado total**: Toda a funcionalidade do site deve ser acessível via teclado.
- [ ] **Acessibilidade por teclado parcial**: Certifique-se de que funcionalidades não acessíveis por teclado tenham alternativas equivalentes.
- [ ] **Mecanismos de entrada simultâneos**: Não deve haver restrições de uso de múltiplos mecanismos de entrada, a não ser que seja necessário por questões de segurança.
- [ ] **Comportamento de componentes customizados**: Todos os componentes personalizados devem ter comportamentos previsíveis.
- [ ] **Instruções para componentes customizados**: Se um componente exige interação complexa, deve haver instruções claras para sua operação.

### Imagens

- [ ] **Texto alternativo para imagens de conteúdo**: Todas as imagens informativas devem ter um texto alternativo que descreve seu conteúdo.
- [ ] **Texto alternativo para imagens funcionais**: Imagens funcionais (como ícones ou botões) devem ter um texto alternativo que descreva sua função.
- [ ] **Texto alternativo para imagens decorativas**: Imagens decorativas devem ter um texto alternativo vazio, ou ser implementadas de forma que possam ser ignoradas por tecnologias assistivas.
- [ ] **Descrição para imagens complexas**: Imagens complexas devem ter uma descrição detalhada disponível na página ou em uma página indicada.
- [ ] **Imagens de texto**: Evite o uso de imagens de texto. Se for essencial, deve haver texto alternativo correspondente.
- [ ] **Texto alternativo para mapas de imagens**: Mapas de imagens devem ter texto alternativo para cada área interativa.

### Cabeçalhos

- [ ] **Semântica de cabeçalho**: Cabeçalhos devem ser usados de forma semântica, de acordo com sua importância (H1, H2, H3, etc.).
- [ ] **Uso de cabeçalhos**: Todos os cabeçalhos devem ser utilizados para organizar seções de conteúdo de forma lógica.
- [ ] **Cabeçalho principal**: Deve haver apenas um cabeçalho de nível 1 (H1), que identifica o título principal da página.
- [ ] **Seções com cabeçalhos**: Todas as seções importantes do conteúdo devem ter um cabeçalho correspondente.
- [ ] **Estrutura de cabeçalhos**: A hierarquia dos cabeçalhos deve ser lógica e semântica.

### Regiões

- [ ] **Semântica de região**: As regiões da página devem ter uma semântica clara, indicando a função de cada área (como cabeçalho, navegação, conteúdo principal, etc.).
- [ ] **Uso de regiões**: As regiões devem ser usadas para organizar o conteúdo da página de acordo com o tipo de conteúdo.
- [ ] **Conteúdo em regiões**: Todo o conteúdo deve estar contido em regiões bem definidas.
- [ ] **Regiões únicas**: Não deve haver mais de uma região do tipo 'header', 'main' ou 'footer'.
- [ ] **Regiões identificadas unicamente**: Cada região deve ter um identificador único acessível.

### Listas

- [ ] **Semântica de lista**: Listas devem ser usadas de forma semântica, para agrupar itens de forma ordenada ou não ordenada.
- [ ] **Uso de listas**: As listas devem agrupar itens de mesma natureza (ex.: uma lista de características, de passos, etc.).

### Tabelas

- [ ] **Semântica de tabela**: Tabelas devem ser usadas para apresentar dados tabulares, e não para layout visual.
- [ ] **Uso de tabelas**: As tabelas devem ser usadas corretamente para apresentar dados, sem uso de tabelas para layout visual.
- [ ] **Cabeçalhos de tabela**: As células de dados em tabelas devem ser associadas com cabeçalhos de linha e coluna.
- [ ] **Título de tabela**: Toda tabela deve ter um título que a descreva.
- [ ] **Título de tabela associado**: O título ou legenda da tabela deve ser associado corretamente à tabela.
- [ ] **Descrição para tabelas complexas**: Tabelas complexas devem ter uma descrição textual explicando sua estrutura.

### Links e Navegação

- [ ] **Semântica de link**: Todos os links devem ser semânticos e indicar claramente seu propósito ou destino.
- [ ] **Uso de links**: Os links devem ser utilizados exclusivamente para navegação.
- [ ] **Propósito do link sem contexto**: O texto do link deve indicar claramente sua função ou destino, mesmo fora de contexto.
- [ ] **Propósito do link no contexto**: O texto do link deve, junto com seu contexto, informar sua função ou destino.
- [ ] **Links com identificação consistente**: Links que possuem o mesmo texto ou função devem ter identificação consistente.
- [ ] **Links que abrem em uma nova guia ou janela**: Links que abrem novas guias ou janelas devem informar isso ao usuário.
- [ ] **Links para arquivos (não HTML)**: Links para arquivos (PDF, DOC, etc.) devem informar o formato e tamanho do arquivo.
- [ ] **Links para sites externos**: Links para sites externos devem indicar isso claramente.
- [ ] **Texto complementar do link**: Evite a repetição desnecessária de texto nos links.
- [ ] **Links adjacentes**: Não deve haver links adjacentes que levem ao mesmo destino.
- [ ] **Links para contornar blocos de conteúdo**: Deve haver links que permitam ao usuário contornar conteúdo repetido.
- [ ] **Links para contornar blocos de conteúdo em conjunto de páginas**: Deve haver links para contornar conteúdo repetido entre páginas.
- [ ] **Alternativas para localização**: Deve haver mais de uma forma de encontrar uma página dentro de um conjunto de páginas.
- [ ] **Localização em conjunto de páginas**: O usuário deve saber sua localização dentro de um conjunto de páginas ou seções.
- [ ] **Navegação consistente**: A navegação deve ser consistente em todas as páginas do site.
- [ ] **Ajuda consistente**: Mecanismos de ajuda devem ser consistentes em todas as páginas do site.

### Botões e Controles

- [ ] **Semântica de botão**: Todos os botões devem ser semanticamente definidos.
- [ ] **Uso de botões**: Botões devem ser usados para executar uma ação clara e específica.
- [ ] **Propósito do botão**: O texto ou nome acessível do botão deve indicar claramente sua função.
- [ ] **Identificação consistente na página**: Botões com a mesma função devem ser identificados de forma consistente.
- [ ] **Identificação consistente em conjunto de páginas**: A identificação de botões deve ser consistente entre páginas.
- [ ] **Área de acionamento (aprimorada)**: A área de acionamento dos botões deve ser suficientemente grande (mínimo de 44x44 pixels).
- [ ] **Área de acionamento (mínima)**: A área de acionamento dos botões não pode ser menor que 24x24 pixels.
- [ ] **Mudança de contexto previsível**: Mudanças de contexto no site devem ser controladas pelo usuário, ou o usuário deve ser avisado.
- [ ] **Mudança de contexto previsível no foco**: Nenhuma mudança de contexto deve ocorrer apenas ao mudar o foco do teclado ou posicionamento do cursor.
- [ ] **Mudança de contexto previsível na entrada**: O usuário deve ser avisado sobre qualquer mudança de contexto ao inserir ou selecionar dados.
- [ ] **Acionamento por ponteiro único**: Funcionalidades não devem ser acionadas pelo pressionamento do ponteiro, mas pelo **soltar** do ponteiro.
- [ ] **Operação por gestos de ponteiro**: Funcionalidades baseadas em gestos de múltiplos toques ou movimentos devem ser acessíveis com um único ponteiro.

---

## Checklists de Desenvolvimento Web - Guia de Boas Práticas para Acessibilidade Digital

### Desenvolvimento

- [ ] **Uso do WCAG nas práticas de desenvolvimento**: Implementar as diretrizes de acessibilidade durante o processo de desenvolvimento.
- [ ] **Evitar ferramentas "milagrosas"**: Não depender apenas de plugins ou ferramentas automáticas para garantir a acessibilidade.
- [ ] **Testes de acessibilidade**: Realizar testes manuais e automáticos para garantir que o conteúdo está acessível para todos os tipos de deficiências.
- [ ] **Semântica HTML**: Usar uma semântica HTML correta para garantir que os leitores de tela e tecnologias assistivas reconheçam adequadamente os elementos.

---

## Checklists de Desenvolvimento Web - Acessibilidade Manual para Desenvolvedores

### Links

- [ ] **Remetem corretamente ao destino**: Os links devem redirecionar para o destino correto e ser claros quanto à sua ação.
- [ ] **Descrição adequada**: A descrição dos links deve ser curta, objetiva e informativa.
- [ ] **Atalhos de teclado**: Devem ser implementados e funcionar corretamente, com descrição adequada.
- [ ] **Uso correto de âncoras**: As âncoras devem ser descritas adequadamente e funcionar como esperado.
- [ ] **Localização do usuário**: A página deve fornecer links que indiquem a localização do usuário nas páginas internas.

### Conteúdos

- [ ] **Gráficos e Imagens**: As imagens devem ser adequadamente descritas com o uso do atributo `alt`.
- [ ] **Texto claro e conciso**: Evitar verborragia e garantir que as palavras e frases sejam compreendidas.
- [ ] **Conteúdos em Flash**: Quando usados, devem ser descritos corretamente, e sua tabulação deve ser clara para leitores de tela.
- [ ] **Arquivos para leitura e download**: Arquivos disponibilizados devem ser compatíveis com leitores de tela e ter extensão visível.
- [ ] **Tabelas**: Devem ser usadas apenas quando necessárias, e seu conteúdo deve ser acessível com cabeçalhos e descrições adequadas.

### Formulários

- [ ] **Formulários organizados e compreensíveis**: Os campos devem ser claros e a ordem de tabulação deve estar correta.
- [ ] **Botões**: Devem ser bem descritos e realizar as ações de forma eficaz.
- [ ] **Caixas combinadas e de seleção**: Não devem submeter automaticamente e devem ser navegáveis com o teclado.
- [ ] **Capcha**: Caso utilizado, deve ter uma alternativa em áudio acessível para deficientes visuais.

### Estrutura do Site

- [ ] **Estrutura lógica e padronizada**: A página deve ter uma estrutura clara e uniforme, facilitando a navegação.
- [ ] **Títulos com ordem lógica**: Os títulos (h1, h2, h3) devem estar em ordem hierárquica para facilitar a navegação.
- [ ] **Menu acessível**: O menu deve ser apresentado de forma lista, com descrição para mostrar/ocultar submenus.
- [ ] **Sumário para conteúdos longos**: Se o conteúdo for extenso, deve haver um sumário de fácil acesso.
- [ ] **Mapa do site**: O site deve possuir um mapa acessível com links para todas as páginas.

### Acessibilidade

- [ ] **Recursos para baixa visão**: O site deve permitir aumentar a fonte e oferecer contraste adequado.
- [ ] **Dicas de navegação**: Devem ser oferecidas dicas claras de navegação para deficientes visuais.
- [ ] **Tabulação da página**: A tabulação deve seguir uma ordem lógica, com o conteúdo sendo lido antes do menu.

---

## Checklists de Desenvolvimento Web - WCAG 2.2

### Perceptível

- [ ] **Alternativas em Texto (1.1.1)**: Forneça alternativas textuais para todo conteúdo não textual, como imagens, gráficos e ícones, exceto em casos de uso específico.
- [ ] **Mídias com Base em Tempo (1.2.1 a 1.2.9)**:
  - Legendas e audiodescrição para conteúdo de áudio e vídeo (pré-gravado e ao vivo).
  - Fornecer alternativas para conteúdo de mídia baseada em tempo, como audiodescrição estendida e tradução em Língua de Sinais.
- [ ] **Contraste Mínimo (1.4.3)**: Assegure uma relação de contraste mínima de 4.5:1 entre texto e fundo.
- [ ] **Contraste Melhorado (1.4.6)**: Assegure uma relação de contraste de 7:1 para texto e imagens de texto.
- [ ] **Espaçamento de Texto (1.4.12)**: O espaçamento de texto deve ser redimensionado de acordo com requisitos específicos sem perda de funcionalidade ou conteúdo.
- [ ] **Imagens de Texto (1.4.5)**: Evite usar imagens de texto, exceto quando seja essencial ou personalizável.

### Operável

- [ ] **Foco Visível (2.4.7)**: Garanta que o foco de teclado seja visível e fácil de localizar.
- [ ] **Ordem do Foco (2.4.3)**: A ordem do foco de navegação deve ser lógica e permitir que o conteúdo seja acessado de forma consistente.
- [ ] **Atalhos de Teclado (2.1.4)**: Se forem utilizados atalhos de teclado, ofereça mecanismos para desativá-los ou remapear os atalhos.
- [ ] **Sem Bloqueio do Teclado (2.1.2)**: Garantir que o foco de teclado possa ser removido facilmente.
- [ ] **Limite de Tempo (2.2.3)**: Garanta que os usuários tenham a opção de ajustar ou desativar os limites de tempo.
- [ ] **Movimentos de Arrastar (2.5.7)**: Ofereça alternativas para interações que exigem gestos de arrastar.
- [ ] **Tamanho do Alvo (2.5.8)**: O tamanho do alvo para interação deve ser no mínimo 44x44 pixels.

### Compreensível

- [ ] **Identificação do Erro (3.3.1)**: Forneça feedback claro sobre erros de entrada e sugestões de correção.
- [ ] **Rótulos e Instruções (3.3.2)**: Garanta que todos os campos de entrada tenham rótulos claros e instrua os usuários sobre como completar as informações corretamente.
- [ ] **Previsibilidade (3.2.2)**: A navegação e os comportamentos do site devem ser previsíveis, sem mudanças inesperadas de contexto.
- [ ] **Entrada Redundante (3.3.7)**: Evite pedir ao usuário que forneça as mesmas informações em múltiplos formulários ou etapas de um processo.
- [ ] **Autenticação Acessível (3.3.8 e 3.3.9)**: Assegure que todos os métodos de autenticação sejam acessíveis e possam ser realizados sem a necessidade de interação complexa.

### Robusto

- [ ] **Compatibilidade com Tecnologias Assistivas (4.1.2)**: Certifique-se de que o conteúdo da web seja compatível com tecnologias assistivas, como leitores de tela.
- [ ] **Mensagens de Status (4.1.3)**: As mensagens de status devem ser programaticamente acessíveis para tecnologias assistivas.

### Novos Critérios de Sucesso

- [ ] **Foco Não Obscurecido (2.4.11 e 2.4.12)**: Garantir que o foco de teclado não seja obscurecido por conteúdo adicional da página.
- [ ] **Aparência do Foco (2.4.13)**: O foco do teclado deve ser claramente visível e ter contraste suficiente.
- [ ] **Gestos de Acionamento (2.5.1)**: Permitir que interações baseadas em gestos sejam substituídas por interações com um ponteiro único.
- [ ] **Tamanho do Alvo (2.5.8)**: O tamanho dos alvos de interação deve ser, no mínimo, de 44x44 pixels.
- [ ] **Entrada Redundante (3.3.7)**: Evitar que o usuário tenha que preencher a mesma informação em diferentes partes do site.
- [ ] **Autenticação Acessível (3.3.8 e 3.3.9)**: Fornecer métodos de autenticação acessíveis para todos os usuários.

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