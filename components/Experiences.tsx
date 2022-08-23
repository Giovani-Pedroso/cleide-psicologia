import Link from 'next/link'

export default function Experiences() {

  return (
    <section className="flex flex-col justify-between w-full items-center text-[#222]  font-title  md:flex-row">
      <div className="flex flex-col px-[10px] py-[30px] md:pl-[60px]">
        <h1 className="mb-6 font-[600]  text-primary text-[48px]">Experiencia</h1>
        <p className="max-w-[520px] font-[400] text-[24px]">
          Anos trabalhando na segurança publica me deu a experiencia para excarar qualquer desafios, Sou expecializada na psicologia da mulher meu trabalho é recolhecida na comunidade alen de ser premiado
        </p>
      </div>
      <img src="./images/plate-1.jpg" className="w-[100%] md:w-[50%]" />
    </section>
  )
}
