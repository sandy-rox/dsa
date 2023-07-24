let arr = [
  {
    'Name': "geek",
     'add' : 'abc'
  }, 
  { 'Roll Number':  121 },
  { 'Age': 56 }
]
/*[
             "Name", "geek", 
             "Roll Number",  121,
             "Age", 56
         ] */

let result = [];
arr.forEach((e) => { 
    result = result.concat(Object.keys(e)).concat(Object.values(e));
})
console.log(result);


