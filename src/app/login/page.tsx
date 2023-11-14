
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import acLogo from '../../../public/logo-login.svg';
import { Eye, EyeClosed } from "@phosphor-icons/react";
import React from 'react';
import { Trirong } from 'next/font/google';
import HomeScreen from '../home/page';

const trirong = Trirong({
  subsets: ['latin'],
  weight: '400',
  style: 'italic'
})

export default function LoginScreen() {

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#FFEAD4]">
      <div className="flex flex-col h-[70%] w-[80%] md:w-2/4 lg:min-w-[25%] lg:w-1/4 bg-white items-center">
        <div className="flex flex-col gap-2 p-8 text-black text-center text-2xl">
          <Image alt='AfroCrow logo' src={acLogo} />
          <h4 className={trirong.className}>Entrar</h4>
        </div>
        <div className='w-[80%]'>
        <div className='py-8 text-black'>
          <input
              type="email"
              placeholder="E-mail"
              className='w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent'
            />
        </div>
        <div className='py-8 text-black'>
          <input
            type="password"
            placeholder="Senha"
            className='w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-gray-500 focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent'
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >

          </button>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Link href={"/home"} className='w-full'>
            <button className='w-full  p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8'>
              Enviar
            </button>
          </Link>
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
};
