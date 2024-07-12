import React, { ReactElement, ReactNode } from 'react'

export default function LoginWrapper({children}:{children:ReactNode}) {
  return (
    <div className='flex flex-col items-center'>
        {children}
    </div>
  )
}
