import { FaGoogle, FaFacebook } from 'react-icons/fa'



const SignIn = (props: any) => {
  return (

    <div className="text-left bg-card text-white font-raleway p-4 max-w-[400px] rounded-l-lg">
      <h1 className=" font-title leading-[54px] text-[48px] mb-4">Entrar</h1>
      <input className="p-2 w-full text-white bg-[#ffffff00] border-2 border-white placeholder-white mb-2 focus:outline-none" placeholder="Email" />

      <input className="p-2 w-full text-white bg-[#ffffff00] border-2 border-white placeholder-white mb-2 focus:outline-none"
        type="password"
        placeholder="Senha" />

      <button className="p-2 border-2 block w-full">
        Entrar
      </button>
      <div className="border-t-2 py-4 mt-4">
        <button className="flex items-center justify-center p-2 border-2 w-full mb-2">
          <FaGoogle className="mr-4 " /> Entrar com Google
        </button>

        <button className="flex items-center justify-center p-2 border-2 w-full">
          <FaFacebook className="mr-4" />Entrar com Facebook
        </button>

      </div>
      <button onClick={props.cadastro}>Não possui uma conta</button>
    </div >
  )
}

export default SignIn
