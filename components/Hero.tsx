import Link from 'next/link'
export default function Hero() {

  return (
    <header className="flex  text-right  flex-row-reverse h-screen bg-hero bg-no-repeat bg-cover bg-center md:items-center">
      <div className=" bg-card text-white font-raleway p-4 max-w-[400px] md:rounded-l-lg max-h-[36%] md:max-h-[50%]">
        <h1 className="text-[32px] font-[100]">Cleide</h1>
        <h2 className=" font-title leading-[54px] text-[48px]">A ajuda que você Procura</h2>
        <h1 className="text-[32px] font-[100] font-body mb-[20px]">Psicologia</h1>
        <Link href="https://zenklub.com.br/psicologos/cleide-ferreira/">
          <a target="_blank" className="border-2 p-2 font-[400] cursor-pointer">
            Marque sua consulta
          </a>
        </Link>
      </div>
    </header >
  )
}
