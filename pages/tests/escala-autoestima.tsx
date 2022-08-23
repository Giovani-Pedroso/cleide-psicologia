/*
import Header from '../../components/HeaderTest'
import { useState } from 'react'

const questions = [
  'De uma forma geral (apesar de tudo), estou satisfeito comigo mesmo (a).',
  'Às vezes, eu acho que não sirvo para nada (desqualificado ou inferior em relação aos outros)',
  'Eu sinto que eu tenho um tanto (um número) de boas qualidades.',
  'Eu sou capaz de fazer coisas tão bem quanto a maioria das outras pessoas (desde que me ensinadas)',
  'Não sinto satisfação nas coisas que realizei. Eu sinto que não tenho muito do que me orgulhar',
  'Às vezes, eu realmente me sinto inútil (incapaz de fazer as coisas)',
  'Eu sinto que sou uma pessoa de valor, pelo menos num plano igual (num mesmo nível) às outras pessoas.',
  'Eu gostaria de ter mais respeito por mim mesmo (dar me mais valor)',
  'Quase sempre eu estou inclinado(a) a achar que sou um(a) fracassado(a)',
  'Eu tenho uma atitude positiva (pensamentos, atos e sentimentos positivos) em relação a mim mesmo(a)',
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
            initLevel="Nunca"
            key={index}
            id={index}
            finalLevel="Sempre"
            setAns={Ans}
            question={question}
            levels={4} />
        )
      }
      )
    }
  
    return (
      <div>
        <Header title="Escala autoestima"
          instrucoes="Responda as  questoes em uma escala de numca a sempre"
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
