import { AUTHOR_NAME, AUTHOR_URL } from '@/core/constants'

export default function Footer () {
  return (
    <footer className='text-sm'>
      Plantilla creada por <a href={AUTHOR_URL} className='text-blue-500'>{AUTHOR_NAME}</a>
    </footer>
  )
}
