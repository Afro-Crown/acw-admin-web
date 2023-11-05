import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import acLogo from '../../../public/logo-login.svg'
import { Eye, EyeClosed } from "@phosphor-icons/react";

const inter = Inter({ subsets: ['latin'] })

export default function LoginScreen() {

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#FFEAD4]">
      <div className="flex flex-col h-[70%] w-[80%] md:w-2/4 lg:min-w-[25%] lg:w-1/4 bg-white items-center">
        <div className="flex flex-col gap-2 p-8">
          <Image alt='AfroCrow logo' src={acLogo} />
          <h4 className='text-center text-3xl font-TRIRONG text-slate-950'>Entrar</h4>
        </div>
        <div className='w-[80%]'>
        <div className='py-8'>
          <h4 className='text-black font-medium'>
            E-mail
          </h4>
          <input type="email" className='w-full border-b-2 h-10' name="E-mail" id="" />
        </div>
        <div className='py-8'>
          <h4 className='text-black font-medium'>
            Senha
          </h4>
          <input type="password" className='w-full border-b-2 h-10' name="Senha" id="" />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <button className='w-full p-4 bg-[#F67F57AA] font-semibold text-lg rounded-lg mb-8'>
            Enviar
          </button>
          <span className='text-black text-sm'>
            Ainda não tem uma conta? <Link href={'google.com'}><span className='text-orange-500 font-semibold'>Criar conta</span></Link>
          </span>
        </div>
        <div className="flex my-8 justify-around items-center">
          <div className='border border-gray-300 h-0 w-1/4'></div>
          <span className='text-slate-950 text-xs'>ou continue com</span>
          <div className='border border-gray-300 h-0 w-1/4'></div>
        </div>
        <div className="flex flex-row justify-around mb-10">
          <button className='bg-[#c7c7c7] w-[45%] flex items-center justify-center py-4 gap-2 rounded-xl text-sm font-semibold'><FcGoogle size={20}/> Google</button>
          <button className='bg-[#3B5998] w-[45%] flex items-center justify-center py-4 gap-2 rounded-xl text-sm font-semibold'><BsFacebook size={20} fill='white'/> Facebook</button>
        </div>
        </div>
      </div>
    </main>
  )
}
