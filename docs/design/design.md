# Design

"Existe uma lenda de que a acessibilidade torna um sítio web muito simples ou feio. Não é verdade: um sítio web bem estruturado pode ser bonito e criativo. É possível, inclusive, criar apresentações visuais diferentes para a mesma estrutura HTML de um sítio web com o uso de CSS e atender a diferentes necessidades". Dessa forma, nessa seção encontra-se checklist que garantam a acessibilidade no design.

## Aparência
- [ ] <b> Adicionar instrução</b> que não <b>dependa exclusivamente da cor</b>. <a id="TEC1" href="#RP1">[1]</a>
- [ ] <b> Adicionar informação</b> (como gráficos e diagramas) que não <b>dependa exclusivamente da cor</b>. <a id="TEC1" href="#RP1">[1]</a>
- [ ] <b> Tamanho do texto ajustável</b> para permitir ampliação. <a id="TEC2" href="#RP2">[2]</a>
- [ ] <b> Descrever os controles</b> pelo nome, não apenas pela aparência ou localização. <a id="TEC3"href="#RP3">[3]</a>
- [ ] <b> Garantir que dicas visuais</b> significativas atinjam 3:1 em relação ao fundo. <a id="TEC4" href="#RP4">[4]</a>
- [ ] <b> Fazer com que as linhas</b> de texto se ajustem ao viewport. <a id="TEC5"href="#RP5">[5]</a>
- [ ] Oferece uma <b> opção de alto contraste </b> (dark-mode) de suas páginas web e aumento de fontes.
- [ ] Parágrafos com no <b> máximo 80 caracteres por linha </b>.
- [ ] <b> Evita </b> o uso de <b> textos longos em caixa alta ou condensados </b>.
- [ ] Evita o alinhamento justificado.
- [ ] <b> Fontes são fluidas </b> e de fácil entendimento.
- [ ] Toma o devido cuidado com <b>``` display:none ``` e ``` visibility:hidden ``` para os recursos de tecnologia assistiva</b>
- [ ] Preferir <b> botões com texto e ícone </b>. E botões apenas com ícones tem o nome acessível.

## Animação
- [ ] <b> Evitar conteúdo que pisque</b>, ou mantenha-o abaixo dos limites. <a id="TEC6" href="#RP6">[6]</a>
- [ ] <b> Permitir que os usuários controlem as alterações de conteúdo</b> que ocorrem em paralelo com outro conteúdo. <a id="TEC7" href="#RP7">[7]</a>
- [ ] <b> Toda a animação</b> deve obedecer à ```prefers-reduced-motion``` consulta de mídia. <a id="TEC8" href="#RP8">[8]</a>

## Contraste de Cores
- [ ] <b> Verificar o contraste</b> de  todo texto tamanho normal. <a id="TEC9" href="#RP9">[9]</a>
- [ ] <b> Verificar o contraste</b> de todo texto tamanho grande. <a id="TEC9" href="#RP9">[9]</a>
- [ ] <b> Verificar o contraste</b> de todos os ícones. <a id="TEC4" href="#RP4">[4]</a>
- [ ] <b> Verificar o contraste</b> das bordas dos elementos de entrada (entrada de texto, botões de opção, caixas de seleção, etc.). <a id="#RP4" href="#RP4">[4]</a>
- [ ] <b> Verificar o texto</b> que se sobrepõe a imagens ou vídeos. <a id="TEC9" href="#RP9">[9]</a>
- [ ] <b> Verificar ```::selection``` cores</b> personalizadas. <a id="TEC9" href="#RP9">[9]</a>

## WCAG 2.2 - Atualizações para Design
### Focus Appearance (AAA)
- [ ] <b>Indicador de foco com contraste mínimo de 3:1</b> contra cores adjacentes.
- [ ] <b>Área do indicador de foco</b> com pelo menos 2 pixels CSS de largura.
- [ ] <b>Foco sempre visível</b> - não pode ser oculto por outros elementos (modais, tooltips, etc).

### Target Size - Novo Padrão
- [ ] <b>Áreas interativas mínimas de 24x24 pixels CSS</b> (reduzido de 44x44).
- [ ] <b>Espaçamento adequado</b> entre elementos clicáveis adjacentes.
- [ ] <b>Exceções</b>: texto inline, controles nativos do navegador, quando o tamanho é essencial.

## Guia UK-Brasil - Adaptações
### Design Inclusivo para Brasil
- [ ] <b>Mobile-first obrigatório</b> - 67% dos brasileiros acessam internet só pelo celular.
- [ ] <b>Imagens otimizadas</b> - considerar planos de dados limitados.
- [ ] <b>Layout simples e limpo</b> - facilitar compreensão em telas pequenas.
- [ ] <b>Ícones com texto</b> - não assumir familiaridade com símbolos.
- [ ] <b>Cores culturalmente apropriadas</b> - considerar significados locais.

## Norma ABNT NBR 17225:2025 - Checklist de Design

### Apresentação (Seção 5.10 da ABNT)
- [ ] <b>Características sensoriais</b> - Não há instruções que dependem somente de forma, cor, tamanho, localização visual, orientação ou som <a id="TEC10" href="#RP10">[10]</a>
- [ ] <b>Ordem de apresentação</b> - A apresentação dos elementos preserva significado e operabilidade
- [ ] <b>Orientação de exibição</b> - Conteúdo não restringe visualização a uma única orientação, exceto quando essencial
- [ ] <b>Design responsivo</b> - Sem perda de informação com zoom até 400% (320px largura) ou altura 256px
- [ ] <b>Área do indicador de foco visível</b> - Pelo menos equivalente ao perímetro de 2 pixels CSS de espessura

### Uso de Cores (Seção 5.11 da ABNT)
- [ ] <b>Uso de cores exclusivo</b> - Não usar somente cores para transmitir informações, indicar ação ou distinguir elementos <a id="TEC11" href="#RP11">[11]</a>
- [ ] <b>Contraste para texto (aprimorado)</b> - Relação 7:1 para texto normal, 4.5:1 para texto grande (AAA) <a id="TEC12" href="#RP12">[12]</a>
- [ ] <b>Contraste para texto (mínimo)</b> - Relação 4.5:1 para texto normal, 3:1 para texto grande (AA) <a id="TEC13" href="#RP13">[13]</a>
- [ ] <b>Contraste para componentes</b> - Relação mínima 3:1 para componentes de interface e seus estados <a id="TEC14" href="#RP14">[14]</a>
- [ ] <b>Contraste para objetos gráficos</b> - Relação 3:1 para partes necessárias à compreensão do conteúdo <a id="TEC15" href="#RP15">[15]</a>
- [ ] <b>Contraste para indicador de foco</b> - Relação 3:1 entre estados com e sem foco <a id="TEC16" href="#RP16">[16]</a>

### Conteúdo Textual (Seção 5.12 da ABNT)
- [ ] <b>Espaçamento entre linhas</b> - Mínimo 1,5x o tamanho da fonte ou mecanismo configurável <a id="TEC17" href="#RP17">[17]</a>
- [ ] <b>Espaçamento entre parágrafos</b> - Mínimo 2x o tamanho da fonte ou mecanismo configurável
- [ ] <b>Espaçamento entre letras</b> - Mínimo 0,12x o tamanho da fonte ou mecanismo configurável
- [ ] <b>Espaçamento entre palavras</b> - Mínimo 0,16x o tamanho da fonte ou mecanismo configurável
- [ ] <b>Alinhamento de blocos de texto</b> - À esquerda para português, exceto quando essencial
- [ ] <b>Largura de blocos de texto</b> - Máximo 80 caracteres ou mecanismo configurável
- [ ] <b>Texto redimensionado</b> - Sem perda de conteúdo até 200% de zoom sem tecnologia assistiva

### Botões e Controles (Seção 5.8 da ABNT)
- [ ] <b>Identificação consistente na página</b> - Componentes com mesma funcionalidade identificados consistentemente
- [ ] <b>Identificação consistente em conjunto de páginas</b> - Componentes repetidos identificados de forma consistente
- [ ] <b>Área de acionamento (aprimorada)</b> - Mínimo 44x44 pixels CSS ou alternativas equivalentes (AAA) <a id="TEC18" href="#RP18">[18]</a>
- [ ] <b>Área de acionamento (mínima)</b> - Mínimo 24x24 pixels CSS ou espaçamento adequado (AA) <a id="TEC19" href="#RP19">[19]</a>
- [ ] <b>Controles com retorno</b> - Feedback perceptível quando acionados

### Animação (Seção 5.15 da ABNT)
- [ ] <b>Controle de animação</b> - Mecanismo para pausar animações automáticas que duram +5s
- [ ] <b>Animações acionadas por interação</b> - Mecanismo para desativar ou animação essencial
- [ ] <b>Flash intermitente</b> - Máximo 3 piscadas por segundo (AAA)
- [ ] <b>Flash intermitente limitado</b> - Dentro dos limites de flash geral e vermelho (AA)

## Ferramentas e Técnicas para Designers

### Verificação de Contraste
```css
/* Exemplo de CSS com contraste adequado */
.botao-primario {
  background-color: #0066cc; /* Azul */
  color: #ffffff; /* Branco - contraste 7.4:1 */
  border: 2px solid #004499; /* Borda mais escura - contraste 3.2:1 */
}

.texto-normal {
  color: #333333; /* Cinza escuro */
  background-color: #ffffff; /* Branco - contraste 12.6:1 */
}
```

### Indicadores Visuais Acessíveis
```css
/* Indicador de foco conforme ABNT NBR 17225 */
.botao:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  /* Contraste mínimo 3:1 garantido */
}

/* Indicador de erro sem depender só da cor */
.campo-erro {
  border: 2px solid #cc0000;
  background-image: url('icone-erro.svg');
  background-position: right 8px center;
}
.campo-erro::after {
  content: " (obrigatório)";
  color: #cc0000;
}
```

### Responsive Design Acessível
```css
/* Design responsivo conforme ABNT */
@media (max-width: 320px) {
  .conteudo {
    max-width: 100%;
    /* Sem scroll horizontal */
  }
}

/* Preferência de movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Design Tokens Acessíveis

### Paleta de Cores ABNT-Compliant
```json
{
  "cores": {
    "primaria": {
      "azul-100": "#e6f3ff", // Contraste 1.2:1 - apenas decorativo
      "azul-500": "#0066cc", // Contraste 7.4:1 - texto em branco
      "azul-700": "#004499"  // Contraste 11.2:1 - texto em branco
    },
    "semanticas": {
      "sucesso": "#006600", // Contraste 8.3:1
      "aviso": "#996600",   // Contraste 6.1:1
      "erro": "#cc0000"     // Contraste 9.2:1
    }
  }
}
```

### Tipografia Acessível
```json
{
  "tipografia": {
    "tamanhos": {
      "pequeno": "14px",   // Mínimo para texto secundário
      "normal": "16px",    // Padrão base
      "grande": "18px",    // Texto grande (contraste 3:1)
      "titulo": "24px"     // Cabeçalhos
    },
    "espacamento": {
      "linha": "1.5",      // 1.5x tamanho da fonte (ABNT)
      "paragrafo": "2em",  // 2x tamanho da fonte (ABNT)
      "letra": "0.12em",   // 0.12x tamanho da fonte (ABNT)
      "palavra": "0.16em"  // 0.16x tamanho da fonte (ABNT)
    }
  }
}
```

## Componentes Acessíveis por Padrão

### Botões Acessíveis
- [ ] <b>Tamanho mínimo</b> - 24x24px CSS conforme novo padrão ABNT
- [ ] <b>Contraste adequado</b> - Mínimo 3:1 para componente, 4.5:1 para texto
- [ ] <b>Estado de foco</b> - Visível e com contraste 3:1
- [ ] <b>Texto descritivo</b> - Não apenas ícones sem contexto
- [ ] <b>Feedback visual</b> - Mudança perceptível em todos os estados

### Cards e Containers
- [ ] <b>Estrutura semântica</b> - Uso correto de article, section
- [ ] <b>Hierarquia visual</b> - Clara e consistente
- [ ] <b>Espaçamento interno</b> - Mínimo 16px para conforto de leitura
- [ ] <b>Contraste de bordas</b> - 3:1 quando necessárias para compreensão

### Formulários Visuais
- [ ] <b>Labels visualmente próximos</b> - Posicionamento previsível
- [ ] <b>Campos obrigatórios</b> - Indicação visual + textual
- [ ] <b>Estados de erro</b> - Cor + ícone + texto explicativo
- [ ] <b>Agrupamento visual</b> - Fieldsets com bordas ou background diferenciado

## Metodologia de Design Inclusivo

### Processo de Validação
1. **Design inicial** - Aplicar tokens acessíveis
2. **Verificação automática** - Contrast checker, axe DevTools
3. **Análise heurística** - 10 heurísticas de acessibilidade
4. **Teste com usuários** - Incluindo pessoas com deficiência
5. **Iteração e refinamento** - Baseado em feedback real

### Documentação de Design
- [ ] <b>Especificação de contraste</b> - Valores exatos para desenvolvimento
- [ ] <b>Estados interativos</b> - Hover, focus, active, disabled
- [ ] <b>Variações responsivas</b> - Comportamento em diferentes telas
- [ ] <b>Guias de uso</b> - Quando e como usar cada componente
- [ ] <b>Casos extremos</b> - Conteúdo longo, idiomas diferentes

### Testes de Usabilidade Inclusivos
- [ ] <b>Usuários com baixa visão</b> - Teste com zoom, alto contraste
- [ ] <b>Usuários daltônicos</b> - Simulação de diferentes tipos
- [ ] <b>Usuários de leitores de tela</b> - Navegação sem visão
- [ ] <b>Usuários motores</b> - Navegação apenas por teclado/switch
- [ ] <b>Usuários cognitivos</b> - Clareza e simplicidade de interface

## Referências Bibliograficas

> <a id="RP1" href="#TEC1">1.</a> WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). Acesso em: 9 Mai. 2024.

> <a id="RP2" href="#TEC2">2.</a> WCAG 2.2 Understanding Docs. SC 1.4.4 Resize Text (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html). Acesso em: 9 Mai. 2024.

> <a id="RP3" href="#TEC3">3.</a> WCAG 2.2 Understanding Docs. SC 1.3.3 Sensory Characteristics (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html). Acesso em: 9 Mai. 2024.

> <a id="RP4" href="#TEC4">4.</a> WCAG 2.2 Understanding Docs. SC 1.4.11 Non-text Contrast (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Acesso em: 9 Mai. 2024.

> <a id="RP5" href="#TEC5">5.</a> WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reflow.html](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Acesso em: 9 Mai. 2024.

> <a id="RP6" href="#TEC6">6.</a> WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Acesso em: 9 Mai. 2024.

> <a id="RP7" href="#TEC7">7.</a> WCAG 2.2.2 Understanding Docs. SC 2.2.2 Pause, Stop, Hide (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html). Acesso em: 9 Mai. 2024.

> <a id="RP8" href="#TEC8">8.</a> WCAG 2.2 Understanding Docs. SC 2.3.3 Animation from Interactions (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html). Acesso em: 9 Mai. 2024.

> <a id="RP9" href="#TEC9">9.</a> WCAG 2.2 Understanding Docs. SC 1.4.3 Contrast (Minimum) (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Acesso em: 9 Mai. 2024.

> <a id="RP10" href="#TEC10">10.</a> ABNT. NBR 17225:2025 - Seção 5.10.1 Características sensoriais. Associação Brasileira de Normas Técnicas, 2025.

> <a id="RP11" href="#TEC11">11.</a> ABNT. NBR 17225:2025 - Seção 5.11.1 Uso de cores. Associação Brasileira de Normas Técnicas, 2025.

> <a id="RP12" href="#TEC12">12.</a> ABNT. NBR 17225:2025 - Seção 5.11.2 Contraste para texto (aprimorado). Associação Brasileira de Normas Técnicas, 2025.

> <a id="RP13" href="#TEC13">13.</a> ABNT. NBR 17225:2025 - Seção 5.11.3 Contraste para texto (mínimo). Associação Brasileira de Normas Técnicas, 2025.

> <a id="RP14" href="#TEC14">14.</a> ABNT. NBR 17225:2025 - Seção 5.11.4 Contraste para componentes. Associação Brasileira de Normas Técnicas, 2025.

> <a id="RP15" href="#TEC15">15.</a> ABNT. NBR 17225:2025 - Seção 5.11.5 Contraste para objetos gráficos. Associação Brasileira de Normas Técnicas, 2025.

> <a id="RP16" href="#TEC16">16.</a> ABNT. NBR 17225:2025 - Seção 5.11.6 Contraste para indicador de foco visível. Associação Brasileira de Normas Técnicas, 2025.

> <a id="RP17" href="#TEC17">17.</a> ABNT. NBR 17225:2025 - Seção 5.12.1 Espaçamento entre as linhas. Associação Brasileira de Normas Técnicas, 2025.

> <a id="RP18" href="#TEC18">18.</a> ABNT. NBR 17225:2025 - Seção 5.8.6 Área de acionamento (aprimorada). Associação Brasileira de Normas Técnicas, 2025.

> <a id="RP19" href="#TEC19">19.</a> ABNT. NBR 17225:2025 - Seção 5.8.7 Área de acionamento (mínima). Associação Brasileira de Normas Técnicas, 2025.

## Bibliografia

> ABNT. NBR 17225:2025 - Acessibilidade em conteúdo para a web. Associação Brasileira de Normas Técnicas, 2025.

> Academia de Acessibilidade. Checklist Norma ABNT NBR 17225. Disponível em: [https://www.academiadeacessibilidade.com.br/ferramentas/checklist-abnt/](https://www.academiadeacessibilidade.com.br/ferramentas/checklist-abnt/). Acesso em: 17 Jun. 2025.

> SALES, M. Análise Heurística de Acessibilidade. Academia de Acessibilidade, 2025. Disponível em: [https://www.academiadeacessibilidade.com.br/ferramentas/analise-heuristica/](https://www.academiadeacessibilidade.com.br/ferramentas/analise-heuristica/). Acesso em: 17 Jun. 2025.

> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024.

> W3C. Web Content Accessibility Guidelines (WCAG) 2.2. World Wide Web Consortium, 2023. Disponível em: [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/). Acesso em: 17 Jun. 2025.

## Histórico de Versões

| Versão | Descrição | Autor(es) | Data | Revisor(es) | Data de revisão |
|--------|-----------|-----------|------|-------------|-----------------|
| 1.0 | Versão inicial | Equipe WebAAA | 17/06/2025 | - | - |
| 2.0 | Adição de WCAG 2.2 Focus Appearance, Target Size e adaptações UK-Brasil | [Gabriel Lopes](https://github.com/BrzGab) | 17/06/2025 | [Uires Carlos](https://github.com/uires2023) | 17/06/2025 |
| 3.0 | Expansão com ABNT NBR 17225, design tokens, componentes acessíveis e metodologia inclusiva completa | [Gabriel Lopes](https://github.com/BrzGab) | 17/06/2025 | [Uires Carlos](https://github.com/uires2023) | 17/06/2025 |