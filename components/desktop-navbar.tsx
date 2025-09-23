import React from 'react'
import { currentUser } from '@clerk/nextjs/server'


const DesktopNavbar = async () => {
    const user = await currentUser()
    console.log("user is: ", user)
  return (
    <div>DesktopNavbar</div>
  )
}

export default DesktopNavbar