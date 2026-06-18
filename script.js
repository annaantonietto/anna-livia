// Simulador de Produtividade Agropecuária: A Força do Campo

// 1. Dados iniciais do campo (valores de exemplo)
const dadosDoCampo = {
    nomePropriedade: "Fazenda Progresso",
    areaCultivavel: 500, // em hectares
    cultura: "Soja",
    investimentoTecnologia: 85, // Escala de 0 a 100 (Maquinário, IA, Irrigação)
    praticasSustentaveis: 70,   // Escala de 0 a 100 (Rotação de culturas, plantio direto)
    climaFavoravel: true        // Condições climáticas do ano
};

// 2. Função para calcular o índice da "Força do Campo"
function calcularForcaDoCampo(campo) {
    // A força do campo é uma média ponderada entre tecnologia e sustentabilidade
    const pesoTecnologia = 0.6;
    const pesoSustentabilidade = 0.4;
    
    const indiceForca = (campo.investimentoTecnologia * pesoTecnologia) + (campo.praticasSustentaveis * pesoSustentabilidade);
    return indiceForca;
}

// 3. Função para prever a produção total (em toneladas)
function preverProducao(campo) {
    const forca = calcularForcaDoCampo(campo);
    let produtividadeBasePorHectare = 3.5; // Média base de toneladas por hectare
    
    // Modificadores baseados na força do campo
    if (forca > 80) {
        produtividadeBasePorHectare += 1.5; // Alta tecnologia e manejo aumentam a eficiência
    } else if (forca > 50) {
        produtividadeBasePorHectare += 0.5;
    } else {
        produtividadeBasePorHectare -= 1.0; // Baixo investimento reduz o potencial
    }
    
    // Impacto do clima (fator externo imprevisível)
    if (!campo.climaFavoravel) {
        console.log("Aviso: O clima não foi favorável este ano. Perda de 20% na produção estimada.");
        produtividadeBasePorHectare *= 0.8;
    }
    
    // Cálculo final
    const producaoTotal = campo.areaCultivavel * productivityBasePorHectare;
    return {
        forcaDoCampo: forca.toFixed(1),
        produtividadePorHectare: produtividadeBasePorHectare.toFixed(2),
        producaoTotal: producaoTotal.toFixed(2)
    };
}

// 4. Executando a simulação e exibindo os resultados
function executarSimulacao() {
    console.log(`--- Relatório de Produção: ${dadosDoCampo.nomePropriedade} ---`);
    console.log(`Cultura principal: ${dadosDoCampo.cultura}`);
    console.log(`Área total: ${dadosDoCampo.areaCultivavel} hectares`);
    
    const resultado = preverProducao(dadosDoCampo);
    
    console.log("-----------------------------------------");
    console.log(`Índice de Força do Campo: ${resultado.forcaDoCampo}/100`);
    console.log(`Estimativa de Produtividade: ${resultado.produtividadePorHectare} toneladas/hectare`);
    console.log(`PRODUÇÃO TOTAL ESTIMADA: ${resultado.producaoTotal} toneladas`);
    console.log("-----------------------------------------");
}

// Rodar o script
executarSimulacao();
