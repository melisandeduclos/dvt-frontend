const students = [
   {
     name: 'Paul',
     age: 15,
     scores: [
       {matiere: 'Maths', note: 10},
       {matiere: 'Français', note: 12},
       {matiere: 'Anglais', note: 14},
     ]
   }, 
   {
     name: 'Marie',
     age: 14,
     scores: [
       {matiere: 'Maths', note: 15},
       {matiere: 'Français', note: 9},
       {matiere: 'Anglais', note: 10},
     ]
   },
]

const data = JSON.stringify(students);
console.log(data);

// json = '{"students":[{"name":"Paul","age":15,"scores":[{"matiere":"Maths","note":10},{"matiere":"Français","note":12},{"matiere":"Anglais","note":14}]},{"name":"Marie","age":14,"scores":[{"matiere":"Maths","note":15},{"matiere":"Français","note":9},{"matiere":"Anglais","note":10}]}]}'



//    const parse = JSON.parse(json);
//    console.log(parse.students[0].name)

const newStudents = JSON.parse(data)
console.log(newStudents[0].name)

