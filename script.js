

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
        const labels = issue.labels
        const newLabels = labels.map(el=>`<a class="labels bg-red-200 text-red-500 border border-red-500 py-0.5 px-2 rounded-full font-semibold text-[12px]">${el.toUpperCase()}</a>`)
        const allNewLabels = newLabels.join(" ")
     
        const display = document.getElementById('allissuedisplay')
        const div = document.createElement('div')
        if(issue.status === 'open'){
             div.innerHTML = `
        <div id='issue' class="issues bg-white rounded-lg shadow border-t-6 border-t-green-500 h-full">
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
        <div id='issue' class="issues bg-white rounded-lg shadow border-t-6 border-t-purple-500 h-full">
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
}

loadData();