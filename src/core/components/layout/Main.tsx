import type { IPageProps } from '@/core/types'

export default function Main ({ children }: IPageProps) {
  return (
    <main className='flex flex-col gap-5 grow'>
      {children}
    </main>
  )
}
