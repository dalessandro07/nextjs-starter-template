'use client'

import { Button } from '@/core/components/ui/button'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { useState } from 'react'

export default function Counter () {
  const [count, setCount] = useState(0)

  return (
    <section className='flex items-center gap-5'>
      <Button size="icon" onClick={() => { setCount((prev) => prev - 1) }}>
        <MinusIcon />
      </Button>

      <p className='text-5xl font-bold'>{count}</p>

      <Button size="icon" onClick={() => { setCount((prev) => prev + 1) }}>
        <PlusIcon />
      </Button>
    </section>
  )
}
