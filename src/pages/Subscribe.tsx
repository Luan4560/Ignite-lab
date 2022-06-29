import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Logo } from "../components/Logo"
import { useCreateSubscriberMutation } from "../graphql/generated"
import BackgroundImg from '/src/assets/code-mockup.png'

export const Subscribe = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

   const handleSubscribe = async (event: FormEvent) => {
    event?.preventDefault()

   await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/event')
  } 

  return (
   <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center ">
    <div className="w-full max-w-[1100px] flex items-center flex-col md:flex-row justify-between mt-20 mx-auto">
        <div className="max-w-[640px] px-6 md:p-0 flex flex-col items-center justify-center md:flex md:items-start">
          <Logo />  

          <h1 className="mt-8 text-[2rem] md:text-[2.5rem] leading-tight text-center md:text-left ">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="my-6 md:mt-4 text-gray-200 leading-relaxed text-center  md:text-left">
            Em apenas uma semana você vai dominar na prática uma das tecnologias 
            mais utilizadas e com alta demanda para acessar as melhores 
            oportunidades do mercado.
          </p>
        </div>

        <div className="w-full md:w-[391px]  p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="md:text-2xl text-lg mb-6 block ">Inscreva-se gratuitamente</strong> 

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14" 
              type="text"
              placeholder="Seu nome completo"
              onChange={event  => setName(event.target.value)}
              />
            
            <input 
              className="bg-gray-900 rounded px-5 h-14" 
              type="text"
              placeholder="Digite seu e-mail"
              onChange={event  => setEmail(event.target.value)}
            />

            <button 
             type="submit"
             disabled={loading}
             className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            > 
              Garantir minha Vaga
            </button>
          </form> 
        </div>    
    </div>

    <img src={BackgroundImg} className="mt-4" alt="Imagem background" />
   </div>
  )
}