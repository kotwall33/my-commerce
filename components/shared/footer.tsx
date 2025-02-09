'use client'

import { ChevronUp } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constant'

export default function Footer() {
  return (
    <footer className='bg-black text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full rounded-none'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2h-4 w-4' />
          Go to top
        </Button>
      </div>
      <div className='p-4'>
        <div className='flex justify-center gap-3 text-sm'>
          <Link href='/page/conditions-of-use'>Conditions of Use</Link>
          <Link href='/page/privacy'>Privacy</Link>
          <Link href='/pag/help'>Help</Link>
        </div>
        <div className='flex justify-center text-sm'>
          <p>© 2025, {APP_NAME} and its Afiliates</p>
        </div>
        <div className='mt-8 flex justify-center text-sm text-gray-400'>
          41 Maroma Street, Orleans, ON | +1 (431) 766-0666
        </div>
      </div>
    </footer>
  )
}
