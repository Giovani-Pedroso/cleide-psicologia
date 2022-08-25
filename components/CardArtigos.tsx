import Link from 'next/link'

type Props = {
  title:string
  content:string
}


export default function Card(props:Props) {
  return (
    <article className=" flex flex-col justify-between mb-[40px] md:max-w-[30%] rounded-l font-semibold mb-4">
      <h1 className="text-[24px] text-primary font-[400] mb-4">{props.title}</h1>
      <p className="mb-4 font-[400]">{props.content.slice(0, 300)} ...</p>
      <Link href="#">
        <a className="border-2 p-2 font-bold cursor-pointerg text-primary border-2 border-primary w-[50%]" target="_blank">
          Continuar lendo
        </a>
      </Link>
    </article >
  )
}
