document.getElementById('submitbtn').addEventListener('click', ()=>{
   const userName = document.getElementById('user')
   const password = document.getElementById('pass')
   if(userName.value === 'admin' && password.value === 'admin123'){
      alert('Login Successful')  
       window.location.assign("/homepage.html")
       userName.value = ''
   }
   else{
    alert('Incorrect Username or password')
    userName.value = ''
    password.value = ''
   }
})
