type Props = {
  depoimento: string;
  nome: string;
}

export default function Card(props: Props) {
  return (
    <div className="p-4 flex flex-col items-center justify-center rounded-lg bg-primary text-white w-full md:w-[30%] mb-[36px]">
      <p className="text-[26px] text-center font-[400]">{props.depoimento}</p>
      <p className="text-[22px]">☆☆☆☆☆</p>
      <p className="text-[22px]">{props.nome}</p>

    </div >
  )
}
