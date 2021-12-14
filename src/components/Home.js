// import API from '../api'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { usernameState } from '../atoms'
import Calendar from 'react-calendar'


export default function Home(props){

 const [username, setUsername] = useRecoilState(usernameState)
//  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setUsername("dsuccar")
  },[])

  // const onChange = date => {
  //   setDate(date)
  // }

  return(
<div>
 <Calendar
//  onChange = {onChange}
//  value = {date}
/>
</div>
  )
}