let x=function (e){
  alert('hello 1')}
let y=function (e){
  alert('hello 2')
}

btn.addEventListener('click',x)

btn.addEventListener('click',y)

let  a= prompt("what is your fabrouit number")
if (a == "2"){
  btn.removeEventListener('click',x)
}
