

let appliedList =[]
let interviewList =[]
let rejectedList=[]



let currentStatus='all-btn'


const total = document.getElementById('totalCount');
const applied=document.getElementById('appliedCount');
const inter=document.getElementById('interCount');
const reject=document.getElementById('rejectCount');

const availjobCount = document.getElementById('available-jobs')

let totalJobs=total.innerText


const filsec=document.getElementById("filtered-sec")

// all job container
const jobContainer = document.getElementById("all-job-container")

// filter buttons 

const allbtn=document.getElementById("all-btn")
const appliedBtn=document.getElementById("applied-btn")
const interBtn=document.getElementById("inter-btn")
const rejectBtn=document.getElementById("reject-btn")

const Jobs=document.getElementById('all-job-container')
const jobWrapper = document.getElementById("job-wrapper");
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

    currentStatus=id

    allbtn.classList.remove("bg-blue-400", "text-white")
    appliedBtn.classList.remove("bg-blue-400", "text-white")
    interBtn.classList.remove("bg-blue-400", "text-white")
    rejectBtn.classList.remove("bg-blue-400", "text-white")

    document.getElementById(id).classList.add("bg-blue-400", "text-white")
   
     if(id==='all-btn'){
        filsec.classList.add('hidden')
        Jobs.classList.remove('hidden')
        
            document.querySelector('.no-job-banner').classList.add("hidden")
        
    }

    else if(id==='inter-btn'){
        filsec.classList.remove('hidden')
        Jobs.classList.add('hidden')
        renderInterview()
        
    }


    else if(id==='reject-btn')
    {
        Jobs.classList.add('hidden')
        filsec.classList.remove('hidden')
        renderReject()
        
    }
    
}




// event delegation
jobWrapper.addEventListener("click", function(event){
      if(event.target.classList.contains('int-btn'))
      {
        
        const currentJob=event.target.parentNode
        currentJob.querySelector('.appl-btn').innerText="INTERVIEWED" 
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


       rejectedList = rejectedList.filter(item=>item.comName!=jobCardObj.comName)


       inter.innerText=interviewList.length
       reject.innerText=rejectedList.length

        


        if(currentStatus==='reject-btn'){
            renderReject()
        }

      }


      else if(event.target.classList.contains('rej-btn'))
      {
        const currentJob=event.target.parentNode
        currentJob.querySelector('.appl-btn').innerText="REJECTED" 
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


       const filter=rejectedList.find(item=> item.comName==jobCardObj.comName)

       if(!filter){
        rejectedList.push(jobCardObj)
       }

       interviewList = interviewList.filter(item=>item.comName!=jobCardObj.comName)

       reject.innerText=rejectedList.length
       console.log(rejectedList);
       
       inter.innerText=interviewList.length

    //    renderReject()

       if(currentStatus==='inter-btn'){

           renderInterview()
       }

      }

      else if(event.target.closest('.delete'))
      {

    //     totalJobs=totalJobs-1
        
    //     if(totalJobs<0){
    //         total.innerText=0
    //     } else {
    //         total.innerText=totalJobs
    //     }

    //     const cardHolder=event.target.closest('.job-holder')
    //     let delCard=cardHolder.querySelector('.job-card')
    //     console.log(delCard);
    //     // delCard.classList.add("hidden")
    //     cardHolder.remove()
        
    //    if(currentStatus=='all-btn'){
    //     document.querySelector('.no-job-banner').classList.add("hidden")
    //    }

    //     const card=event.target.closest('.job-card')
    //     const comName=card.querySelector('.comp-name').innerText
    //     const post=card.querySelector('.post').innerText
    //   const salary=card.querySelector('.salary').innerText
    //   const aplBtn=card.querySelector('.appl-btn').innerText
    //   const jobDes=card.querySelector('.job-des').innerText
    //   const intBtn=card.querySelector('.int-btn').innerText
    //   const rejBtn=card.querySelector('.rej-btn').innerText

    //   const deleteObj = {
    //     comName,
    //     post,
    //     salary,
    //     aplBtn,
    //     jobDes,
    //     intBtn,
    //     rejBtn
    //   }

    //   interviewList = interviewList.filter(item=>item.comName!=deleteObj.comName)
    //   inter.innerText=interviewList.length
     
      
      
      


    //   rejectedList = rejectedList.filter(item=>item.comName!=deleteObj.comName)
      
    //   reject.innerText=rejectedList.length
      


     const cardHolder = event.target.closest('.job-holder');  
    const card = cardHolder.querySelector('.job-card'); 
    
    
    cardHolder.remove(); 

    
    total.innerText = document.querySelectorAll('#all-job-container .job-holder').length;
    availjobCount.innerText= document.querySelectorAll('#all-job-container .job-holder').length;
    

    
    const comName = card.querySelector('.comp-name').innerText;

    interviewList = interviewList.filter(item => item.comName !== comName);
    rejectedList = rejectedList.filter(item => item.comName !== comName);

    inter.innerText = interviewList.length;
    reject.innerText = rejectedList.length;

      }

})


// Render interview part function

function renderInterview()
{
    filsec.innerHTML=''


    const banner = document.querySelector('.no-job-banner')

    if (interviewList.length === 0) {
        banner.classList.remove('hidden')
        return
    } else {
        banner.classList.add('hidden')
    }

    



    for(let item of interviewList){
        console.log(item);
        let div=document.createElement('div')
        div.innerHTML= `

             <div class="job-holder mt-3">
            <div class="job-card p-6 bg-base-100 rounded-md">
                <div class="card-header flex align-middle justify-between">
                    <div>

                        <p class="comp-name text-[#002C5C] text-[17px] font-medium">${item.comName}</p>
                        <p class=" post text-[#64748B]  text-[17px] font-light">${item.post}</p>
                    </div>
                    <div id="delete-1" class="delete">

                        <i class="fa-regular fa-trash-can"></i>
                    </div>

                </div>
                <p class="salary text-[#64748B] pt-5 pb-4">${item.salary}</p>

                <button class="appl-btn btn font-medium text-[#002C5C] bg-[#EEF4FF] hover:bg-blue-400 w-[150px] border-0">${item.aplBtn}</button>
                <p class="job-des text-[#002C5C]  text-[15px] font-light mt-2 mb-4">${item.jobDes}</p>

                <button
                    class="int-btn btn font-medium text-green-400 bg-[#EEF4FF] hover:bg-green-400 hover:text-white w-[120px] border-emerald-400 bg-transparent">${item.intBtn}</button>
                <button
                    class="rej-btn btn font-medium text-red-500 bg-[#EEF4FF] hover:bg-red-400 hover:text-white w-[120px] border-red-400 bg-transparent">${item.rejBtn}</button>


            </div>
        </div>
        
        
        `
        filsec.appendChild(div)
    }

    
}




// reject render part

function renderReject()
{
    filsec.innerHTML=''

     if(rejectedList.length==0){
            document.querySelector('.no-job-banner').classList.remove("hidden")
        } else {
            document.querySelector('.no-job-banner').classList.add("hidden")
        }

    for(let item of rejectedList){
        console.log(item);
        let div=document.createElement('div')
        div.innerHTML= `

             <div class="job-holder mt-3">
            <div class="job-card p-6 bg-base-100 rounded-md">
                <div class="card-header flex align-middle justify-between">
                    <div>

                        <p class="comp-name text-[#002C5C] text-[17px] font-medium">${item.comName}</p>
                        <p class=" post text-[#64748B]  text-[17px] font-light">${item.post}</p>
                    </div>
                    <div id="delete-1" class="delete">

                        <i class="fa-regular fa-trash-can"></i>
                    </div>

                </div>
                <p class="salary text-[#64748B] pt-5 pb-4">${item.salary}</p>

                <button class="appl-btn btn font-medium text-[#002C5C] bg-[#EEF4FF] hover:bg-blue-400 w-[150px] border-0">${item.aplBtn}</button>
                <p class="job-des text-[#002C5C]  text-[15px] font-light mt-2 mb-4">${item.jobDes}</p>

                <button
                    class="int-btn btn font-medium text-green-400 bg-[#EEF4FF] hover:bg-green-400 hover:text-white w-[120px] border-emerald-400 bg-transparent">${item.intBtn}</button>
                <button
                    class="rej-btn btn font-medium text-red-500 bg-[#EEF4FF] hover:bg-red-400 hover:text-white w-[120px] border-red-400 bg-transparent">${item.rejBtn}</button>


            </div>
        </div>
        
        
        `
        filsec.appendChild(div)
    }

    
}



 

