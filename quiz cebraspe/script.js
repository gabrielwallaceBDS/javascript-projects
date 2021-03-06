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
    {/*41 ERRADO*/ 
        question: 'No ciclo da vida incremental, o escopo do projeto ?? geralmente determinado no inicio, mas as estimativas de custo e de tempo sao rotineiramente modificadas s pela equipe ?? medida que o entendimento do produto final do projeto aumenta',
        answers: [
            { text: 'Certo', correct: false },
            { text: 'Errado', correct: true },
          
        ]

    },
    {/*42 CERTO*/ 
        question: 'O registro de li????es aprendidas ?? uma sa??da do processo gerenciamento do conhecimento do projeto e pode incluir recomenda????es e a????es propostas para cada situa????o registrada.',
        answers: [
            { text: 'Certo', correct: true },
            { text: 'Errado', correct: false }
           
        ]

    },
    {/*43 ERRADO*/ 
        question: 'O controle de acesso ?? informa????o tem por objetivo garantir que os acessos f??sicos e l??gicos aos recursos para manuseio da informa????o sejam franqueados a pessoas autorizadas, com base em sua posi????o funcional hier??rquica na organiza????o.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
            
           
        ]

    },
    {/*44 CERTO*/ 
        question: 'De acordo com a norma ISO 27002, ?? conveniente que, na pol??tica de seguran??a da informa????o, seja inclu??da atribui????o de responsabilidades, gerais e espec??ficas, para o gerenciamento da seguran??a da informa????o.',
        answers: [
            { text: 'Certo', correct: true },
            { text: 'Errado', correct: false }
           
        ]

    },
    {/*45 ERRADO*/ 
        question: 'De acordo com a norma ISO 27001, a classifica????o da informa????o tem por objetivo oferecer ?? informa????o o mais alto n??vel de prote????o dispon??vel, considerando o seu valor, a fonte da informa????o e o p??blico-alvo.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
            
           
        ]

    },
    {/*46 CERTO*/ 
        question: '6 A an??lise de vulnerabilidades considera potenciais vulnerabilidades ocasionadas por falhas humanas e por erros de configura????o.',
        answers: [
            { text: 'Certo', correct: true },
            { text: 'Errado', correct: false }
           
        ]

    },
    {/*47 ERRADO*/ 
        question: 'Como medida necess??ria para viabilizar a opera????o alternativa dos neg??cios da organiza????o em caso de indisponibilidade dos recursos originais, o plano de continuidade de neg??cios estabelece que esses recursos sejam sistematicamente mantidos em duplicidade.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
            
           
        ]

    },
    {/*48 CERTO*/ 
        question: 'No ??mbito do tratamento de incidentes, um CSIRT (computer security incident response team) tem o papel de atuar na preven????o contra eventos de incidentes futuros',
        answers: [
            { text: 'Certo', correct: true },
            { text: 'Errado', correct: false }
           
        ]

    },
    {/*49 ERRADO*/ 
        question: 'Uma auditoria no plano de continuidade de neg??cios de uma organiza????o precisa verificar se o plano ?? exequ??vel e se o pessoal est?? treinado para execut??-lo.',
        answers: [
            { text: 'Errado', correct: false  },
            { text: 'Certo', correct: true }
            
           
        ]

    },
    {/*50 CERTO*/ 
        question: 'Uma das recomenda????es do ITIL ?? que as organiza????es ajustem seu contexto ??s boas pr??ticas ITIL, adotando-as, de modo a viabilizar transparentemente a estrutura de gerenciamento de servi??os padronizada.',
        answers: [
            { text: 'Certo', correct: false },
            { text: 'Errado', correct: true }
           
        ]

    },
    {/*51 */ 
        question: 'De acordo com o COBIT 5, servi??os, aplica????es e infraestrutura s??o os instrumentos pelos quais as decis??es de governan??a s??o institucionalizadas dentro da empresa e promovem a intera????o entre as decis??es de governan??a e o gerenciamento',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
            
           
        ]

    },
    {/*52 CERTO*/ 
        question: 'De acordo com a Resolu????o CGPAR n.o 11/2016, as entidades respons??veis por verificar a observ??ncia dos termos da pr??pria resolu????o pelas empresas estatais federais s??o as ??reas de auditoria interna de cada uma delas e os ??rg??os de controle efiscaliza????o da administra????o federal.',
        answers: [
            { text: 'Errado', correct: false },
            { text: 'Certo', correct: true }
                
               
        ]
    
    },
    {/*53 ERRADO*/ 
        question: 'Do ponto de vista do cliente, o CRM (customer relationship management) precisa oferecer customiza????o, simplicidade e conveni??ncia para a realiza????o de transa????es com a organiza????o, independentemente do canal escolhido para a intera????o',
        answers: [
        { text: 'Certo', correct: false },
        { text: 'Errado', correct: true }
               
        ]
    
    },
      {/*54 ERRADO*/ 
        question: 'Requisitos externos s??o derivados de metas, pol??ticas e procedimentos das organiza????es, do cliente e do desenvolvedor e incluem requisitos de processo, requisitos de implementa????o, restri????es de entrega e restri????es or??ament??rias.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
                
               
        ]
    
    },
    {/*55 CERTO*/ 
        question: 'Na especifica????o de requisitos, s??o estabelecidos uma escala de medi????o e os valores aceit??veis para cada requisito de, tornando-o mensur??vel, ou seja, adicionando a ele um crit??rio de aceita????o.',
        answers: [
        { text: 'Certo', correct: true },
        { text: 'Errado', correct: false }
               
        ]
    
    },
      {/*56 ERRADO*/ 
        question: 'Prot??tipo consiste de um cen??rio de di??logo entre o usu??rio final e o sistema, sendo montado para que o usu??rio simule sua intera????o com o sistema e indique ao analista de que informa????es ele efetivamente necessita para realizar a tarefa projetada no prot??tipo',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
                
               
        ]
    
    },
    {/*57 CERTO*/ 
        question: 'O modelo de ciclo de vida em cascata tem como caracter??sticas o estabelecimento, no in??cio do projeto, de requisitos de maneira completa, correta e clara, e a possibilidade de disponibiliza????o de v??rias vers??es operacionais do software antes da conclus??o do projeto.',
        answers: [
        { text: 'Certo', correct:  true },
        { text: 'Errado', correct: false }
               
        ]
    
    },
      {/*58 ERRADO*/ 
        question: 'Nas metodologias de desenvolvimento ??geis, mudan??as em requisitos s??o bem recebidas, mesmo em fases mais avan??adas do desenvolvimento. ',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
                
               
        ]
    
    },
    {/*59 CERTO*/ 
        question: 'Na dimens??o controle da an??lise essencial de sistemas, s??o considerados os aspectos temporais e comportamentais do sistema em sua modelagem.',
        answers: [
        { text: 'Certo', correct: true },
        { text: 'Errado', correct: false }
               
        ]
    
    },
      {/*60 ERRADO*/ 
        question: 'Normalmente, as t??cnicas de decomposi????o usadas para estimativas de software baseiam-se na aplica????o de f??rmulas matem??ticas derivadas em experimentos para prever esfor??o como uma fun????o do tamanho do software.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
                
               
        ]
    
    },
    {/*61 CERTO*/ 
        question: 'Na an??lise de pontos de fun????o, as fun????es transacionais representam as funcionalidades efetivamente fornecidas para o usu??rio e s??o categorizadas em entradas externas, sa??das externas e consultas externas.',
        answers: [
        { text: 'Certo', correct: true },
        { text: 'Errado', correct: false }
               
        ]
    
    },
      {/*62 ERRADP*/ 
        question: 'Confiabilidade, usabilidade e portabilidade s??o atributos de qualidade de software do modelo para qualidade em uso Acerca de programa????o orientada a objetos, Java e PHP, julgue os itens a seguir.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
                
               
        ]
    
    },
    {/*63 ERRADO*/ 
        question: ' Por meio do mecanismo de sobrecarga, dois m??todos de uma mesma classe podem ter o mesmo nome, desde que suas listas de par??metros sejam diferentes',
        answers: [
        { text: 'Certo', correct: false },
        { text: 'Errado', correct: true }
               
        ]
    
    },
      {/*64 ERRADO*/ 
        question: 'Na heran??a por especifica????o, a subclasse especifica a superclasse, acrescentando a ela novos atributos ou m??todos, mas mantendo inalterada sua constitui????o original.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
                
               
        ]
    
    },
    {/*65 CERTO*/ 
        question: 'O suporte para a implementa????o de diversas interfaces em uma ??nica classe ?? considerado uma solu????o alternativa para contornar a restri????o de heran??a ??nica pr??pria da linguagem Java.',
        answers: [
        { text: 'Certo', correct: true },
        { text: 'Errado', correct: false }
               
        ]
    
    },

     
    
                        
    
            
    

  
];
/*const random = Math.floor(Math.random() * questions.length);
console.log(random, questions[random]);*/