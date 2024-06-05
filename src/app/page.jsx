
import Auth from '@/components/auth/Auth'
import React from 'react'

import WaitListFooter from '@/components/waitListFooter/waitListFooter'

const page = () => {
  return (
    <>
    <div className='flex flex-col h-[100vh] justify-between flex-1'>
       <Auth/>
        <WaitListFooter/>
    </div>
    </>
  )
}

export default page