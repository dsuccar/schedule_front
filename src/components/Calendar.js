import React, {useEffect, useState} from 'react'
import moment from 'moment'
import "../styles.css"

export default function Calendar(){
  const [calendar, setCalendar] = useState([])
  const [value, setValue] = useState(moment())


  // const startDay = value.clone().startOf("week")
  // const endDay = value.clone().endOf("week")
  const startDay = value.clone().startOf("month").startOf("week")
  const endDay = value.clone().endOf("month").endOf("week")

 
  
  useEffect(()=> {
  const a = []
  const day = startDay.clone().subtract(1, "day")

  while(day.isBefore(endDay, "day")) {
    a.push(
      Array(7)
       .fill(0)
       .map(() => day.add(1, "day").clone())
    )
  }

  setCalendar(a)
  },[value])
  


console.log(value)
  return(
    
  <div className="calendar">
    {calendar.map((week) => (
        <div> 
          {week.map ((day) => ( 
            <div className= "day" onClick= {() => setValue(day)}> 
              <div 
                className= {value.isSame(day, "day") ? "selected" : ""}
                >{day.format("D").toString()}</div>
            </div>
            ))}
        </div>
      ))}
  </div>
  )
}