import React from 'react';
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { usernameState } from '../atoms'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
// import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'

export default function Home(){

 const [username, setUsername] = useRecoilState(usernameState)
 const [date, setDate] = useState(new Date());
 


  // const onChange = date => {
  //   setDate(date)
  //   console.log("idk why this is still changing")
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