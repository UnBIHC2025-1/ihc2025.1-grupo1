# Design

"Existe uma lenda de que a acessibilidade torna um sítio web muito simples ou feio. Não é verdade: um sítio web bem estruturado pode ser bonito e criativo. É possível, inclusive, criar apresentações visuais diferentes para a mesma estrutura HTML de um sítio web com o uso de CSS e atender a diferentes necessidades". Dessa forma, nessa seção encontra-se checklist que garantam a acessibilidade no design.

## Aparência

* [ ] <b> Adicionar instrução</b> que não <b>dependa exclusivamente da cor</b>. <a id="TEC1" href="#RP1">[1]</a>
* [ ] <b> Adicionar informação</b> (como gráficos e diagramas) que não <b>dependa exclusivamente da cor</b>. <a id="TEC1" href="#RP1">[1]</a>
* [ ] <b> Tamanho do texto ajustável</b> para permitir ampliação. <a id="TEC2" href="#RP2">[2]</a>
* [ ] <b> Descrever os controles</b> pelo nome, não apenas pela aparência ou localização. <a id="TEC3" href="#RP3">[3]</a>
* [ ] <b> Garantir que dicas visuais</b> significativas atinjam 3:1 em relação ao fundo. <a id="TEC4" href="#RP4">[4]</a>
* [ ] <b> Fazer com que as linhas</b> de texto se ajustem ao viewport. <a id="TEC5" href="#RP5">[5]</a>
* [ ] Oferece uma <b> opção de alto contraste </b> (dark-mode) de suas páginas web e aumento de fontes. <a id="TEC17" href="#RP17">[17]</a>
* [ ] Parágrafos com no <b> máximo 80 caracteres por linha </b>. <a id="TEC10" href="#RP10">[10]</a>
* [ ] <b> Evita </b> o uso de <b> textos longos em caixa alta ou condensados </b>. <a id="TEC10" href="#RP10">[10]</a>
* [ ] Evita o alinhamento justificado. <a id="TEC10" href="#RP10">[10]</a>
* [ ] <b> Fontes são fluidas </b> e de fácil entendimento. <a id="TEC10" href="#RP10">[10]</a>
* [ ] Toma o devido cuidado com <b>`display:none` e `visibility:hidden` para os recursos de tecnologia assistiva</b>. <a id="TEC18" href="#RP18">[18]</a>
* [ ] Preferir <b> botões com texto e ícone </b>. E botões apenas com ícones têm o nome acessível. <a id="TEC19" href="#RP19">[19]</a>
* [ ] <b> Links devem ter aparência distinta</b> (como texto sublinhado e cor diferente). <a id="TEC11" href="#RP11">[11]</a>
* [ ] <b> Todos os botões devem possuir nome acessível</b> (label, alt ou texto visível). <a id="TEC12" href="#RP12">[12]</a>
* [ ] <b> Área de clique dos botões com no mínimo 44x44 px</b>. <a id="TEC13" href="#RP13">[13]</a>
* [ ] <b> Design deve prever ampliação de zoom em até 200% sem perda de informação</b>. <a id="TEC14" href="#RP14">[14]</a>
* [ ] <b> Não usar imagens com texto</b>, pois isso prejudica a legibilidade e acessibilidade. <a id="TEC15" href="#RP15">[15]</a>

## Animação

* [ ] <b> Evitar conteúdo que pisque</b>, ou mantê-lo abaixo dos limites. <a id="TEC6" href="#RP6">\[6]</a>
* [ ] <b> Permitir que os usuários controlem as alterações de conteúdo</b> que ocorrem em paralelo com outro conteúdo. <a id="TEC7" href="#RP7">\[7]</a>
* [ ] <b> Toda a animação</b> deve obedecer à `prefers-reduced-motion` consulta de mídia. <a id="TEC8" href="#RP8">\[8]</a>
* [ ] <b> Evitar parallax e animações de tela inteira</b>. Se usar, <b>permitir pausas e controle pelo teclado</b>. <a id="TEC16" href="#RP16">\[16]</a>

## Contraste de Cores

* [ ] <b> Verificar o contraste</b> de  todo texto tamanho normal. <a id="TEC9" href="#RP9">[9]</a>
* [ ] <b> Verificar o contraste</b> de todo texto tamanho grande. <a id="TEC9" href="#RP9">[9]</a>
* [ ] <b> Verificar o contraste</b> de todos os ícones. <a id="TEC4" href="#RP4">[4]</a>
* [ ] <b> Verificar o contraste</b> das bordas dos elementos de entrada (entrada de texto, botões de opção, caixas de seleção, etc.). <a id="TEC4" href="#RP4">[4]</a>
* [ ] <b> Verificar o texto</b> que se sobrepõe a imagens ou vídeos. <a id="TEC9" href="#RP9">[9]</a>
* [ ] <b> Verificar `::selection` cores</b> personalizadas. <a id="TEC9" href="#RP9">[9]</a>

## Checklists de Design - ABNT NBR 17225:2025

### Contraste de Cores

- [ ] **Verificar o contraste** de todo texto tamanho normal.
- [ ] **Verificar o contraste** de todo texto tamanho grande.
- [ ] **Verificar o contraste** de todos os ícones.
- [ ] **Verificar o contraste** das bordas dos elementos de entrada (entrada de texto, botões de opção, caixas de seleção, etc.).
- [ ] **Verificar o texto** que se sobrepõe a imagens ou vídeos.
- [ ] **Verificar `::selection` cores** personalizadas.

## Checklists de Design - Guia de Boas Práticas para Acessibilidade Digital

### Design

- [ ] **Desenho Universal**: Garantir que o design do site ou aplicativo seja acessível para todas as pessoas sem a necessidade de adaptações.
- [ ] **Design Responsivo**: Certificar-se de que o design é responsivo e se adapta a diferentes dispositivos, incluindo móveis e desktops.
- [ ] **Cores e Contrastes**: Escolher combinações de cores que sejam acessíveis, considerando as necessidades de pessoas com deficiência visual, como daltonismo.
- [ ] **Uso adequado de fontes e espaçamento**: Usar fontes de fácil leitura e garantir que o tamanho e o espaçamento das fontes sejam acessíveis.

---

## Referências Bibliográficas

> <a id="RP1" href="#TEC1">1.</a> WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A).

> <a id="RP2" href="#TEC2">2.</a> WCAG 2.2 Understanding Docs. SC 1.4.4 Resize Text (Level AA).

> <a id="RP3" href="#TEC3">3.</a> WCAG 2.2 Understanding Docs. SC 1.3.3 Sensory Characteristics (Level A).

> <a id="RP4" href="#TEC4">4.</a> WCAG 2.2 Understanding Docs. SC 1.4.11 Non-text Contrast (Level AA).

> <a id="RP5" href="#TEC5">5.</a> WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA).

> <a id="RP6" href="#TEC6">6.</a> WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A).

> <a id="RP7" href="#TEC7">7.</a> WCAG 2.2 Understanding Docs. SC 2.2.2 Pause, Stop, Hide (Level A).

> <a id="RP8" href="#TEC8">8.</a> WCAG 2.2 Understanding Docs. SC 2.3.3 Animation from Interactions (Level AAA).

> <a id="RP9" href="#TEC9">9.</a> WCAG 2.2 Understanding Docs. SC 1.4.3 Contrast (Minimum) (Level AA).

> <a id="RP10" href="#TEC10">10.</a> Guia de Boas Práticas para Acessibilidade Digital (UK-BR), p. 43–44. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital)

> <a id="RP11" href="#TEC11">11.</a> Guia de Boas Práticas para Acessibilidade Digital (UK-BR), p. 45. Links com aparência distinta e foco de teclado evidente.

> <a id="RP12" href="#TEC12">12.</a> ABNT NBR 17225:2025, item 5.8.3 – Texto, alt ou nome acessível para botões.

> <a id="RP13" href="#TEC13">13.</a> ABNT NBR 17225:2025, item 5.8.6 – Área de acionamento mínima de 44px. Reforçado por: UK-BR p. 36–37.

> <a id="RP14" href="#TEC14">14.</a> Guia UK-BR, p. 29. Redimensionamento de texto com zoom em até 200%.

> <a id="RP15" href="#TEC15">15.</a> Guia UK-BR, p. 50. Não usar texto dentro de imagens.

> <a id="RP16" href="#TEC16">16.</a> Guia UK-BR, p. 45. Evitar parallax e dar controle de animação ao usuário.

> <a id="RP17" href="#TEC17">17.</a> WCAG 2.2 Understanding Docs. SC 1.4.8 Visual Presentation (Level AAA). Opções de apresentação visual incluindo alto contraste.

> <a id="RP18" href="#TEC18">18.</a> WCAG 2.2 Understanding Docs. SC 4.1.2 Name, Role, Value (Level A). Uso adequado de display:none e visibility:hidden.

> <a id="RP19" href="#TEC19">19.</a> ABNT NBR 17225:2025, item 5.8.3 – Nome acessível para botões e controles interativos.

## Bibliografia

> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. *Guia de Boas Práticas para Acessibilidade Digital*. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023.
> Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf)

> ABNT. *NBR 17225:2025 – Acessibilidade em interfaces digitais baseadas em web*. Rio de Janeiro, 2025.

## Histórico de Versões

| Versão | Descrição | Autor(es) | Data | Revisor(es) | Data de revisão |
|--------|-----------|-----------|------|-------------|-----------------|
| 1.0 | Adição de WCAG 2.2 e conformidade ABNT NBR 17225:2025 | [Gabriel Lopes](https://github.com/BrzGab) | 17/06/2025 | [Uires Carlos](https://github.com/uires2023) | 17/06/2025 |
| 1.1 | Correção em conformidade WCAG 2.2 e ABNT NBR 17225:2025 | [Taynara Vitorino](https://github.com/taybalau) | 23/06/2025 | [Gabriel Lopes](https://github.com/BrzGab) | 23/06/2025 |
| 1.2 | Adicionando mais itens sobre a ABNT NBR 17225:2025 | [Uires Carlos](https://github.com/uires2023) | 23/06/2025 | [Gabriel Lopes](https://github.com/BrzGab) | 23/06/2025 |