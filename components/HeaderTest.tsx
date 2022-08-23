type Prop = {
  title: string
  instrucoes: string
}

export default function HeaderTest(props: Prop) {
  return (

    <header>
      <div className="py-4 px-[5%] bg-card text-[48px] text-white">
        {props.title}
      </div>
      <div className="px-[5%]">
        <h1 className="text-[38px] mt-6">Instuções</h1>
        <p>{props.instrucoes}</p>
      </div>
    </header>
  )
}
