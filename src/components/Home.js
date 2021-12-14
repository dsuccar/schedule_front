// import API from '../api'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { usernameState } from '../atoms'
import Calendar from 'react-calendar'
// import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'

export default function Home(){

 const [username, setUsername] = useRecoilState(usernameState)
 const [date, setDate] = useState(new Date());
 


  const onChange = date => {
    setDate(date)
    console.log("changed")
  }

  return(
<div>
 <Calendar
 onChange = {onChange}
 value = {date}
/>
</div>
  )
}