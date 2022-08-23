import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Experiences from '../components/Experiences'
import Blog from '../components/Blog'
import Depoimentos from '../components/Depoimentos'
import Contato from '../components/Contato'
import QuemSouEu from '../components/QuemSouEu'
import Servicos from '../components/Servicos'

const Home: NextPage = () => {
  return (


    <div className="font-raleway">
      <Hero />
      <QuemSouEu />
      <Depoimentos />
      <Blog />
      <Contato />
      {/*
      <Servicos />
      */}
    </div >
  )

}

/*

   
    </div>
 */

export default Home
