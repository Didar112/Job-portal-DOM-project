

let appliedList =[]
let interviewList =[]
let rejectedList=[]




const total = document.getElementById('totalCount');
const applied=document.getElementById('appliedCount');
const inter=document.getElementById('interCount');
const reject=document.getElementById('rejectCount');

const availjobCount = document.getElementById('available-jobs')


const filsec=document.getElementById("filtered-sec")

// all job container
const jobContainer = document.getElementById("all-job-container")

// filter buttons 

const allbtn=document.getElementById("all-btn")
const appliedBtn=document.getElementById("applied-btn")
const interBtn=document.getElementById("inter-btn")
const rejectBtn=document.getElementById("reject-btn")

const Jobs=document.getElementById('all-job-container')

// Update total counts in every chart
function updateTotal(){
    total.innerText=Jobs.children.length
    availjobCount.innerText=Jobs.children.length
    console.log(total.innerText)

    applied.innerText=appliedList.length
    inter.innerText=interviewList.length
    reject.innerText=rejectedList.length
}

updateTotal()


// toggle mechanism

function toggleEngine(id){
    allbtn.classList.remove("bg-blue-400", "text-white")
    appliedBtn.classList.remove("bg-blue-400", "text-white")
    interBtn.classList.remove("bg-blue-400", "text-white")
    rejectBtn.classList.remove("bg-blue-400", "text-white")

    document.getElementById(id).classList.add("bg-blue-400", "text-white")

    if(id==='all-btn'){
        filsec.classList.add('hidden')
        Jobs.classList.remove('hidden')
    }

    if(id==='inter-btn'){
        filsec.classList.remove('hidden')
        Jobs.classList.add('hidden')
    }


    if(id==='reject-btn')
    {

    }
}




// event delegation
jobContainer.addEventListener("click", function(event){
      if(event.target.classList.contains('int-btn'))
      {
        const currentJob=event.target.parentNode
      const comName = currentJob.querySelector('.comp-name').innerText
      const post=currentJob.querySelector('.post').innerText
      const salary=currentJob.querySelector('.salary').innerText
      const aplBtn=currentJob.querySelector('.appl-btn').innerText
      const jobDes=currentJob.querySelector('.job-des').innerText
      const intBtn=currentJob.querySelector('.int-btn').innerText
      const rejBtn=currentJob.querySelector('.rej-btn').innerText

      const jobCardObj = {
        comName,
        post,
        salary,
        aplBtn,
        jobDes,
        intBtn,
        rejBtn
      }


       const filter=interviewList.find(item=> item.comName==jobCardObj.comName)

       if(!filter){
        interviewList.push(jobCardObj)
       }

       inter.innerText=interviewList.length
       currentJob.querySelector('.appl-btn').innerText="INTERVIEWED" 
       
       console.log(interviewList);



       renderInterview()
      }


})


function renderInterview ()
{
    filsec.innerHTML=''

    for(let item of interviewList){
        console.log(item);
        let div=document.createElement('div')
        div.innerHTML= `

             <div class="job-holder mt-3">
            <div class="job-card p-6 bg-base-100 rounded-md">
                <div class="card-header flex align-middle justify-between">
                    <div>

                        <p class="comp-name text-[#002C5C] text-[17px] font-medium">Mobile First Corp</p>
                        <p class=" post text-[#64748B]  text-[17px] font-light">React Native Developer</p>
                    </div>
                    <div id="delete-1" class="delete">

                        <i class="fa-regular fa-trash-can"></i>
                    </div>

                </div>
                <p class="salary text-[#64748B] pt-5 pb-4">Remote • Full-time • $130,000 - $175,000</p>

                <button class="appl-btn btn font-medium text-[#002C5C] bg-[#EEF4FF] hover:bg-blue-400 w-[150px] border-0">INTERVIEWED</button>
                <p class="job-des text-[#002C5C]  text-[15px] font-light mt-2 mb-4">Build cross-platform mobile applications
                    using React Native. Work on products used by millions of users worldwide.</p>

                <button
                    class="int-btn btn font-medium text-green-400 bg-[#EEF4FF] hover:bg-green-400 hover:text-white w-[120px] border-emerald-400 bg-transparent">INTERVIEW</button>
                <button
                    class=" rej-btn btn font-medium text-red-500 bg-[#EEF4FF] hover:bg-red-400 hover:text-white w-[120px] border-red-400 bg-transparent">REJECTED</button>


            </div>
        </div>
        
        
        `
        filsec.appendChild(div)
    }

    
}



 