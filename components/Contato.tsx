import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiPsychotherapyFill, RiWhatsappFill } from 'react-icons/ri'


export default function Experiences() {

  return (
    <section className="flex flex-col  text-[#222] px-[10px] md:px-[60px] py-[60px] md:flex-col">
      <h1 className="font-[600] mb-[40px] text-primary text-[48px]">Onde me encontrar:</h1>
      <div className="flex flex-col-reverse md:flex-row w-full items-center">
        <div className=" md:w-[50vw]">
          <div className="p-2 items-center flex">
            <FaMapMarkerAlt className="text-primary mr-[10px]" />
            <p>
              Rua Vitorino Grassi 53 - Jardim Santa Rita, Itapevi - SP
            </p>
          </div>

          <div className="p-2 items-center flex">
            <MdEmail className="text-primary mr-[10px]" />
            <p>
              clinicaeficazmente@gmail.com
            </p>
          </div>

          <div className="p-2 items-center flex ">
            <RiWhatsappFill className="text-primary mr-[10px]" />
            <p>
              (11) 0 0000-0000
            </p>
          </div>

          <div className="p-2 items-center flex">
            <BsLinkedin className="text-primary mr-[10px]" />
            <a className="text-primary underline" href="https://www.linkedin.com/in/cleide-sant-ana-ferreira-18ab9898/">
              Cleide Psicologia
            </a>
          </div>

          <div className="p-2 items-center flex">
            <RiPsychotherapyFill className="text-primary mr-[10px]" />
            <a className="text-primary underline" href="https://zenklub.com.br/psicologos/cleide-ferreira/">
              Zenklub
            </a>
          </div>

        </div>

        {/*Map container
	  */}
        <div className="border-2 border-primary mb-[20px] rounded-lg md:w-[50%]">
          <iframe className="h-[50vh] md:h-[60vh] md:w-[100%] rounded-lg" id="gmap_canvas" src="https://maps.google.com/maps?q=Rua%20Vitorino%20Grassi%2053%20-%20Jardim%20Santa%20Rita,%20Itapevi%20-%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}>

          </iframe>
        </div>


        {/*

	<BsLinkedin />
        <BsWhatsapp />
        <AiOutlineMail />
	*/}
      </div>

    </section>
  )
}
