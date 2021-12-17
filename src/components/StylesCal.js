export default function StylesCal(){

  function isSelected(day){
    return value.isSame(day, "day")
  }

  function beforeToday(day) {
    return day.isSame(new Date(), "day")
  }

  function isToday(day) {
    return day.isSame(new Date(), "day")
  }

  function dayStyles(day){
    if (beforeToday(day)) return "before"
    if (isSelected(day)) return "selected"
    if (isToday(day)) return "today"
    return ""
  }

  return(

  )
}