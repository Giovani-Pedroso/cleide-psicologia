import { useState } from 'react'

type Prop = {
  levels: number
  question: string
  initLevel: string
  id: number
  finalLevel: string
  setAns: any
}

type PropsBtn = {
  onClick: any
  possition: number
  value: number
}

const ButtonQuestion = (props: PropsBtn) => {

  return (
    <button className={`${props.value >= props.possition ? 'bg-primary' : 'bg-[#D1C9C9]'
      } h-full w-full mr-1`}
      onClick={props.onClick}></button>
  )
}


export default function Questions(props: Prop) {
  const [value, setValue] = useState(0)

  const Buttons = () => {
    let btns = []
    for (let i = 1; i < props.levels + 1; i++) {
      btns.push(<ButtonQuestion
        possition={i}
        key={i}
        value={value}
        onClick={() => {
          setValue(i)
          props.setAns(props.id, i)

        }} />)
    }
    return btns
  }

  return (
    <div className="mt-6">
      <h1 className="text-primary text-[32px]">{props.question}</h1>
      <div className="flex flex-row justify-between mt-4">
        <p>{props.initLevel}</p>
        <div className="flex flex-row w-[60%]">
          {Buttons()}
        </div>
        <p>{props.finalLevel}</p>
      </div>
    </div>
  )
}
