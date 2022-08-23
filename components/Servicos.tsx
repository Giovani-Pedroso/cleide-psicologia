import CardServices from './CardServicos'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { FaMoneyBillWave } from 'react-icons/fa'

const Servicos = () => {

  return (
    <section className="px-[5%] my-[40px]">
      <h1 className="text-[48px] text-primary">Posso de ajudar com</h1>
      <div className="flex justify-between">
        <CardServices icon={<BsFillSuitHeartFill />}
          title="Relacionamentos"
          text="qqqq" />
        <CardServices icon={<FaMoneyBillWave />}
          title="Relacionamentos"
          text="qqqq" />
        <CardServices icon={<BsFillSuitHeartFill />}
          title="Relacionamentos"
          text="qqqq" />
      </div>
    </section>
  )
}

export default Servicos
