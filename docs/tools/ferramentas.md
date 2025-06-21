# Ferramentas de Acessibilidade

Para auxiliar e facilitar o desenvolvimento de soluções acessíveis, este guia apresenta ferramentas organizadas por categoria, com análises detalhadas, tutoriais e recomendações de uso baseadas em testes práticos e literatura acadêmica.

## 🎯 Guia Rápido: Qual Ferramenta Usar?

### Para Começar (Iniciantes)
- **WAVE** - Interface visual intuitiva, ideal para aprender
- **ASES** - Ferramenta brasileira, relatórios em português
- **Lighthouse** - Já integrado no Chrome, fácil de usar

### Para Profissionais
- **axe DevTools** - Análise profunda, integração com CI/CD
- **Pa11y** - Automação e testes em larga escala
- **NVDA + JAWS** - Testes com leitores de tela reais

### Para Equipes
- **Accessibility Insights** - Fluxo completo de testes
- **Stark** - Integração com ferramentas de design
- **jest-axe** - Testes automatizados no desenvolvimento

## Ferramentas de Teste Automatizado

### 1. ASES - Avaliador e Simulador de Acessibilidade em Sítios
🏛️ **Ferramenta Oficial do Governo Brasileiro**

**Quando usar:** Ideal para validar conformidade com padrões brasileiros (e-MAG)
**Vantagens:** Relatórios em português, validação específica para sites governamentais
**Limitações:** Interface menos moderna, foco em critérios básicos

#### 📖 Tutorial Passo a Passo - ASES
1. Acesse [asesweb.governoeletronico.gov.br](https://asesweb.governoeletronico.gov.br/)
2. Digite a URL do site a ser avaliado
3. Selecione o tipo de avaliação:
   - **e-MAG**: Para sites governamentais
   - **WCAG**: Para conformidade internacional
4. Clique em "Avaliar"
5. Analise o relatório:
   - **Erros** (vermelho): Corrigir imediatamente
   - **Avisos** (amarelo): Revisar e validar
   - **Informações** (azul): Boas práticas
6. Baixe o relatório PDF para documentação

**💡 Dica:** Use o ASES como primeira validação para sites brasileiros

### 2. WAVE - Web Accessibility Evaluation Tool
🌊 **Melhor para Aprendizado Visual**

**Quando usar:** Ideal para desenvolvedores iniciantes e análise visual rápida
**Vantagens:** Interface intuitiva, mostra problemas diretamente na página
**Limitações:** Não testa interações JavaScript complexas

#### 📖 Tutorial Passo a Passo - WAVE
1. Instale a [extensão WAVE](https://wave.webaim.org/extension/)
2. Navegue até a página a testar
3. Clique no ícone WAVE na barra de ferramentas
4. Analise os ícones sobrepostos:
   - 🔴 **Erros**: Problemas críticos de acessibilidade
   - 🟡 **Alertas**: Possíveis problemas, requerem revisão
   - 🟢 **Features**: Recursos de acessibilidade implementados
   - ℹ️ **Estrutura**: Informações sobre a estrutura da página
5. Clique em cada ícone para detalhes e sugestões de correção
6. Use a aba "Details" para lista completa de problemas

**💡 Dica:** Comece corrigindo erros de contraste e alt text ausente

### 3. axe DevTools
🛠️ **Padrão da Indústria para Profissionais**

**Quando usar:** Desenvolvimento profissional, integração com CI/CD
**Vantagens:** Mais preciso, menos falsos positivos, integração com frameworks
**Limitações:** Requer conhecimento técnico intermediário

#### 📖 Tutorial Passo a Passo - axe DevTools
1. Instale a [extensão axe DevTools](https://www.deque.com/axe/devtools/)
2. Abra o DevTools do navegador (F12)
3. Navegue até a aba "axe DevTools"
4. Clique em "Run Full Analysis"
5. Revise os resultados organizados por:
   - **Impacto**: Critical > Serious > Moderate > Minor
   - **Categoria**: WCAG 2.0/2.1/2.2, Seção 508, etc.
6. Para cada problema:
   - Clique para destacar o elemento
   - Leia a descrição do problema
   - Siga o link "More Info" para soluções
7. Use "Export Results" para gerar relatórios

**💡 Dica:** Configure o axe-core no seu pipeline de CI para testes automatizados

### 4. Lighthouse
🏮 **Integrado e Completo**

**Quando usar:** Análise geral de performance + acessibilidade
**Vantagens:** Já vem no Chrome, métricas de performance
**Limitações:** Menos detalhado que ferramentas especializadas

#### 📖 Tutorial Passo a Passo - Lighthouse
1. Abra o Chrome DevTools (F12)
2. Vá para a aba "Lighthouse"
3. Configure:
   - ✅ Marque "Accessibility"
   - 📱 Escolha "Mobile" ou "Desktop"
   - 🎯 Clique "Analyze page load"
4. Aguarde a análise (30-60 segundos)
5. Revise a pontuação de acessibilidade (0-100)
6. Expanda cada categoria de problemas:
   - Veja elementos afetados
   - Links para documentação
   - Sugestões de correção
7. Use "View Trace" para debugging avançado

**💡 Dica:** Busque pontuação >90 para boa acessibilidade

### Extensões para Navegadores
- [axe DevTools Extension](https://www.deque.com/axe/devtools/) - Chrome/Firefox
- [WAVE Browser Extension](https://wave.webaim.org/extension/) - Chrome/Firefox
- [Accessibility Insights](https://accessibilityinsights.io/) - Microsoft

## Leitores de Tela - Testes com Usuários Reais

### NVDA - NonVisual Desktop Access
🆓 **Melhor Opção Gratuita para Windows**

**Quando usar:** Testes em Windows, desenvolvimento web, validação de ARIA
**Vantagens:** Gratuito, open source, atualizações frequentes, comunidade ativa
**Limitações:** Curva de aprendizado inicial

#### 📖 Tutorial Passo a Passo - NVDA
1. Baixe o NVDA em [nvaccess.org](https://www.nvaccess.org/)
2. Instale e inicie o NVDA
3. **Comandos Essenciais:**
   - `NVDA + Q`: Desligar o NVDA
   - `NVDA + S`: Modo de fala (desligado/ligado)
   - `NVDA + F7`: Lista de elementos (links, títulos, landmarks)
   - `Tab`: Navegar por elementos focáveis
   - `H`: Próximo cabeçalho
   - `D`: Próximo landmark
   - `K`: Próximo link
4. **Para testar seu site:**
   - Desligue o monitor ou feche os olhos
   - Navegue apenas com teclado
   - Verifique se consegue:
     - ✅ Entender a estrutura da página
     - ✅ Acessar todos os links e botões
     - ✅ Preencher formulários
     - ✅ Ler conteúdo de imagens (alt text)
5. **Modo Browse vs Focus:**
   - Browse: Leitura de conteúdo (setas navegam)
   - Focus: Interação com formulários (Tab navega)

**💡 Dica:** Configure vozes em português no menu NVDA > Preferências > Configurações de Voz

### JAWS - Job Access With Speech
💼 **Padrão Corporativo no Brasil**

**Quando usar:** Ambientes corporativos, testes profissionais, validação completa
**Vantagens:** Mais recursos, melhor suporte para aplicações complexas
**Limitações:** Licença paga (cara), maior complexidade

#### 📖 Tutorial Básico - JAWS
1. **Comandos Similares ao NVDA:**
   - `Insert + F4`: Fechar JAWS
   - `Insert + S`: Interromper fala
   - `Insert + F6`: Lista de cabeçalhos
   - `Insert + F7`: Lista de links
2. **Recursos Exclusivos:**
   - Modo Forms automático
   - Melhor suporte para tabelas complexas
   - Scripts personalizados para aplicações

**💡 Dica:** Use a versão demo de 40 minutos para testes rápidos

### VoiceOver (macOS/iOS)
🍎 **Integrado em Dispositivos Apple**

#### 📖 Ativação Rápida - VoiceOver
**macOS:**
1. `Cmd + F5`: Ligar/Desligar VoiceOver
2. `Ctrl + Option` (VO): Tecla modificadora
3. `VO + A`: Ler tudo
4. `VO + →`: Próximo item

**iOS:**
1. Ajustes > Acessibilidade > VoiceOver
2. Ou "Ei Siri, ativar VoiceOver"
3. **Gestos:** Deslizar para navegar, toque duplo para ativar

### TalkBack (Android)
🤖 **Padrão Android**

#### 📖 Ativação - TalkBack
1. Configurações > Acessibilidade > TalkBack
2. Atalho: Pressione ambos os botões de volume por 3 segundos
3. **Gestos:** Similar ao VoiceOver do iOS

## Ferramentas de Contraste e Cores

- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) - Desktop (Windows/Mac)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Online
- [Stark](https://www.getstark.co/) - Plugin para Figma/Sketch/Adobe XD
- [Contrast](https://usecontrast.com/) - macOS

## Ferramentas para WCAG 2.2

### Teste de Foco e Navegação
- [Keyboard Navigation Tester](https://khan.github.io/tota11y/) - Visualização de navegação por teclado
- [Focus Indicator](https://accessibilityinsights.io/docs/web/getstarted/fastpass/) - Teste de indicadores de foco

### Validação de Formulários
- [Form Accessibility Validator](https://www.html5accessibility.com/tests/form.html) - Teste de formulários acessíveis

## Ferramentas Brasileiras e Governamentais

- [ASES Web](https://asesweb.governoeletronico.gov.br/) - Avaliador oficial do Governo
- [VLibras](https://www.gov.br/governodigital/pt-br/vlibras) - Tradutor de Português para LIBRAS
- [Hand Talk](https://www.handtalk.me/) - Plugin de tradução para LIBRAS

## Ferramentas de Desenvolvimento

### Frameworks e Bibliotecas
- [React Aria](https://react-spectrum.adobe.com/react-aria/) - Componentes acessíveis para React
- [Angular CDK A11y](https://material.angular.io/cdk/a11y/overview) - Recursos de acessibilidade para Angular
- [Vue A11y](https://vue-a11y.com/) - Recursos para Vue.js

### Testes Automatizados
- [Pa11y](https://pa11y.org/) - Testes de linha de comando
- [jest-axe](https://github.com/nickcolley/jest-axe) - Testes de acessibilidade com Jest
- [Cypress Axe](https://github.com/component-driven/cypress-axe) - Testes E2E com acessibilidade

## Recursos Adicionais

### Documentação e Aprendizado
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) - Referência rápida oficial
- [WebAIM Resources](https://webaim.org/resources/) - Recursos educacionais
- [A11y Project](https://www.a11yproject.com/) - Comunidade e recursos
- [Curso eMAG](http://emag.governoeletronico.gov.br/) - Curso oficial do Governo Brasileiro

### Simuladores
- [NoCoffee Vision Simulator](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl) - Simula deficiências visuais
- [Funkify](https://www.funkify.org/) - Simulador de várias deficiências

## 📊 Análise Comparativa de Ferramentas

### Quadro Comparativo - Validadores Automáticos

| Ferramenta | Precisão | Facilidade | Cobertura WCAG | Relatórios | Custo |
|------------|----------|------------|----------------|------------|--------|
| **ASES** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 2.0 + e-MAG | Português | Grátis |
| **WAVE** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 2.1 | Inglês | Grátis |
| **axe** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 2.2 | Multi | Freemium |
| **Lighthouse** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 2.1 | Multi | Grátis |

### Recomendações por Cenário

#### 🏢 Site Governamental Brasileiro
1. **ASES** - Validação e-MAG obrigatória
2. **VLibras** - Widget de tradução LIBRAS
3. **NVDA** - Teste com leitor de tela
4. **Contrast Checker** - Validar cores institucionais

#### 🛒 E-commerce
1. **axe DevTools** - Cobertura completa WCAG 2.2
2. **WAVE** - Validação visual rápida
3. **Pa11y** - Testes automatizados de checkout
4. **Mobile** - TalkBack/VoiceOver para app mobile

#### 📱 Aplicação Web Progressiva (PWA)
1. **Lighthouse** - Performance + Acessibilidade
2. **Accessibility Insights** - Testes manuais guiados
3. **NVDA + JAWS** - Compatibilidade com leitores
4. **Simuladores** - Testar diferentes deficiências

## 🔄 Fluxo de Trabalho Recomendado

### Fase 1: Desenvolvimento (Durante Codificação)
```
1. Configurar ESLint + plugin a11y
2. Usar React Aria / Angular CDK
3. Testar com teclado constantemente
4. Validar contraste no design
```

### Fase 2: Revisão (Code Review)
```
1. axe DevTools - Análise automática
2. WAVE - Revisão visual
3. Navegação por teclado
4. Verificar ARIA labels
```

### Fase 3: QA (Testes Completos)
```
1. ASES - Conformidade brasileira
2. Lighthouse - Métricas gerais
3. NVDA/JAWS - Teste real
4. Dispositivos móveis - VoiceOver/TalkBack
```

### Fase 4: CI/CD (Automação)
```
1. jest-axe nos testes unitários
2. Pa11y no pipeline
3. Lighthouse CI para regressões
4. Relatórios automáticos
```

## 🎯 Métricas e KPIs de Acessibilidade

### Indicadores Quantitativos
- **Taxa de Conformidade WCAG**: >95% nível AA
- **Pontuação Lighthouse**: >90
- **Erros Críticos ASES**: 0
- **Tempo de Navegação por Teclado**: <2x mouse

### Indicadores Qualitativos
- **Feedback de usuários com deficiência**
- **Taxa de conclusão de tarefas**
- **Satisfação do usuário (NPS)**
- **Tempo de correção de bugs**

## 💡 Dicas dos Especialistas

### "O erro mais comum é testar acessibilidade apenas no final"
> *Integre ferramentas desde o início do desenvolvimento. Use axe-core no seu editor e configure testes automatizados.* - Baseado em Deque Systems (2023)

### "30% dos problemas só são encontrados por usuários reais"
> *Ferramentas automatizadas encontram apenas 70% dos problemas. Sempre complemente com testes manuais e usuários reais.* - WebAIM Survey (2023)

### "Mobile-first é acessibilidade-first"
> *No Brasil, 67% acessam apenas por celular. Teste sempre no mobile com TalkBack.* - CETIC.br (2023)

## 📚 Referências e Literatura

1. **Marcelo Sales** (2023). "Acessibilidade Digital no Brasil: Desafios e Oportunidades". *Revista Brasileira de Tecnologia Assistiva*.

2. **W3C/WAI** (2023). "Selecting Web Accessibility Evaluation Tools". Disponível em: [w3.org/WAI/test-evaluate/tools/](https://www.w3.org/WAI/test-evaluate/tools/)

3. **Reinaldo Ferraz** (2020). "Acessibilidade na Web: Boas práticas para construir sites e aplicações acessíveis". Casa do Código.

4. **Deque Systems** (2023). "The Automated Accessibility Coverage Report". Análise de eficácia de ferramentas automatizadas.

## ✅ Checklist Final - Ferramentas Essenciais

- [ ] **Validador automático** instalado (WAVE ou axe)
- [ ] **Leitor de tela** configurado (NVDA ou JAWS)
- [ ] **Analisador de contraste** disponível
- [ ] **Testes mobile** configurados
- [ ] **Pipeline CI/CD** com testes de acessibilidade
- [ ] **Documentação** de processos e ferramentas
- [ ] **Treinamento** da equipe realizado
- [ ] **Métricas** de acessibilidade definidas

---

**💭 Reflexão Final:** As ferramentas são apenas o meio. O objetivo é criar experiências verdadeiramente inclusivas. Use-as como apoio, mas sempre priorize o feedback de usuários reais com deficiência.

## Histórico de Versões

| Versão | Descrição | Autor(es) | Data | Revisor(es) | Data de revisão |
|--------|-----------|-----------|------|-------------|-----------------|
| 1.0 | Versão inicial com lista de ferramentas | Equipe WebAAA | 17/06/2025 | - | - |
| 2.0 | Adição de tutoriais, análises comparativas e recomendações baseadas em literatura acadêmica | [Gabriel Lopes](https://github.com/BrzGab) | 17/06/2025 | [Uires Carlos](https://github.com/uires2023) | 17/06/2025 |

