const student ={
    sname : "deep",
    senrollNo : 122334,
    sdept : "ce",
  }
  
  console.log(student)
  
  Object.defineProperty(student,"smail",{
    value :  "deep@example.com"
  })
  
  console.log(student.smail)