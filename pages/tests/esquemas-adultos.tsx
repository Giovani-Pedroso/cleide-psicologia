
/*
import Header from '../../components/HeaderTest'
import { useState } from 'react'

const questions = [
"Eu não tenho ninguém que cuide de mim, que compartilhe comigo a sua vida ou que se preocupe realmente com tudo o que acontece comigo.",
"Costumo me apegar muito às pessoas que são mais próximas de mim porque tenho medo que elas me abandonem.",
"Sinto que as pessoas irão aproveitar-se de mim.",
"Sou um (a) desajustado (a).",
"Nenhum homem/mulher de quem eu goste pode gostar de mim depois de conhecer os meus defeitos ou fraquezas.",
"Quase nada do que faço no trabalho (ou na escola) é tão bom como aquilo que os outros são capazes de fazer.",
"Não me sinto capaz de me arranjar sozinho (a) no dia-a-dia.",
"Não consigo deixar de sentir que alguma coisa de ruim está para acontecer.",
"Não tenho sido capaz de me separar dos meus pais, assim como fazem as outras pessoas da minha idade.",
"Sinto que, se fizer o que quero, só vou acabar tendo problemas.",
"Sou sempre eu que acabo cuidando das pessoas que são mais próximas a mim.",
"Sou muito controlado (a) para revelar os meus sentimentos positivos aos outros (por ex., afeto, mostrar que me preocupo).",
"Tenho que ser o (a) melhor em quase tudo o que faço; não aceito ficar em segundo lugar.",
'Tenho muita dificuldade em aceitar um "não" como resposta quando quero alguma coisa dos outros.',
"Não consigo me disciplinar o suficiente para cumprir tarefas rotineiras ou chatas.",
"Ter dinheiro e conhecer pessoas importantes faz eu me sentir uma pessoa com valor.",
"Mesmo quando as coisas parecem estar correndo bem, sinto que isso é apenas temporário.",
"Se cometer um erro, mereço ser punido.",
"Não tenho pessoas que me dêem carinho, apoio e afeto.",
"Preciso tanto dos outros que me preocupo com o fato de poder perdê-los.",
"Sinto que tenho sempre que me defender na presença dos outros, senão eles irão machucar-me intencionalmente.",
"Sou fundamentalmente diferente das outras pessoas.",
"Ninguém que eu deseje gostaria de ficar comigo depois de conhecer-me como sou real",
"Sou incompetente quando se trata de atingir objetivos.",
"Sinto-me uma pessoa dependente, no que se refere ao que tenho que fazer no dia-a-dia.",
"Sinto que uma desgraça (natural, criminal, financeira ou médica) pode atingir-me a qualquer momento.",
"Eu e os meus pais temos tendência a nos envolvermos excessivamente na vida e nos problemas uns dos outros.",
"Sinto que não tenho escolha além de ceder à vontade dos outros, caso contrário, eles irão retaliar-me, ficar zangados ou rejeitar-me de alguma maneira.",
"Sou uma boa pessoa porque penso mais nos outros do que em mim.",
"Considero embaraçoso expressar os meus sentimentos aos outros.",
" Esforço-me para fazer o melhor; não posso me contentar em ser ‘bom o suficiente’.",
" Sou especial e não devia ser obrigado(a) a aceitar muitas das restrições ou limitações que são impostas aos outros.",
"Se não consigo atingir um objetivo, fico facilmente frustrado(a) e desisto.",
" Aquilo que consigo alcançar tem mais valor para mim, se for algo que os outros reparem.",
"Se algo de bom acontecer preocupo-me com o fato de que algo ruim venha acontecer a seguir.",
"Se não me esforçar ao máximo, é de se esperar que as coisas corram mal.",
"Tenho sentido que não sou uma pessoa especial para ninguém.",
" Preocupo-me que as pessoas a quem estou ligado (a) me deixem ou me abandonem.",
"Mais cedo ou mais tarde, acabarei sendo traído (a) por alguém.",
"Sinto que não pertenço a nenhum grupo; sou um solitário.",
"Não tenho valor suficiente para merecer o amor, a atenção e o respeito dos outros.",
"A maioria das pessoas tem mais capacidades do que eu no que diz respeito a trabalho e objetivos.",
"Tenho falta de bom senso.",
"Preocupa-me poder ser fisicamente agredido por alguém.",
"É muito difícil para mim e para os meus pais, termos segredos íntimos que não contamos uns aos outros, sem nos sentirmos traídos ou culpados por isso.",
"Nas minhas relações com os outros, geralmente deixo que eles me dominem.",
"Estou tão ocupado (a) em fazer coisas para as pessoas de quem gosto que tenho pouco tempo para mim.",
"Para mim é difícil ser afetuoso e espontâneo (a) com os outros.",
"Tenho que atender à altura todas as minhas responsabilidades e funções.",
" Detesto ser reprimido (a) ou impedido(a) de fazer o que quero.",
"Tenho muita dificuldade em abrir mão de uma recompensa ou prazer imediato, para alcançar um objetivo a longo prazo.",
"Sinto-me pouco importante, a não ser que receba muita atenção dos outros.",
"Todo o cuidado é pouco; quase sempre algo vai dar errado.",
"Se não fizer bem o que me compete, mereço sofrer as consequências.",
"Não tenho tido ninguém que me ouça atentamente, que me compreenda ou que perceba os meus verdadeiros sentimentos e necessidades.",
"Quando sinto que alguém de quem eu gosto está afastando-se de mim, fico desesperado.",
"Sou bastante desconfiado quanto às intenções das outras pessoas.",
"Sinto-me afastado(a) ou desligado dos outros.",
"Sinto que nunca poderei ser amado por alguém.",
"Não sou tão talentoso(a) no trabalho como a maioria das pessoas.",
"Meu julgamento não é confiável para situações do dia-a-dia.",
"Preocupa-me poder perder todo o dinheiro que tenho e ficar muito pobre ou na miséria.",
"Com freqüência sinto que é como se os meus pais vivessem através de mim; não tenho uma vida própria.",
"Sempre deixei que os outros escolhessem por mim, por isso, não sei realmente aquilo que quero para mim.",
" Tenho sido sempre eu quem ouve os problemas dos outros.",
" Controlo-me tanto que as pessoas pensam que não tenho sentimentos ou que sou insensível.",
"Sinto sobre mim uma pressão constante para fazer coisas e atingir objetivos.",
"Sinto que não devia ter que seguir as regras e convenções habituais que as outras pessoas têm que seguir.",
"Não consigo obrigar-me a fazer coisas que não gosto, mesmo quando sei que é para o meu bem.",
"Quando faço uma intervenção numa reunião ou quando sou apresentado a alguém num grupo, é importante para mim, obter reconhecimento e admiração.",
"Por mais que trabalhe, preocupa-me poder ficar na miséria e perder quase tudo o que possuo.",
"Não interessa porque é que cometi um erro; quando faço algo errado, tenho que sofrer as consequências.",
"Não tenho tido uma pessoa forte ou sábia para me dar conselhos ou me dizer o que fazer quando não tenho a certeza de qual atitude tomar.",
"As vezes, a preocupação que tenho com o fato de as pessoas poderem me deixar é tão grande, que acabo por afastá-las.",
"Estou geralmente à procura de segundas intenções ou de motivos ocultos por detrás do comportamento dos outros.",
" Em grupos, sinto-me sempre fora deles.",
" Sou completamente inaceitável para poder mostrar-me tal como sou",
"s pessoas ou para deixar que me conheçam bem.",
"No que diz respeito ao trabalho (ou à escola) não sou tão inteligen e como a maior parte das pessoas.",
"Não tenho confiança nas minhas capacidades para resolver problemas que surjam no dia-a-dia.",
"Preocupo-me em poder desenvolver uma doença séria, ainda que não tenha sido diagnosticado nada de grave por um médico.",
" Com freqüência, sinto que não tenho uma identidade separada da dos meus pais ou companheiro(a).",
"Tenho bastante dificuldade para conseguir que os meus sentimentos sejam levados em consideração e os meus direitos sejam respeitados.",
" As outras pessoas consideram que faço muito pelos outros e não faço o suficiente por mim.",
" As pessoas acham que tenho dificuldade em expressar o que sinto.",
" Não posso descuidar, de forma leviana, das minhas obrigações e nem dar desculpas pelos meus erros.",
" Sinto que o que tenho para oferecer tem mais valor do que aquilo que os outros têm para dar.",
" Raramente tenho sido capaz de levar as minhas decisões até ao fim.",
"Receber muitos elogios dos outros faz com que eu me sinta uma pessoa que têm valor.",
" Preocupa-me que uma decisão errada possa provocar uma   catá",
" Sou uma pessoa má que merece ser punida."
]


import QuestionRange from '../../components/QuestionsRange'
import Modal from '../../components/Model'

const ans = new Array(questions.length)
ans.fill(0)

*/
export default function EscalaAutoestima() {
  /*
  const [isModalVisible, setIsModalVisible] = useState(false)

  const Ans = (index: number, value: number) => {
    ans[index] = value
  }

  const handleResult = () => {

    console.log(ans)
    for (let i = 0; i < ans.length; i++) {
      console.log('i:', i)
      if (ans[i] == 0) {
        alert('Responda todas as perguntas')
        return 0
      }
    }

    setIsModalVisible(true)
    return 0
  }

  const Questions = () => {

    return questions.map((question, index) => {

      return (
        <QuestionRange
          initLevel="Falso"
          key={index}
          id={index}
          finalLevel="Verdadeiro"
          setAns={Ans}
          question={question}
          levels={6} />
      )
    }
    )
  }

  return (
    <div>
      <Header title="Esquemas Adultos "
        instrucoes="Responda as  questoes em uma escala de Completamente falso ,
 me descreve perfeitamente"
      />

      <div className="px-[5%]">
        {Questions()}


        <button className="p-2 mt-6 font-[400] text-white bg-card"
          onClick={() => handleResult()}>
          Finalizar test
        </button>
      </div>
      <Modal visible={isModalVisible}>
        <div className="flex flex-col max-w-[80%]">
          <h1 className="text-[34px] text-primary mb-4">O Resultado foi encamilhado para o psicologo
          </h1>
          <button className="p-2 mt-6 font-[400] text-white bg-card w-[180px]"
            onClick={() => setIsModalVisible(false)}>
            Sair
          </button>
        </div>
      </Modal>
    </div>
  )
  */

  return (
    <div>
      teste
    </div>
  )
}
