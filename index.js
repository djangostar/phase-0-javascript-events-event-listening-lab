//Chained arrow function
function addingEventListener() {
  document.getElementById('input').addEventListener('click', () => alert('I was clicked!'))
}
//Abstracted out

//function addingEventListener() {
//  const clickMe = document.getElementById('input')
//  clickMe.addEventListener('click', clickAlert)
//  function clickAlert() {
//    alert('I was clicked!')
//  }
//}