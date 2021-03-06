const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')


}

const questions = [
   
    {
        question: 'Um sistema de informa????o ?? desenvolvido como resposta um problema, ou conjunto de problemas, que uma organiza????o enfrenta. O processo de resolu????o de problemas relativo ao desenvolvimento de sistemas envolve quatro etapas, organize em ordem sequencial de acontecimentos as etapas. \n1 - Implementar a solu????o.\n2 - Escolher a melhor solu????o.\n3 - Definir e compreender o problema\n4 - Desenvolver a????es alternativas.',

        answers: [
            { text: 'A	2,1,4,3.', correct: false },
            { text: 'B	4,3,1,2.', correct: false },
            { text: 'C	4,3,2,1.', correct: false },
            { text: 'D	3,4,2,1.', correct: true },
            { text: 'E  3,4,1,2.', correct: false}
        ]

    },
    {
        question: 'Dados s??o definidos como registros de algo que foi observado e medido, podem ser representados de modo num??rico, textual ou visual. Considerando a relev??ncia dos dados em sistemas de informa????o ?? INCORRETO afirmar:',
        answers: [
            { text: 'A Dados s??o sequ??ncias de ocorr??ncias ainda n??o analisadas.', correct: false },
            { text: 'B Dados s??o os registros brutos n??o interpretados.', correct: false },
            { text: 'C Dados podem ser representativos de eventos que ocorrem nas organiza????es ou no ambiente f??sico.', correct: false },
            { text: 'D Dados s??o obtidos em grande volume e possuem um significado espec??fico.', correct: true },
            { text: 'E Dados sequ??ncias de fatos ainda n??o analisados.', correct: false }
        ]

    },
    {
        question: 'Relacione o Sistema de Informa????o de acordo com seu n??vel:\nSPT\nSIG`s\nSAD`S\nSAE`S\n\n(  ) Ger??ncia S??nior\n(  ) N??vel Operacional\n(  ) Alta Gest??o\n(  ) Ger??ncia Intermedi??ria',
        answers: [
            { text: 'A	1,3,2,4', correct: false },
            { text: 'B	2,4,3,1', correct: false },
            { text: 'C	3,1,2,4', correct: false },
            { text: 'D	2,1,4,3', correct: false },
            { text: 'E	3,1,4,2', correct: true }
        ]

    },
    {
        question: 'A Teoria Geral dos Sistemas (TGS) tem base nos trabalhos e pesquisas do bi??logo Ludwig von Bertalanffy, com o objetivo de transcender aos problemas tecnol??gicos de cada uma delas e dispor de princ??pios gerais, bem como de modelos, tamb??m gerais, de tal forma que todas as ci??ncias pudessem interligar as descobertas de todas de forma ampla e total.Selecione a alternativa que apresenta dois conceitos sist??micos importantes ressaltados pela defini????o de sistema Bertalanffy:',
        answers: [
            { text: 'A	Entradas e sa??das;', correct: false },
            { text: 'B	Conjuntos e partes;', correct: false },
            { text: 'C	Aberto e fechado;', correct: false },
            { text: 'D  Prop??sito e globalismo;', correct: true },
            { text: 'E  Rec??proca e intera????o;', correct: false}
        ]

    },
    {
        question: 'O Sistema de Processamento de Transa????es - SPT, tamb??m conhecido como sistema transacional ou operacional, normalmente comp??em a principal base de dados da empresa e tem como principais componentes:',
        answers: [
            { text: 'A  Entrada, processamento e sa??da de relat??rios.', correct: false },
            { text: 'B  Entrada de dados, o processamento, o armazenamento e a gera????o de documentos e relat??rios.', correct: true },
            { text: 'C  Entrada, informa????o, armazenamento.', correct: false },
            { text: 'D  Entrada de dados, armazenamento e sa??da.', correct: false },
            { text: 'E  Entrada de informa????es, o processamento, o armazenamento e a gera????o de documentos e relat??rios.', correct: false }
        ]

    },
    {
        question: 'Em rela????o ?? utiliza????o das informa????es, analisando o contexto do n??vel estrat??gico que ?? o mais alto n??vel nas organiza????es, ?? correto afirmar:',
        answers: [
            { text: 'A As informa????es s??o utilizadas em situa????es do dia a dia, consideradas previs??veis e com efeito imediato.', correct: false },
            { text: 'B As informa????es s??o tratadas de maneira detalhada e anal??tica. ', correct: false },
            { text: 'C  As informa????es s??o combinadas a partir de fontes diversificadas e produzidos efeitos mais amplos.', correct: false },
            { text: 'D As informa????es retratam situa????es complexas e incertas, que envolvem a elabora????o de cen??rios, tend??ncias, previs??es e an??lises especializadas. ', correct: true },
            { text: 'E As informa????es que n??o causam impactos nos rumos da organiza????o. ', correct: false }
        ]

    },

    {
        question: 'Um sistema de informa????o n??o ?? composto somente de computadores e softwares espec??ficos ?? necess??ria uma combina????o de tr??s componentes, tamb??m referenciados por dimens??es. Selecione a alternativa que apresenta estas tr??s dimens??es:',
        answers: [
            { text: 'A Humanos, organizacionais e tecnol??gicos.', correct: true },
            { text: 'B Hardware, software e redes de computadores.', correct: false },
            { text: 'C Humano, hardware e software.', correct: false },
            { text: 'D Hardware, software e banco de dados.', correct: false },
            { text: 'E Humano, hardware e redes de computadores.', correct: false }
        ]

    },
    {
        question: 'Os sistemas de informa????o s??o classificados conforme a abrang??ncia, que se refere ?? sua capacidade de atender a diferentes ??reas funcionais de uma organiza????o. Assinale a alternativa que apresenta corretamente as tr??s categorias de abrang??ncia:',
        answers: [
            { text: 'A Sistemas Transacionais, Sistemas Departamentais, Sistema T??tico.', correct: false },
            { text: 'B Sistemas Departamentais, Sistemas Integrados e Sistemas Interorganizacionais.', correct: true },
            { text: 'C Sistemas Financeiros, Sistemas de Marketing e Sistemas Industriais.', correct: false },
            { text: 'D Sistemas Departamentais, Sistemas Industriais e Sistemas ERP.', correct: false },
            { text: 'E Sistemas Integrados, Sistemas Comerciais e Sistemas Inteorganizacionais.', correct: false }
        ]

    },
    {
        question: 'Os sistemas estrat??gicos s??o utilizados, na maioria das vezes, por gerentes do n??vel t??tico ou estrat??gico e se caracterizam por prestar suporte ?? decis??o por meio de simula????es ou an??lise de situa????es. Em rela????o aos sistemas estrat??gicos ?? correto afirmar:',
        answers: [
            { text: 'A O sistema estrat??gico normalmente comp??e a principal base de dados da empresa.', correct: false },
            { text: 'B Designa uma categoria espec??fica de sistemas de informa????o que atende aos gerentes de n??vel m??dio.', correct: false },
            { text: 'C Os dados das opera????es s??o introduzidos no sistema por meio do m??dulo do SPT.', correct: false },
            { text: 'D Tem como principais componentes a entrada de dados, o processamento, o armazenamento e a gera????o de documentos e relat??rios.', correct: false },
            { text: 'E Os sistemas estrat??gicos se dividem em duas categorias: sistemas de apoio ?? decis??o SADs; sistemas de Apoio aos executivos SAEs.', correct: true }
        ]

    },
    {
        question: 'Com rela????o aos servi??os prestados dentro de TI, ?? INCORRETO que:',
        answers: [
            { text: 'A As empresas precisam de pessoas para operar e gerenciar os componentes da infraestrutura de TI.', correct: false },
            { text: 'B Quando as empresas precisam fazer altera????es profundas em seus sistemas, em geral recorrem a consultores externos.', correct: false },
            { text: 'C Hoje muitas empresas completam as atividades da equipe interna de sistemas de informa????o com consultoria externa de tecnologia.', correct: false },
            { text: 'D Quando as empresas v??o implantar uma infraestrutura de TI completamente nova, em geral n??o recorrem a consultores externos.', correct: true },
            { text: 'E E As empresas precisam de pessoas para ensinar os funcion??rios a usar tecnologias em suas atividades di??rias.', correct: false }
        ]

    },
    {
        question: 'Os dados quando processados geram informa????o, a informa????o pode ser entendida como dados moldados de uma forma significativa e ??til para as pessoas. Neste sentido, assinale a alternativa correta:',
        answers: [
            { text: 'A Informa????o quer dizer dados que foram modelados em um formato significativo e in??til para os seres humanos', correct: false },
            { text: 'B As informa????es podem ser divididas em dois grandes grupos: quantitativa e explicativa.', correct: false },
            { text: 'C As informa????es podem ser representadas apenas de forma descritiva.', correct: false },
            { text: 'D As informa????es quantitativas s??o aquelas que n??o podem ser mensuradas', correct: false },
            { text: 'E As informa????es podem ser quantitativas e qualitativas.', correct: true }
        ]

    },
    {
        question: 'Os sistemas de informa????o s??o classificados conforme a abrang??ncia, que se refere ?? sua capacidade de atender a diferentes ??reas funcionais de uma organiza????o. Assinale a alternativa que apresenta corretamente as tr??s categorias de abrang??ncia:',
        answers: [
            { text: 'A Sistemas Transacionais, Sistemas Departamentais, Sistema T??tico.', correct: false },
            { text: 'B Sistemas Departamentais, Sistemas Integrados e Sistemas Interorganizacionais.', correct: true },
            { text: 'C Sistemas Financeiros, Sistemas de Marketing e Sistemas Industriais.', correct: false },
            { text: 'D Sistemas Departamentais, Sistemas Industriais e Sistemas ERP.', correct: false },
            { text: 'E Sistemas Integrados, Sistemas Comerciais e Sistemas Inteorganizacionais.', correct: false }
        ]

    },
    {
        question: 'Com rela????o aos servi??os prestados dentro de TI, ?? INCORRETO que:',
        answers: [
            { text: 'A As empresas precisam de pessoas para operar e gerenciar os componentes da infraestrutura de TI.', correct: false },
            { text: 'B Quando as empresas precisam fazer altera????es profundas em seus sistemas, em geral recorrem a consultores externos.', correct: false },
            { text: 'C Hoje muitas empresas completam as atividades da equipe interna de sistemas de informa????o com consultoria externa de tecnologia.', correct: false },
            { text: 'D Quando as empresas v??o implantar uma infraestrutura de TI completamente nova, em geral n??o recorrem a consultores externos.', correct: true },
            { text: 'E As empresas precisam de pessoas para ensinar os funcion??rios a usar tecnologias em suas atividades di??rias.', correct: false }
        ]

    },
     {
        question: 'Em rela????o ?? utiliza????o das informa????es, analisando o contexto do n??vel estrat??gico que ?? o mais alto n??vel nas organiza????es, ?? correto afirmar:',
        answers: [
            { text: 'A As informa????es s??o utilizadas em situa????es do dia a dia, consideradas previs??veis e com efeito imediato.', correct: false },
            { text: 'B As informa????es s??o tratadas de maneira detalhada e anal??tica.', correct: false },
            { text: 'C As informa????es s??o combinadas a partir de fontes diversificadas e produzidos efeitos mais amplos.', correct: false },
            { text: 'D As informa????es retratam situa????es complexas e incertas, que envolvem a elabora????o de cen??rios, tend??ncias, previs??es e an??lises especializadas.', correct: true },
            { text: 'E As informa????es que n??o causam impactos nos rumos da organiza????o.', correct: false }
        ]

    },
    {
        question: 'A Teoria Geral dos Sistemas (TGS) tem base nos trabalhos e pesquisas do bi??logo Ludwig von Bertalanffy, com o objetivo de transcender aos problemas tecnol??gicos de cada uma delas e dispor de princ??pios gerais, bem como de modelos, tamb??m gerais, de tal forma que todas as ci??ncias pudessem interligar as descobertas de todas de forma ampla e total.\n\nSelecione a alternativa que apresenta dois conceitos sist??micos importantes ressaltados pela defini????o de sistema Bertalanffy:',
        answers: [
            { text: 'A Entradas e sa??das;', correct: false },
            { text: 'B Conjuntos e partes;', correct: false },
            { text: 'C Aberto e fechado;', correct: false },
            { text: 'D Prop??sito e globalismo', correct: true },
            { text: 'E Rec??proca e intera????o', correct: false }
        ]

    },
    {
        question: 'Relacione o Sistema de Informa????o de acordo com seu n??vel:\n\n1 - SPT\n\n2 - SIG???s\n\n3 - SAD???S\n\n4 - SAE???S\n\n(  ) Ger??ncia S??nior\n\n(  ) N??vel Operacional\n\n(  ) Alta Gest??o \n\n(  ) Ger??ncia Intermedi??ria\n\n\nSelecione a alternativa que apresenta a ordem correta das rela????es.',
        answers: [
            { text: 'A 1,3,2,4', correct: false },
            { text: 'B 2,4,3,1', correct: false },
            { text: 'C 3,1,2,4', correct: false },
            { text: 'D 2,1,4,3', correct: false },
            { text: 'E 3,1,4,2', correct: true }
        ]

    },
    {
        question: 'A Tecnologia da Informa????o criou diferenciais competitivos importantes para as empresas. A utiliza????o de aplicativos mobile tornou poss??vel a expans??o das atividades de neg??cio das organiza????es, principalmente pela automatiza????o de processos de neg??cio. A esse respeito, considere as assertivas a seguir.\n\nI - Excel??ncia na seguran??a\n\nII - Aux??lio do processo de tomada de decis??es\n\nIII - Vantagem Competitiva\n\nIV - Sobreviv??ncia da organiza????o\n\n\n\nNo que diz respeito ?? utiliza????o dos aplicativos mobile nas organizacionais, est??o corretas as assertivas.',
        answers: [
            { text: 'A I e II.', correct: false },
            { text: 'B I, II e III.', correct: false },
            { text: 'C II, III e IV.', correct: true },
            { text: 'D I, II, III e IV.', correct: false },
            { text: 'E Apenas II e III.', correct: false }
        ]

    },
    {
        question: 'De acordo com Belmiro (2014), para que exista um bom sistema de controle relativo aos sistemas de informa????o, tamb??m s??o necess??rias auditorias abrangentes e sistem??ticas. Sobre a auditoria de sistemas assinale a alternativa INCORRETA.',
        answers: [
            { text: 'A ?? um sistema que avalia apenas o impacto financeiro de cada amea??a dos sistemas de informa????o', correct: false },
            { text: 'B ?? um sistema que identifica todos os controles que governam sistemas individuais de informa????o e avalia sua efetividade.', correct: false },
            { text: 'C As auditorias de seguran??a devem n??o fazem uso de tecnologias, somente de procedimentos, documenta????o, treinamento e recursos humanos.', correct: false },
            { text: 'D As auditorias nos sistemas de informa????o apenas listam e classificam os pontos fracos do controle e indicam os erros que  v??o ocorrer nesses pontos.', correct: false },
            { text: 'E ?? um sistema que identifica todos os controles que governam sistemas individuais de informa????o, entretanto n??o avalia sua efetividade..', correct: true }
        ]

    },
    {
        question: 'A introdu????o das tecnologias de informa????o gera um efeito de ondas conc??ntricas que suscitam quest??es ??ticas, sociais e pol??ticas as quais precisam ser tratadas nos n??veis individual, social e pol??tico. Neste sentido, assinale as alternativas erradas sobre as quest??es ??ticas, sociais e pol??ticas.\n\nI - dos indiv??duos de n??o serem incomodados, de ficarem livres da vigil??ncia da interfer??ncia de outros indiv??duos ou organiza????es, inclusive do Estado.\nII - O direito ?? privacidade ?? protegido pelas constitui????es dos pa??ses e s??o escritas de maneiras diferentes por meio de v??rios estatutos legais.\nIII - A utiliza????o da internet expandiu as possibilidades de cometer crimes, e para esses crimes n??o existem leis espec??ficas.\nIV- As institui????es pol??ticas precisam de tempo para criar novas leis e muitas vezes s?? agem mediante a evid??ncia de danos reais.\nAssinale a alternativa correspondente:\n\n',
        answers: [
            { text: 'A I e II', correct: false },
            { text: 'B III e IV', correct: false },
            { text: 'C I e III', correct: false },
            { text: 'D Apenas a III', correct: true },
            { text: 'E Apenas a IV', correct: false }
        ]

    },
    {
        question: 'Para coordenar e controlar as quatro fun????es principais de qualquer organiza????o ?? necess??rio contratar um gerente cuja responsabilidade ?? assegurar que todas as partes trabalham em conjunto, geralmente as organiza????es empresariais s??o hierarquias compostas por tr??s n??veis principais, s??o eles:',
        answers: [
            { text: 'A Ger??ncia de recursos humanos e ger??ncia s??nior.', correct: false },
            { text: 'B Ger??ncia operacional e ger??ncia financeira.', correct: false },
            { text: 'C Ger??ncia operacional, ger??ncia m??dia e ger??ncia s??nior.', correct: true },
            { text: 'D Ger??ncia transacional e ger??ncia m??dia.', correct: false },
            { text: 'E Ger??ncia de recursos humanos, ger??ncia financeira e ger??ncia de marketing.', correct: false }
        ]

    },

    {
        question: 'Os sistemas de gest??o de cadeia de suprimentos, SCM  s??o definidos como a gest??o total das fun????es presentes em um processo log??stico e seus processos s??o representados por:',
        answers: [
            { text: 'A Fluxo de informa????o, Fluxo de materiais e Fluxo de dinheiro.', correct: true },
            { text: 'B Fluxo de compra, Fluxo de materiais e Fluxo de dinheiro.', correct: false },
            { text: 'C Fluxo de informa????o, Fluxo de log??stica e Fluxo de materiais.', correct: false },
            { text: 'D Fluxo de compra, Fluxo de log??stica e Fluxo de dinheiro.', correct: false },
            { text: 'E Fluxo da informa????o, Fluxo de materiais e Fluxo de compra.', correct: false }
        ]

    },
    {
        question: 'Existem atributos fundamentais para um bom plano que contenha a pol??tica de seguran??a da informa????o, assinale a alternativa incorreta em rela????o aos atributos norteadores.',
        answers: [
            { text: 'A Estar alinhado com as estrat??gias da organiza????o.', correct: false },
            { text: 'B Ser monitorado constantemente e revisado periodicamente.', correct: false },
            { text: 'C Buscar principalmente enfoque t??cnico e menos enfoque no aspecto comportamental.', correct: true },
            { text: 'D Ser amplamente divulgado para todos os membros da organiza????o.', correct: false },
            { text: 'E Estar sintonizado com as pessoas que se envolvem no contexto computacional da organiza????o.', correct: false }
        ]

    },
    {
        question: 'Muitas pesquisas e aquisi????es fazem parte do que ?? conceituado como com??rcio eletr??nico. Exceto:',
        answers: [
            { text: 'A Compra de ingressos para um show pelo aplicativo.', correct: false },
            { text: 'B Pesquisa de livros a partir da internet.', correct: false },
            { text: 'C Troca de mercadorias utilizando as redes sociais.', correct: false },
            { text: 'D Comprar um celular na loja f??sica.', correct: true },
            { text: 'E Utilizar um site de compara????o de pre??os.', correct: false }
        ]

    },
    {
        question: 'Os principais problemas e amea??as em rela????o ?? seguran??a l??gica est??o ligados ?? possibilidade de acesso indevido, aos erros sejam eles intencionais ou n??o, a perda de dados, falhas ou a????es e programas clandestinos na rede, viola????es dos sistemas que ocasionem desvio das informa????es, fraudes e sabotagens. S??o relacionadas medidas de prote????es para a quest??o da seguran??a l??gica adequada, as quais ??reas:',
        answers: [
            { text: 'A Seguran??a de redes, Seguran??a do hardware e Seguran??a do sistema.', correct: false },
            { text: 'B Seguran??a do software, Seguran??a das redes e Seguran??a do hardware.', correct: false },
            { text: 'C Seguran??a de redes e Seguran??a dos sistemas.', correct: false },
            { text: 'D Seguran??a de hardware, Seguran??a do sistema e Seguran??a do usu??rio.', correct: false },
            { text: 'E Seguran??a de redes, Seguran??a dos sistemas e Seguran??a do usu??rio.', correct: true }
        ]

    },
    {
        question: 'A abrang??ncia de um sistema SCM deve suportar as atividades indicadas na cadeia de suprimentos. S??o citados tr??s tipos de cadeia de suprimento, relacione-os de acordo com sua especificidade:\n\n(1) Upstream\n\n(2) Interna\n\n(3) Downstream\n\n(  ) Envolve todos os processos relacionados ?? entrega do produto ao consumidor fina.\n\n(  ) Envolve desde a chegada da mat??ria-prima at?? a distribui????o do produto acabado.\n\n(  ) Abrange fornecedores de primeiro e segundo n??vel.\n\nAssinale a alternativa correta:',
        answers: [
            { text: 'A 1,2,3', correct: false },
            { text: 'B 3,2,1', correct: true },
            { text: 'C 3,1,2', correct: false },
            { text: 'D 1,3,2', correct: false },
            { text: 'E 2,3,1', correct: false }
        ]

    },

    {
        question: 'A elabora????o de pol??ticas de seguran??a da informa????o deve ser realizada de modo hol??stico, que possibilite abranger a miss??o, a vis??o, as diretrizes organizacionais, as estrat??gias do neg??cio, os planos de a????o e as respectivas metas institucionais. Para que isso ocorra ?? elabora????o deve abranger alguns aspectos. Assinale a alternativa correta sobre os aspectos humanos e da seguran??a.',
        answers: [
            { text: 'A Est??o relacionados ?? abrang??ncia e escopo de atua????o da pol??tica, como a identifica????o dos recursos cr??ticos.', correct: false },
            { text: 'B Est??o relacionados ?? pol??tica adotada pela organiza????o no que se refere aos processos de admiss??o, contrata????o e demiss??o.', correct: true },
            { text: 'C Est??o relacionados aos meios que ser??o utilizados na divulga????o do plano e a periodicidade da revis??o.', correct: false },
            { text: 'D Est??o relacionados ?? prote????o dos recursos e instala????es.', correct: false },
            { text: 'E Est??o relacionados ?? divulga????o dos dados e as informa????es durante os processos de comunica????o.', correct: false }
        ]

    },
    {
        question: 'A an??lise de riscos ?? caracterizada pela necessidade de gerar ou revisar o plano de seguran??a da organiza????o, e que qualquer plano de seguran??a deve atender as preocupa????es b??sicas com as medidas necess??rias para evitar, impedir ou minimizar as ocorr??ncias. Relacione as preocupa????es b??sicas de acordo com suas fun????es. \n\n(1) Evitar a ocorr??ncia da amea??a\n\n(2) Identificar ou combater as amea??as\n\n(3) Minimizar o dano, recompondo a fun????o original\n\n(  ) Medidas de seguran??a\n\n(  ) Plano de Seguran??a\n\n(  ) Plano de conting??ncia\n\nA sequ??ncia correta ??:',
        answers: [
            { text: 'A 1,2,3', correct: false },
            { text: 'B 1,3,2', correct: false },
            { text: 'C 	3,2,1', correct: false },
            { text: 'D 2,1,3', correct: true },
            { text: 'E 2,3,1', correct: false }
        ]

    },
    {
        question: 'Qualquer empresa independente do seu tamanho tem por objetivo oferecer um produto ou servi??o e para isso ?? necess??rio desempenhar quatro fun????es. Assinale as quatro fun????es b??sicas de uma empresa:',
        answers: [
            { text: 'A Manufatura e Produ????o, Vendas e Marketing, Recursos Humanos e Finan??as e Contabilidade.', correct: true },
            { text: 'B Executar Fun????es, Realizar Tarefas, Vendas e Marketing, Finan??as e Contabilidade.', correct: false },
            { text: 'C Coordena????o, Controle, Vendas, Finan??as.', correct: false },
            { text: 'D Manufatura, Compras, Finan??as e Recursos Humanos.', correct: false },
            { text: 'E Realizar servi??os, Criar produtos, Vendas e Recursos Humanos.', correct: false }
        ]

    },

    {
        question: 'Nos itens abaixo s??o apresentadas poss??veis dificuldades relacionadas a Sistemas Integrados de Gest??o (ERP - Enterprise Resource Planning):\n\nI  ??? Problemas relativos ?? integra????o das atividades e processos de neg??cios;\n\nII  ??? Nem todas customiza????es para necessidades espec??ficas da organiza????o podem ser aplicadas.\n\nIII ??? Algumas regras determinadas pelo sistema n??o podem ser alteradas;\n\nIV  ??? N??o promove a informa????o de forma simplificada;\n\nS??o dificuldades relativas ?? ERP:',
        answers: [
            { text: 'A I e III, apenas', correct: false },
            { text: 'B Apenas III', correct: false },
            { text: 'C I, III e IV', correct: false },
            { text: 'D II e III, apenas', correct: true },
            { text: 'E I, II, III e IV', correct: false }
        ]

    },
    {
        question: 'O termo e-business corresponde a uma defini????o mais ampla do que ?? considerado com??rcio eletr??nico. Assinale V (verdadeiro) e F (falso):\n\n(   ) Possibilita a presta????o de servi??os a clientes.\n\n(   ) Ocorre apenas a compra e venda de produtos pela internet.\n\n(   ) Possibilita o coopera????o com parceiros comerciais.\n\n(   ) Ocorre a realiza????o de neg??cios eletr??nicos em uma organiza????o.\n\nQual alternativa correspondente:',
        answers: [
            { text: 'A V, V, V e V', correct: false },
            { text: 'B V, F, F e V', correct: false },
            { text: 'C V, F, V e V', correct: true },
            { text: 'D V, V, F e F', correct: false },
            { text: 'E F, F, F e F', correct: false }
        ]

    },
    {
        question: '',
        answers: [
            { text: 'A', correct: false },
            { text: 'B', correct: false },
            { text: 'C', correct: false },
            { text: 'D', correct: false },
            { text: 'E', correct: false }
        ]

    },
    {
        question: '',
        answers: [
            { text: 'A', correct: false },
            { text: 'B', correct: false },
            { text: 'C', correct: false },
            { text: 'D', correct: false },
            { text: 'E', correct: false }
        ]

    },{
        question: '',
        answers: [
            { text: 'A', correct: false },
            { text: 'B', correct: false },
            { text: 'C', correct: false },
            { text: 'D', correct: false },
            { text: 'E', correct: false }
        ]

    },

    
   /* {
        question: '',
        answers: [
            { text: 'A', correct: false },
            { text: 'B', correct: false },
            { text: 'C', correct: false },
            { text: 'D', correct: false },
            { text: 'E', correct: false }
        ]

    },*/


];
const random = Math.floor(Math.random() * questions.length);
console.log(random, questions[random]);