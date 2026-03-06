const toggolebtn = (id)=>{
    const allBtn = document.querySelectorAll('.headingbtn')
    for(let btn of allBtn){
        btn.classList.remove('toggle')
    }
    const button = document.getElementById(id)
    button.classList.add('toggle')
}

const loadData = ()=>{
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues'
    fetch(url)
    .then(res=>res.json())
    .then(data=>issueDisplay(data.data)
    )

    const issueDisplay = (arr)=>{
       document.getElementById('totalissues').innerText = arr.length  
       for(let issue of arr){
        
        console.log(issue)
        
        
        const display = document.getElementById('allissuedisplay')
        const div = document.createElement('div')
        div.innerHTML = `
        <div id='issue' class="issues bg-white rounded-lg shadow border-t-6 border-t-green-500">
            <div class="topcontents p-4">
            <div class="topcontentnav flex justify-between items-center mb-3">
                <div class="topcontentimg"><img src="images/Open-Status.png" alt=""></div>
                <p class="bg-red-100 text-red-500 px-[27px] py-1 rounded-full">HIGH</p>
            </div>
            <h1 class="font-semibold mb-2">${issue.title}</h1>
            <p class="text-[#64748B] mb-3">${issue.description}</p>
            <a href="" class="bg-red-200 text-red-500 border border-red-500 py-0.5 px-3 rounded-full font-semibold">Bug</a>
            <a href="" class="bg-[#FFF8DB] border border-[#FDE68A] text-[#D97706] font-semibold py-0.5 px-3 rounded-full">help wanted</a>
            </div>
            <hr class=" border-gray-200 border">
            <div class="bottomcontent p-4 text-[#64748B]">
            <p class="mb-2">#1 by ${issue.author}</p>
            <p>${issue.createdAt}</p>
            </div>
        </div>
        `
        display.appendChild(div)
       }
       
    } 
}

loadData();