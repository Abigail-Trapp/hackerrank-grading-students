function gradingStudents(grades){
let result = []
for(let i of grades){
if((i < 40) && (Math.ceil(i/5)*5 !== 40)){
  result.push(i) 
} 
else if(Math.ceil(i/5)*5 - i < 3){
    result.push(Math.ceil(i/5)*5)
} else {
  result.push(i)
}
}
  return result
}
// console.log(gradingStudents([88]))


// let div = document.querySelector('div')
// let p = document.createElement('p')
// p.innerHTML= `${gradingStudents([88])}`
// div.append(p)


