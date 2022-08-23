import type { NextPage } from 'next'
import { useState } from 'react'

import SignUp from '../components/Login/SignUp'
import SignIn from '../components/Login/SignIn'

const Login: NextPage = () => {
  const [cadastro, setCadastor] = useState(true)

  return (
    <div className="font-raleway ">
      <div className=" h-screen bg-hero bg-no-repeat bg-cover bg-center flex  text-right  flex-row-reverse justify-between md:items-center">
        {cadastro ?
          <SignUp cadastro={() => setCadastor(false)} />
          :
          <SignIn cadastro={() => setCadastor(true)} />
        }

      </div>
    </div>
  )
}

export default Login
