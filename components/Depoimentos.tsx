import Link from 'next/link'
import CardDepoimentos from './CardDepoimentos'

export default function Experiences() {

  return (
    <section className=" mt-[60px] font-title px-[10px] md:px-[60px]">
      <h1 className="mb-6 font-[600]  text-primary  text-[48px]">Depoimentos</h1>
      <div className="flex flex-wrap justify-between">
        <CardDepoimentos nome="Louise" depoimento="Simplesmente extraordinária! " />
        <CardDepoimentos nome="Amanda" depoimento="Inigualavel" />
        <CardDepoimentos nome="Camila" depoimento="Excelente profissional. A melhor. " />
        <CardDepoimentos nome="Déborah" depoimento="Ótimo atendimento. Disponibilizou também material muito útil. " />
        <CardDepoimentos nome="Hugo" depoimento="Gostei demais dela <3 " />
        <CardDepoimentos nome="Lu" depoimento="estou me sentindo mais leve, muito obrigada Dra Cleide" />
      </div>

      <Link href="https://zenklub.com.br/psicologos/cleide-ferreira/#testimonials">
        <a className=" border-2 p-2 border-primary font-[600]  text-primary  cursor-pointer" target="_blank">
          Ler todos os depoimentos
        </a>
      </Link>
    </section>
  )
}
