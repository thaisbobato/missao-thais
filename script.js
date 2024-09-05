const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que uma alimentação balanceada é essencial para um estilo de vida saudável?",
        alternativas: [
            {
                texto: "Sim, uma alimentação balanceada é fundamental.",
                afirmacao: "Uma dieta variada fornece os nutrientes necessários para manter o corpo e a mente saudáveis."
            },
            {
                texto: "Não, não acho que seja tão importante." 
                afirmacao: "Embora a alimentação seja relevante, outras práticas como exercícios físicos podem compensar."
            }
           
        ]
    },
    {
        enunciado: "Você pratica exercícios físicos regularmente?",
        alternativas: [
            {
                texto: "Sim, eu me exercito várias vezes por semana.",
                afirmacao: "A atividade física regular melhora a saúde cardiovascular e aumenta a disposição."
            },
            {
                texto: "Não, raramente pratico atividades físicas.",
                afirmacao: "Ficar sedentário pode levar a problemas de saúde a longo prazo, mesmo com uma boa alimentação."
            }
           
        ]
    },
    {
        enunciado: "Você considera importante ter momentos de lazer e relaxamento em sua rotina?",
        alternativas: [
            {
                texto: "Sim, o lazer é essencial para o bem-estar.",
                afirmacao:"Atividades de lazer ajudam a reduzir o estresse e promovem a saúde mental."
            },
            {
                texto: "Não, prefiro focar em trabalho e responsabilidades.",
                afirmacao:"Embora o trabalho seja importante, negligenciar o lazer pode levar ao burnout."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta () {
    if (atual >= perguntas.length){
        mostraResultado ();
        return;
    }
perguntaAtual = perguntas [atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
textoResultado.textContent = "";
mostraAlternativas();
}

function mostraAlternativas () {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement ("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener ("click", () =>
        respostaSelecionada (alternativa));
        caixaAlternativas.appendChild (botaoAlternativas);
    }
 }
    function respostaSelecionada (opcaoSelecionada) {
        const afirmacao = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacao + " ";
        atual++
        mostraPergunta();
    }
    function mostraResultado () {
        caixaPerguntas.textContent = "Resumindo...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }

   mostraPergunta();