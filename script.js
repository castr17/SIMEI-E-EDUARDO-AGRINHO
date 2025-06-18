
const perguntas = [
  {
      pergunta: "Sustentabilidade é a capacidade de atender às necessidades do presente sem comprometer as gerações futuras. Isso envolve o uso responsável dos recursos naturais, a preservação do meio ambiente e o equilíbrio entre o desenvolvimento econômico, a justiça social e a proteção da natureza. A prática da sustentabilidade é essencial para garantir um planeta saudável e equilibrado para todos. De acordo com o texto, oque é sustentabilidade?",
      alternativas: ["A capacidade de suprir as necessidades atuais sem prejudicar as futuras gerações.", "O crescimento econômico sem considerar os impactos ambientais.", "A exploração dos recursos naturais para gerar mais lucro.", "O consumo acelerado para atender às necessidades da sociedade atual."],
      correta: 0
  },
  {
      pergunta: "Consciência ambiental é o entendimento e a preocupação com os problemas que afetam o meio ambiente e a responsabilidade de cada pessoa na preservação da natureza. Envolve atitudes que promovem o equilíbrio entre as atividades humanas e a conservação do planeta. O que é consciência ambiental? ",
      alternativas: ["O uso livre dos recursos naturais sem preocupação com o futuro.", "A preocupação com o lucro das indústrias acima do meio ambiente.", "O entendimento da importância de preservar o meio ambiente e agir de forma sustentável. ", "A ideia de que a natureza pode se recuperar sozinha, sem ajuda humana."],
      correta: 2
  },
  {
      pergunta: "A consciência ambiental está diretamente relacionada às atitudes que demonstram preocupação e responsabilidade com o meio ambiente. Pequenas ações do dia a dia podem fazer uma grande diferença para a preservação da natureza e a construção de um futuro mais sustentável. Um dos exemplos mais comuns de consciência ambiental é a separação correta do lixo, permitindo a reciclagem de materiais como papel, plástico, vidro e metal. Outro exemplo importante é o uso racional da água, evitando desperdícios ao escovar os dentes, lavar o carro ou regar plantas em horários de sol forte. Reduzir o consumo de energia elétrica também é um hábito sustentável. Apagar as luzes ao sair de um cômodo ou utilizar lâmpadas de LED são formas simples de colaborar com o meio ambiente. Além disso, evitar o uso de sacolas plásticas, preferindo sacolas reutilizáveis, contribui para a redução da poluição nos oceanos e solos. Outras atitudes que mostram consciência ambiental incluem plantar árvores, preservar áreas verdes, optar por meios de transporte menos poluentes, como bicicleta ou transporte público, e consumir de forma consciente, escolhendo produtos de empresas que respeitam o meio ambiente. Assinale a alternativa que contém todas as opções corretas:",
    alternativas: ["Separar o lixo reciclável;Deixar a torneira aberta enquanto escova os dentes; Economizar energia elétrica.", " Plantar árvores ; Usar transporte público; Comprar produtos de empresas sustentáveis.", "Jogar lixo em locais apropriados; Utilizar sacolas reutilizáveis; Usar o carro para trajetos curtos diariamente.", "Desperdiçar alimentos; Reduzir o consumo de plástico; Reutilizar materiais sempre que possível."],
      correta: 1
  }
];

let indicePergunta = 0;
let acertos = 0;

const perguntaEl = document.querySelector('.caixa-perguntas');
const alternativasEl = document.querySelector('.caixa-alternativas');
const resultadoEl = document.querySelector('.caixa-resultado');
const textoResultadoEl = document.querySelector('.texto-resultado');

function carregarPergunta() {
  const perguntaAtual = perguntas[indicePergunta];
  perguntaEl.textContent = perguntaAtual.pergunta;
  alternativasEl.innerHTML = "";

  perguntaAtual.alternativas.forEach((alternativa, index) => {
      const botao = document.createElement("button");
      botao.textContent = alternativa;
      botao.addEventListener("click", () => verificarResposta(index));
      alternativasEl.appendChild(botao);
  });
}

function verificarResposta(resposta) {
  if (resposta === perguntas[indicePergunta].correta) {
      acertos++;
  }
  indicePergunta++;
  if (indicePergunta < perguntas.length) {
      carregarPergunta();
  } else {
      mostrarResultado();
  }
}

function mostrarResultado() {
  perguntaEl.style.display = "none";
  alternativasEl.style.display = "none";
  resultadoEl.style.display = "block";
  textoResultadoEl.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas!`;
}

// Inicializa o quiz ao carregar a página
carregarPergunta();