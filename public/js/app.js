const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')


weatherform.addEventListener('submit' , (e)=>{
    e.preventDefault()
    messageOne.textContent='Loading...'

    const location=search.value
    const url="http://localhost:3000/weather?address="+location
    fetch(url).then((response)=>{
    response.json().then((data)=>{
       if(data.error){
           messageOne.textContent=data.error
           messageTwo.textContent=""
           console.log(data.error)
       }else{
           messageOne.textContent=data.location
           messageTwo.textContent=data.forecast
           console.log(data.location)
           console.log(data.forecast)
       }
    })
}) 
    
})