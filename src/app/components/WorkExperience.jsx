export default function WorkExperience() {
  return (
    <>
      <div className="font-text border-light rounded mt-2">
        <div className="flex flex-col flex-wrap">
          <p className="font-semibold text-lg">Odoo Developer</p>
          <p className="-mt-1">DeliPal</p>
          <p className='text-sm text-light-dark mt-[-0.40rem]'>From Oct. 2024 - Current</p>
        </div>
        
        <p className="mt-2 leading-4 font-extralight">Here I started my career as a software developer, working with Python, JavaScript, XML, QWeb templates, and SQL in the Odoo framework. My tasks include adding features, fixing bugs, and optimizing code. I’ve developed both front-end and back-end components. I learned how to collaborate with my team in order to meet requirements and deadlines.</p>

        <hr className='border-primary-light mt-2'/>
      </div>
      <div className="font-text border-light rounded mt-4">
        <div className="flex flex-col flex-wrap">
          <p className="font-semibold text-lg">Programming instructor for children aged 7 to 13</p>
          <p className="-mt-1">Logiscool Brasov</p>
          <p className='text-sm text-light-dark mt-[-0.40rem]'>From Oct. 2023 - Jun. 2024, 9mos</p>
        </div>
        
        <p className="mt-2 leading-4 font-extralight">I have taught kids different IT concepts, from basic computer usage for younger children, to programming games using logical blocks (Scratch). For older kids, I introduced more advanced programming topics such as data structures (lists, matrices, recursive functions) in JavaScript and Python. Through this experience, I developed the ability to explain complex concepts in simple terms and skills in debugging and understanding code written by others.</p>

        <hr className='border-primary-light mt-2'/>
      </div>
    </>
  )
}
