// import API from '../api'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { usernameState } from '../atoms'


export default function Home(props){

 const [username, setUsername] = useRecoilState(usernameState)
  useEffect(() => {
    setUsername("dsuccar")
  },[])
  return(
<div>
 you're home now ${username}
</div>
  )
}