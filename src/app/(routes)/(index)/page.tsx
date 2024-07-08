import Counter from '@/app/(routes)/(index)/components/Counter'
import Footer from '@/core/components/layout/Footer'
import Main from '@/core/components/layout/Main'

export default function Home () {
  return (
    <div className='flex flex-col gap-10 p-8 min-h-dvh sm:p-10'>
      <Main>
        <h1>Template Next.js</h1>

        <section>
          <Counter />
        </section>
      </Main>

      <Footer />
    </div>
  )
}
