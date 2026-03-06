const toggolebtn = (id)=>{
    const allBtn = document.querySelectorAll('.headingbtn')
    for(let btn of allBtn){
        btn.classList.remove('toggle')
    }
    const button = document.getElementById(id)
    button.classList.add('toggle')
}
