type Props = {
  icon: any
  title: string
  text: string
}

const CardServices = (props: Props) => {
  return (
    <div className="flex flex-col bg-secondary p-4 ">
      <h1 className="bg-white p-4 rounded-full text-primary text-[30px]">
        {props.icon}
      </h1>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default CardServices
