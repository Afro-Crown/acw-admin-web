import { Julius_Sans_One } from 'next/font/google'

const julius = Julius_Sans_One({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center ${julius.className}`}>
      <label className={`text-base`}>AFRO CROWN GUIZERA</label>
    </main>
  )
}
