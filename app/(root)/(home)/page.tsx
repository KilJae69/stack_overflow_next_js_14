import { UserButton } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
  return (
    <UserButton afterSignOutUrl='/'/>
  )
}

export default HomePage