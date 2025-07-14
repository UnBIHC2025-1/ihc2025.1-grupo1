// Contador de Checklist para MkDocs
// Adiciona contador flutuante dinâmico para itens marcados em checklists

document.addEventListener('DOMContentLoaded', function() {
    // Cria e insere contadores para cada página com checklists
    function criarContadorParaPagina() {
        const caixasDeSelecao = document.querySelectorAll('input[type="checkbox"]');
        
        if (caixasDeSelecao.length === 0) {
            return; // Nenhuma caixa de seleção encontrada
        }

        // Verifica se a página tem conteúdo de checklist real procurando por itens de lista de tarefas
        const itensListaTarefas = document.querySelectorAll('.task-list-item');
        const temChecklistsReais = itensListaTarefas.length > 0 && caixasDeSelecao.length >= 5;
        
        if (!temChecklistsReais) {
            return; // Não é uma página de checklist
        }

        // Cria elemento contador flutuante
        const elementoContador = document.createElement('div');
        elementoContador.className = 'checklist-counter-floating';
        elementoContador.innerHTML = `
            <div class="counter-container">
                <div class="counter-text">
                    <span id="contagem-marcados">0</span>/<span id="contagem-total">0</span>
                </div>
                <div class="counter-subtitle">itens</div>
            </div>
        `;

        // Insere contador como elemento flutuante
        document.body.appendChild(elementoContador);

        // Função para atualizar contador
        function atualizarContador() {
            // Conta apenas caixas de seleção que estão dentro de itens de lista de tarefas (checklists reais)
            const caixasListaTarefas = document.querySelectorAll('.task-list-item input[type="checkbox"]');
            const totalCaixas = caixasListaTarefas.length;
            const caixasMarcadas = document.querySelectorAll('.task-list-item input[type="checkbox"]:checked').length;

            document.getElementById('contagem-marcados').textContent = caixasMarcadas;
            document.getElementById('contagem-total').textContent = totalCaixas;
            
            // Atualiza cor do contador baseado no progresso
            const elementoContador = document.querySelector('.checklist-counter-floating');
            if (elementoContador) {
                const porcentagem = totalCaixas > 0 ? (caixasMarcadas / totalCaixas) * 100 : 0;
                elementoContador.classList.remove('progress-low', 'progress-medium', 'progress-high', 'progress-complete');
                
                if (porcentagem === 100) {
                    elementoContador.classList.add('progress-complete');
                } else if (porcentagem >= 75) {
                    elementoContador.classList.add('progress-high');
                } else if (porcentagem >= 50) {
                    elementoContador.classList.add('progress-medium');
                } else {
                    elementoContador.classList.add('progress-low');
                }
            }
        }

        // Adiciona event listeners apenas para caixas de seleção de lista de tarefas
        const caixasListaTarefas = document.querySelectorAll('.task-list-item input[type="checkbox"]');
        caixasListaTarefas.forEach(caixa => {
            caixa.addEventListener('change', atualizarContador);
        });

        // Atualização inicial do contador
        atualizarContador();
    }

    // Inicializa contador
    criarContadorParaPagina();

    // Re-inicializa contador quando o conteúdo da página muda (para comportamento tipo SPA)
    const observador = new MutationObserver(function(mutacoes) {
        mutacoes.forEach(function(mutacao) {
            if (mutacao.type === 'childList' && mutacao.addedNodes.length > 0) {
                // Verifica se novos itens de checklist foram adicionados
                const temNovasCaixas = Array.from(mutacao.addedNodes).some(no => 
                    no.nodeType === Node.ELEMENT_NODE && 
                    (no.querySelector('.task-list-item input[type="checkbox"]') || no.matches('.task-list-item input[type="checkbox"]'))
                );
                
                if (temNovasCaixas) {
                    // Remove contador antigo
                    const contadorAntigo = document.querySelector('.checklist-counter-floating');
                    if (contadorAntigo) {
                        contadorAntigo.remove();
                    }
                    
                    // Cria novo contador
                    setTimeout(criarContadorParaPagina, 100);
                }
            }
        });
    });

    // Inicia observação
    observador.observe(document.body, {
        childList: true,
        subtree: true
    });
});