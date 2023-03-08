const peoples = [
  { name: 'Nathalie', single: false, edad:20 },
  { name: 'Yulianny', single: false,edad:25 },
  { name: 'Gio', single: false, edad:30 },
  { name: 'Maryu', single: true, edad:40 }
]

const search=(query) =>{
    return peoples.filter(people => people.name.includes(query) || people.edad ===(query) || people.single === query)  
}
console.log('search:',search(true
  
  ))

const clone = peoples
  .map((people) => {
    return { ...people, tax: 0.19 }
  })
  .filter((people) => people.edad > 29)



console.log(clone)
