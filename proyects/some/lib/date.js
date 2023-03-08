import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping'

const calendar = [{
  start: new Date(2023,2,7,10),
  end: new Date(2023,2,7,10,30)
}]
/**
* @method
* @desc devuelve true si la fecha que necesito apartar esta ocupada en mi calendario
*/
export const isOverlap=(newDate)=>{
  return calendar.some(date => {
    return areIntervalsOverlapping(
       {start: date.start, end: date.end},
       {start: newDate.start, end:newDate.end}
      )
  })
}
