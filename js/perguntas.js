const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acorda pela manhã e percebe que sua pele está mais ressecada do que o normal. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Procurar um hidratante mais potente para devolver a umidade.",
                afirmacao: "Apostou em um hidratante mais rico em ácidos graxos e notou uma melhora visível na hidratação."
            },
            {
                texto: "Ignorar e seguir com a rotina, esperando que melhore durante o dia.",
                afirmacao: "Sentiu que a pele continuou ressecada e ficou mais desconfortável ao longo do dia."
            }
        ]
    },
    {
        enunciado: "Você está se preparando para um evento importante e percebe que está com algumas espinhas no rosto. O que você faz?",
        alternativas: [
            {
                texto: "Usa um corretivo para cobrir as espinhas e decide não se preocupar mais com isso.",
                afirmacao: "Conseguiu camuflar as espinhas temporariamente, mas percebeu que era importante tratar a causa do problema."
            },
            {
                texto: "Aplica um tratamento rápido, como gel secativo, e faz uma limpeza de pele em casa.",
                afirmacao: "Tratou as espinhas diretamente e, com o tempo, as manchas desapareceram."
            }
        ]
    },
    {
        enunciado: "Após o uso de um novo produto de cuidados com a pele, você percebe que sua pele está mais irritada do que o normal. O que faz?",
        alternativas: [
            {
                texto: "Para de usar o produto imediatamente e opta por hidratar a pele com um creme calmante.",
                afirmacao: "A irritação diminuiu após o uso do creme calmante e você aprendeu a testar novos produtos com mais cautela."
            },
            {
                texto: "Continua usando o produto, acreditando que a pele vai se acostumar.",
                afirmacao: "A irritação piorou e você precisou procurar ajuda de um dermatologista para reverter os efeitos."
            }
        ]
    },
    {
        enunciado: "Você está em dúvida sobre qual tipo de esfoliante utilizar para a sua pele. Como você decide?",
        alternativas: [
            {
                texto: "Escolho um esfoliante mais suave, com partículas pequenas, para evitar danos à pele.",
                afirmacao: "A pele ficou mais macia e com aspecto saudável, sem sinais de irritação."
            },
            {
                texto: "Opto por um esfoliante mais potente, achando que vai limpar melhor os poros.",
                afirmacao: "A pele ficou avermelhada e irritada, e você percebeu que precisava de cuidados mais suaves."
            }
        ]
    },
    {
        enunciado: "Você está preparando uma máscara facial em casa. Qual ingrediente você escolhe para hidratar profundamente a pele?",
        alternativas: [
            {
                texto: "Máscara de abacate com mel, que ajuda a hidratar e a nutrir a pele.",
                afirmacao: "A máscara deixou sua pele macia, suave e com uma sensação de frescor."
            },
            {
                texto: "Máscara de argila verde para ajudar a controlar a oleosidade.",
                afirmacao: "A pele ficou mais matificada, mas com um leve ressecamento. Você percebeu que uma combinação de cuidados seria ideal."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A jornada da sua pele:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();