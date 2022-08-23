import { useState, useEffect } from 'react'
import Header from '../../components/HeaderTest'
import QuestionRange from '../../components/QuestionsRange'
import Modal from '../../components/Model'
import axios from 'axios'
import { useRouter, push as Redirect } from "next/router";
import ReactLoading from 'react-loading';

import { TestsFrom } from '../../data/testsFroms'
const url = 'http://localhost:5000/testes'

interface ITest {
  instrucoes: string;
  nome: string;
  questions: string[];
  initLevel: string;
  finalLevel: string;
  levels: number
}


export default function Id() {
  var ans: any;
  const router = useRouter()
  let pacienteId = '0'
  const id = router.query.id

  const [test, setTest] = useState<ITest | null>(null)
  const [searching, setSearching] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    const getTest = async () => {
      const response = await axios.get(`${url}/a-test/${id}`)
      const data = response.data.data

      console.log('url: ', `${url}/${id}`)
      console.log('response', response)
      console.log('data', data)
      if (data.testName == undefined) {
        console.log('rediredting')
        // Redirect('../404')
      }
      console.log('test name: ', data.testName)
      console.log("the test from is:", TestsFrom["escala autoestima"])
      setTest(TestsFrom[data.testName])
      pacienteId = data.pacienteId
      ans = new Array(TestsFrom[data.testName].questions.length)
      ans.fill(0)
      console.log(ans)

    }
    getTest()

  }, [])



  if (test == null) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <ReactLoading type={"spin"} color={"#51A635"} height={'6vw'} width={'6vw'} />
      </div>
    )
  }

  const Ans = (index: number, value: number) => {
    ans[index] = value
  }

  const handleResult = async () => {
    for (let i = 0; i < ans.length; i++) {
      if (ans[i] == 0) {
        alert('Responda todas as preguntas')
        return 0
      }
    }

    const body = {
      pacienteId,
      testId: id,
      testName: test.nome,
      anwsers: ans
    }
    setIsModalVisible(true)
    //console.log(body)
    //const res = await axios.post(`${url}/answer-test`, body)
    //console.log(res)
  }

  const questions = () => {
    if (test == null) return
    return test.questions.map((question, index) => {

      return (
        <QuestionRange
          initLevel={test.initLevel}
          key={index}
          id={index}
          finalLevel={test.finalLevel}
          setAns={Ans}
          question={question}
          levels={test.levels} />
      )
    }
    )
  }

  return (
    <div>
      <Header title={test.nome} instrucoes={test.instrucoes} />
      <div className="px-[5%]">
        {
          questions()
        }

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
            onClick={() => {
              console.log('aaaa')
              Redirect('../../')
            }}>
            Sair
          </button>
        </div>
      </Modal>
    </div>
  )
}
