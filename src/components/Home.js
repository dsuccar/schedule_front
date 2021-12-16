// import { useEffect, useState } from 'react'
// import { useRecoilState } from 'recoil'
// import { usernameState } from '../atoms'
import Calendar from './Calendar'
import '../App.css'



// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';


// import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'

export default function Home(){
//  const [username, setUsername] = useRecoilState(usernameState)
//  const [date, setDate] = useState(new Date());




//  useEffect(() => {
//   setUsername('dsuccar')
//  },[])

 

//  const onChange = date => {
//   setDate(date)
// }  

  return(
    <div>
      <Calendar/>
    </div>
    



  )
}