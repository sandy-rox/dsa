/*s = "Sandeep Kumar"
output - {'a':2, 'e':2, 's':1, 'n':1, 'd':1, 'p':1, 'k':1, 'u':1, 'm':1, 'r':1} */

let str = 'Sandeep Kumar';
str = str.toLowerCase();
let fmap = new Map(); 
str.split('').forEach(e => {
  if (e != ' ') {
    if (fmap.has(e)) {
      fmap.set(e, fmap.get(e) + 1)
    }
    else {
      fmap.set(e, 1);
    }
  }
});

let result = new Map([...fmap.entries()].sort((a, b) => b[1] - a[1]));
//console.log(result);

