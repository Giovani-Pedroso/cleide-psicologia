/*
import { useState } from 'react'

import Header from '../../components/HeaderTest'
import QuestionRange from '../../components/QuestionsRange'
import Model from '../../components/Model'
const questions = [
  'Estar cansado',
  'Sentir-se deprimido',
  'Ter um bom dia',
  'Estar fisicamente exausto',
  'Estar emocionalmente exausto',
  'Estar feliz',
  'Estar arrasado',
  'Não aguentar mais',
  'Estar infeliz',
  'Sentir-se esgotado',
  'Sentir-se encurralado',
  'Sentir-se sem mérito',
  'Estar cansado',
  'Estar preocupado',
  'Sentir-se desiludido e  rancoroso',
  'Estar fraco e susceptível a doenças',
  'Sentir-se sem esperança',
  'Sentir-se rejeitado',
  'Sentir-se optimista',
  'Sentir-se enérgico',
  'Sentir-se ansioso'
]

const ans = new Array(questions.length)
ans.fill(0)

let result = 0
const alto = 5
const medio = 4
*/
export default function Stress() {
  /*
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const Ans = (index: number, value: number) => {
    ans[index] = value
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
          levels={7} />
      )
    }
    )
  }

  const handleResult = () => {
    let total = 0
    for (let i = 0; i < ans.length; i++) {

      if (ans[i] == 0) {
        alert('Responda todas as perguntas')
        return null
      }
      total += ans[i]

    }
    console.log("total: ", total)
    result = (total / ans.length).toFixed(2)
    setModalIsVisible(true)

  }

  const getMessage = () => {
    if (result < medio) return (
      <p className="text-primary">
        baixo
      </p>
    )
    if (result < alto) return (
      <p className="text-orange-600">
        medio
      </p>
    )
    return (
      <p className="text-red-600">
        alto
      </p>
    )
  }

  return (
    <div className="pb-[40px]">
      <Header title="Analize de stress"
        instrucoes="Responda as  questoes em uma escala de numca a sempre" />
      <div className="px-[5%]">
        {Questions()}
        <button className="p-2 mt-6 font-[400] text-white bg-card"
          onClick={() => handleResult()}>
          Finalizar test
        </button>
      </div>

      <Model visible={modalIsVisible}>
        <h1 className="text-primary text-[38px]">Seu nivel de stress é:</h1>
        <p className={`${result > alto ? "text-red-600" : result > medio ? "text-orange-600" : "text-primary"} text-center text-[42px]`}>
          {result}
        </p>
        {getMessage()}
        <div>

          <button className="p-2 mt-6 font-[400] text-white bg-card w-[180px]"
            onClick={() => setModalIsVisible(false)}>
            Sair
          </button>
          <button className="text-primary border-2 border-card py-1  w-[180px]"
            onClick={() => window.location.reload(true)}>
            Refazer teste
          </button>
        </div>
      </Model>
    </div >
  )
  */

  return (
    <div>
      teste
    </div>
  )
}
