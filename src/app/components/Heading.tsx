
export default function Heading({children, Icon} : {children: string, Icon: any}) {
  return (
    <>
      <h2 className="text-xl font-heading font-semibold inline me-2">{children}</h2>
      <Icon className="size-7 pb-1.5"/>
      <hr />
    </>
  )
}

