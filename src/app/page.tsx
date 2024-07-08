import { AUTHOR_NAME, AUTHOR_URL } from '@/core/constants'

export default function Home () {
  return (
    <div className='flex flex-col gap-10 p-8 min-h-dvh sm:p-10'>
      <main className='grow'>
        <h1 className='text-5xl font-bold'>Template Next.js</h1>
      </main>

      <footer className='text-sm'>
        Plantilla creada por <a href={AUTHOR_URL} className='text-blue-500'>{AUTHOR_NAME}</a>
      </footer>
    </div>
  )
}
