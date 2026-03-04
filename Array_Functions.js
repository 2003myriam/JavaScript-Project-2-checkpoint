/* ________Probleme 1_________ */
/* ___________MAX_________ */
function maxfunction() {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i]>max) {
       max=array1[i]
       
    } 
  }
  return max
}
/* _________MIN__________ */
function minfunction() {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i]<min) {
       min=array1[i]
       
    } 
  }
  return min
}
let array1=[4,5,7,2,18,1]
let max=array1[0]
let min=array1[0]
console.log("le maximum est ",maxfunction())
console.log("le minimum est ",minfunction())
 