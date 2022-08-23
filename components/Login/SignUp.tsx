import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { getAuth } from 'firebase/auth'


import utils from '../../utils/firebase/auth'

const SignUp = (props: any) => {



  const handleGoogle = () => {
    utils.loginGoogle()
  }

  const handleFacebook = () => {
    const auth = getAuth()
    console.log(auth)
  }

  return (

    <div className="text-left bg-card text-white font-raleway p-4 max-w-[400px] rounded-l-lg">

      <h1 className=" font-title leading-[54px] text-[48px] mb-4">Cadastra-se</h1>
      <input className="p-2 w-full text-white bg-[#ffffff00] border-2 border-white placeholder-white mb-2 focus:outline-none" placeholder="Email" />

      <input className="p-2 w-full text-white bg-[#ffffff00] border-2 border-white placeholder-white mb-2 focus:outline-none"
        type="password"
        placeholder="Senha" />

      <input className="p-2 w-full text-white bg-[#ffffff00] border-2 border-white placeholder-white mb-2 focus:outline-none"
        type="password"
        placeholder="Repetir senha" />

      <button className="p-2 border-2 block w-full">
        Entrar
      </button>
      <div className="border-t-2 py-4 mt-4">
        <button onClick={handleGoogle} className="flex items-center justify-center p-2 border-2 w-full mb-2">
          <FaGoogle
            className="mr-4 " /> Entrar com Google
        </button>

        <button onClick={handleFacebook}
          className="flex items-center justify-center p-2 border-2 w-full">
          <FaFacebook className="mr-4" />Entrar com Facebook
        </button>

      </div>

      <button onClick={props.cadastro}>Ja possui uma conta</button>
    </div >
  )
}

export default SignUp
