type Props = {
  visible: boolean
  children: any
}

export default function Model(props: Props) {

  if (!props.visible) return null

  return (
    <div className="bg-[#5F5C5C88] w-screen h-screen flex justify-center fixed top-0 left-0 items-center">
      <div className="bg-white p-6 rounded-lg max-w-[80%]">
        {props.children}
      </div>
    </div>
  )
}
