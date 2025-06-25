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

## Histórico de Versões

| Versão | Descrição | Autor(es) | Data | Revisor(es) | Data de revisão |
|--------|-----------|-----------|------|-------------|-----------------|
| 1.0 |Criação da página   | [Pedro Luiz](https://github.com/pedroluizfo) | 23/06/2025 | |  |