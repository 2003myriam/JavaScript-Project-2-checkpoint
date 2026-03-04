/* _________Problem 1__________ */
function  reverses() {
  let sentence2=""
  let characthere=""
  let longeur1=sentence1.length
  for (let i = longeur1-1; i >= 0; i--) {
    characthere=sentence1[i]
    sentence2=sentence2+characthere
   
  }
   
  return sentence2
}
let sentence1="hello"
console.log("la chaine inversé est :",reverses())