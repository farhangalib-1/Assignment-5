const toggolebtn = (id)=>{
    const allBtn = document.querySelectorAll('.headingbtn')
    for(let btn of allBtn){
        btn.classList.remove('toggle')
    }
    const button = document.getElementById(id)
    button.classList.add('toggle')

    const display = document.getElementById('allissuedisplay')
    if(id === 'allbtn'){
        display.innerHTML = ''
        loadData();
    }
    if(id === 'openbtn'){
        display.innerHTML = ''
       openData()
    }
    if(id === 'closebtn'){
        display.innerHTML = ''
        closeData()
    }
    
}
const spinner =(status)=>{
    if(status === true){
        document.getElementById('spinner').classList.remove('hidden')
        document.getElementById('allissuedisplay').classList.add('hidden')
    }
    else{
        document.getElementById('spinner').classList.add('hidden')
        document.getElementById('allissuedisplay').classList.remove('hidden')
    }
}
const showOpenData = (id)=>{
    const url =`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>opendetails(data.data))

}
const opendetails = (data)=>{
    const details = document.getElementById('details')
    const labels = data.labels
        const newLabels = labels.map(el=>`<a class="labels bg-red-200 text-red-500 border border-red-500 py-0.5 px-2 rounded-full font-semibold text-[12px]">${el.toUpperCase()}</a>`)
        const allNewLabels = newLabels.join(" ")
    details.innerHTML = `
    <h1 class="font-bold text-2xl mb-2">${data.title}</h1>
    <div class="flex items-center gap-2 mb-6">
    <p class="bg-[#00A96E] w-13 text-center rounded-full pb-1 text-[12px] text-white font-medium">${data.status}</p>
    <div> 
    <img  src="images/Ellipse 5.png" alt="">
    </div>
    <p class="text-[12px] text-[#64748B]">Open by ${data.author}</p>
    <div> 
    <img  src="images/Ellipse 5.png" alt="">
    </div>
    <p class="text-[12px] text-[#64748B]">${new Date(data.createdAt).toLocaleDateString()}</p>
   </div>
   ${allNewLabels}
   <p class="text-[#64748B] mt-6">${data.description}</p>
   <div class="flex justify-between bg-gray-100 p-4 rounded-lg mt-6">
   <div class="left">
   <p class="text-[#64748B]">Assignee:</p>
   <p class="assignee font-semibold">${data.assignee}</p>
   </div>
   <div class="left">
   <p class="text-[#64748B]">Priority:</p>
   <p class="priority text-center  bg-red-500 rounded-full text-white text-[12px] p-1.5 font-medium">${data.priority.toUpperCase()}</p>
   </div>
   </div>
    `
    document.getElementById('my_modal_1').showModal()
     const alllabels = document.querySelectorAll('.labels')
    for(let label of alllabels){
        if(label.innerText === 'ENHANCEMENT'){
            label.classList.add('enhancement')
            
        }
        if(label.innerText === 'HELP WANTED'){
            label.classList.add('help')
        }
        if(label.innerText === 'GOOD FIRST ISSUE'){
            label.classList.add('good')
        }
         const priority = document.querySelectorAll('.priority')
         console.log();
         
         for(let p of priority){
            if(p.innerText === 'MEDIUM')
                p.classList.add('medium')
            if(p.innerText === 'LOW')
                p.classList.add('low')
            }

            const assignee = document.querySelectorAll('.assignee')
    for(let a of assignee){
       if(a.innerText === ''){
       a.innerText = 'Unassigned'
       }
      }
     
    }
}
const showCloseData = (id)=>{
    const url =`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>closedetails(data.data))

}
const closedetails = (data)=>{
    const details = document.getElementById('details')
    const labels = data.labels
        const newLabels = labels.map(el=>`<a class="labels bg-red-200 text-red-500 border border-red-500 py-0.5 px-2 rounded-full font-semibold text-[12px]">${el.toUpperCase()}</a>`)
        const allNewLabels = newLabels.join(" ")
    details.innerHTML = `
    <h1 class="font-bold text-2xl mb-2">${data.title}</h1>
    <div class="flex items-center gap-2 mb-6">
    <p class="bg-[#A855F7] w-13 text-center rounded-full pb-1 text-[12px] text-white font-medium">${data.status}</p>
    <div> 
    <img  src="images/Ellipse 5.png" alt="">
    </div>
    <p class="text-[12px] text-[#64748B]">Open by ${data.author}</p>
    <div> 
    <img  src="images/Ellipse 5.png" alt="">
    </div>
    <p class="text-[12px] text-[#64748B]">${new Date(data.createdAt).toLocaleDateString()}</p>
   </div>
   ${allNewLabels}
   <p class="text-[#64748B] mt-6">${data.description}</p>
   <div class="flex justify-between bg-gray-100 p-4 rounded-lg mt-6">
   <div class="left">
   <p class="text-[#64748B]">Assignee:</p>
   <p class="font-semibold">${data.assignee}</p>
   </div>
   <div class="left">
   <p class="text-[#64748B]">Priority:</p>
   <p class="assignee priority text-center  bg-red-500 rounded-full text-white text-[12px] p-1.5 font-medium">${data.priority.toUpperCase()}</p>
   </div>
   </div>
    `
    document.getElementById('my_modal_1').showModal()
     const alllabels = document.querySelectorAll('.labels')
    for(let label of alllabels){
        if(label.innerText === 'ENHANCEMENT'){
            label.classList.add('enhancement')
            
        }
        if(label.innerText === 'HELP WANTED'){
            label.classList.add('help')
        }
        if(label.innerText === 'GOOD FIRST ISSUE'){
            label.classList.add('good')
        }
         const priority = document.querySelectorAll('.priority')
         console.log();
         
         for(let p of priority){
            if(p.innerText === 'MEDIUM')
                p.classList.add('medium')
            if(p.innerText === 'LOW')
                p.classList.add('low')
            }
            const assignee = document.querySelectorAll('.assignee')
    for(let a of assignee){
       if(a.innerText === ''){
       a.innerText = 'Unassigned'
       }
      }
     
    }
}
const loadData = ()=>{
    spinner(true)
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues'
    fetch(url)
    .then(res=>res.json())
    .then(data=>issueDisplay(data.data)
    )

    const issueDisplay = (arr)=>{
       document.getElementById('totalissues').innerText = arr.length 
       const allIssues = document.getElementById('allissuedisplay')
       allIssues.innerHTML= ' '  
       for(let issue of arr){
        
        const labels = issue.labels
        const newLabels = labels.map(el=>`<a class="labels bg-red-200 text-red-500 border border-red-500 py-0.5 px-2 rounded-full font-semibold text-[12px]">${el.toUpperCase()}</a>`)
        const allNewLabels = newLabels.join(" ")
     
        const display = document.getElementById('allissuedisplay')
        const div = document.createElement('div')
        if(issue.status === 'open'){
             div.innerHTML = `
        <div id="issue" onclick="showOpenData(${issue.id})" class="issues bg-white rounded-lg shadow border-t-6 border-t-green-500 h-full">
            <div class="topcontents p-4">
            <div class="topcontentnav flex justify-between items-center mb-3">
                <div class="topcontentimg"><img src="images/Open-Status.png" alt=""></div>
                <p class="priority bg-red-100 text-red-500 px-[27px] py-1 rounded-full">${issue.priority.toUpperCase()}</p>
            </div>
            <h1 class="font-semibold mb-2">${issue.title}</h1>
            <p class="text-[#64748B] mb-3">${issue.description}</p>
            ${allNewLabels}
            </div>
            <hr class=" border-gray-200 border">
            <div class="bottomcontent p-4 text-[#64748B]">
            <div class="left flex justify-between text-[14px]">
            <p class="mb-2">#${issue.id} by ${issue.author}</p>
            <p>${new Date(issue.createdAt).toLocaleDateString()}</p>
            </div>
            <div class="right flex justify-between text-[14px]">
            <p class="mb-2">Assignee: <span class="assignee"> ${issue.assignee} </span></p>
            <p>Updated:${new Date(issue.updatedAt).toLocaleDateString()}</p>
            </div>
            
            </div>
        </div>
        `
        display.appendChild(div) 
        }
        if(issue.status === 'closed'){
            div.innerHTML = `
        <div id="issue" onclick="showCloseData(${issue.id})" class="issues bg-white rounded-lg shadow border-t-6 border-t-purple-500 h-full">
            <div class="topcontents p-4">
            <div class="topcontentnav flex justify-between items-center mb-3">
                <div class="topcontentimg"><img src="images/Closed- Status .png" alt=""></div>
                <p class="priority bg-red-100 text-red-500 px-[27px] py-1 rounded-full">${issue.priority.toUpperCase()}</p>
            </div>
            <h1 class="font-semibold mb-2">${issue.title}</h1>
            <p class="text-[#64748B] mb-3">${issue.description}</p>
            ${allNewLabels}
            </div>
            <hr class=" border-gray-200 border">
            <div class="bottomcontent p-4 text-[#64748B]">
           <div class="left flex justify-between text-[14px]">
            <p class="mb-2">#${issue.id} by ${issue.author}</p>
            <p>${new Date(issue.createdAt).toLocaleDateString()}</p>
            </div>
            <div class="right flex justify-between text-[14px]">
            <p class=" mb-2">Assignee: <span class="assignee"> ${issue.assignee} </span></p>
            <p>Updated:${new Date(issue.updatedAt).toLocaleDateString()}</p>
            </div>
            </div>
        </div>
        `
        display.appendChild(div)
       }
    spinner(false)
       const priority = document.querySelectorAll('.priority')
         for(let p of priority){
            if(p.innerText === 'MEDIUM')
                p.classList.add('medium-btn')
            if(p.innerText === 'LOW')
                p.classList.add('low-btn')
            } 
    } 
    const labels = document.querySelectorAll('.labels')
    for(let label of labels){
        if(label.innerText === 'ENHANCEMENT'){
            label.classList.add('enhancement')
            
        }
        if(label.innerText === 'HELP WANTED'){
            label.classList.add('help')
        }
        if(label.innerText === 'GOOD FIRST ISSUE'){
            label.classList.add('good')
        }
     
    }
    const assignee = document.querySelectorAll('.assignee')
    for(let a of assignee){
       if(a.innerText === ''){
       a.innerText = 'Unassigned'
       }
      }  
      
    } 

    document.getElementById('searchbtn').addEventListener('click',()=>{
    const searchValue = document.getElementById('search').value
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>issueDisplay(data.data))
}
) 

}
const openData=()=>{
    spinner(true)
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues'
    fetch(url)
    .then(res=>res.json())
    .then(data=>issueDisplay(data.data)
    )
        const issueDisplay = (arr)=>{
       for(let issue of arr){
        
        const labels = issue.labels
        const newLabels = labels.map(el=>`<a class="labels bg-red-200 text-red-500 border border-red-500 py-0.5 px-2 rounded-full font-semibold text-[12px]">${el.toUpperCase()}</a>`)
        const allNewLabels = newLabels.join(" ")
     
        const display = document.getElementById('allissuedisplay')
        const div = document.createElement('div')
        if(issue.status === 'open'){
             div.innerHTML = `
        <div id="issue" onclick="showOpenData(${issue.id})" class="issues bg-white rounded-lg shadow border-t-6 border-t-green-500 h-full">
            <div class="topcontents p-4">
            <div class="topcontentnav flex justify-between items-center mb-3">
                <div class="topcontentimg"><img src="images/Open-Status.png" alt=""></div>
                <p class="priority bg-red-100 text-red-500 px-[27px] py-1 rounded-full">${issue.priority.toUpperCase()}</p>
            </div>
            <h1 class="font-semibold mb-2">${issue.title}</h1>
            <p class="text-[#64748B] mb-3">${issue.description}</p>
            ${allNewLabels}
            </div>
            <hr class=" border-gray-200 border">
            <div class="bottomcontent p-4 text-[#64748B]">
            <div class="left flex justify-between text-[14px]">
            <p class="mb-2">#${issue.id} by ${issue.author}</p>
            <p>${new Date(issue.createdAt).toLocaleDateString()}</p>
            </div>
            <div class="right flex justify-between text-[14px]">
            <p class="mb-2">Assignee: <span class="assignee"> ${issue.assignee} </span></p>
            <p>Updated:${new Date(issue.updatedAt).toLocaleDateString()}</p>
            </div>
            
            </div>
        </div>
        `
        display.appendChild(div) 
        
        }
        spinner(false)
        
        const priority = document.querySelectorAll('.priority')
         for(let p of priority){
            if(p.innerText === 'MEDIUM')
                p.classList.add('medium-btn')
            if(p.innerText === 'LOW')
                p.classList.add('low-btn')
            }
            
}

const labels = document.querySelectorAll('.labels')
    for(let label of labels){
        if(label.innerText === 'ENHANCEMENT'){
            label.classList.add('enhancement')
            
        }
        if(label.innerText === 'HELP WANTED'){
            label.classList.add('help')
        }
        if(label.innerText === 'GOOD FIRST ISSUE'){
            label.classList.add('good')
        }
     
    }
    const assignee = document.querySelectorAll('.assignee')
    for(let a of assignee){
       if(a.innerText === ''){
       a.innerText = 'Unassigned'
       }
      } 
    const newDiv = document.querySelectorAll('.issues')
     document.getElementById('totalissues').innerText = newDiv.length 
    
        }
    }
const closeData=()=>{
    spinner(true)
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues'
    fetch(url)
    .then(res=>res.json())
    .then(data=>issueDisplay(data.data)
    )
        const issueDisplay = (arr)=>{
       for(let issue of arr){
        const labels = issue.labels
        const newLabels = labels.map(el=>`<a class="labels bg-red-200 text-red-500 border border-red-500 py-0.5 px-2 rounded-full font-semibold text-[12px]">${el.toUpperCase()}</a>`)
        const allNewLabels = newLabels.join(" ")
     
        const display = document.getElementById('allissuedisplay')
        const div = document.createElement('div')
        if(issue.status === 'closed'){
            div.innerHTML = `
        <div id="issue" onclick="showCloseData(${issue.id})" class="issues bg-white rounded-lg shadow border-t-6 border-t-purple-500 h-full">
            <div class="topcontents p-4">
            <div class="topcontentnav flex justify-between items-center mb-3">
                <div class="topcontentimg"><img src="images/Closed- Status .png" alt=""></div>
                <p class="priority bg-red-100 text-red-500 px-[27px] py-1 rounded-full">${issue.priority.toUpperCase()}</p>
            </div>
            <h1 class="font-semibold mb-2">${issue.title}</h1>
            <p class="text-[#64748B] mb-3">${issue.description}</p>
            ${allNewLabels}
            </div>
            <hr class=" border-gray-200 border">
            <div class="bottomcontent p-4 text-[#64748B]">
           <div class="left flex justify-between text-[14px]">
            <p class="mb-2">#${issue.id} by ${issue.author}</p>
            <p>${new Date(issue.createdAt).toLocaleDateString()}</p>
            </div>
            <div class="right flex justify-between text-[14px]">
            <p class=" mb-2">Assignee: <span class="assignee"> ${issue.assignee} </span></p>
            <p>Updated:${new Date(issue.updatedAt).toLocaleDateString()}</p>
            </div>
            </div>
        </div>
        `
        display.appendChild(div) 
       }
       spinner(false)
        const priority = document.querySelectorAll('.priority')
         for(let p of priority){
            if(p.innerText === 'MEDIUM')
                p.classList.add('medium-btn')
            if(p.innerText === 'LOW')
                p.classList.add('low-btn')
            } 

}
const labels = document.querySelectorAll('.labels')
    for(let label of labels){
        if(label.innerText === 'ENHANCEMENT'){
            label.classList.add('enhancement')
            
        }
        if(label.innerText === 'HELP WANTED'){
            label.classList.add('help')
        }
        if(label.innerText === 'GOOD FIRST ISSUE'){
            label.classList.add('good')
        }
     
    }
    const assignee = document.querySelectorAll('.assignee')
    for(let a of assignee){
       if(a.innerText === ''){
       a.innerText = 'Unassigned'
       }
      }
const newDiv = document.querySelectorAll('.issues')
     document.getElementById('totalissues').innerText = newDiv.length

     
        }}
loadData();

