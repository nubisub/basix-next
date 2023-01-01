import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const Custom404 = () => {
const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 10000);
    }, [])

  return (
    <div>Gak ketemu cok</div>
  )
}

export default Custom404