let appliedList =[]
let interviewList =[]
let rejectedList=[]




const total = document.getElementById('totalCount');
const applied=document.getElementById('appliedCount');
const inter=document.getElementById('interCount');
const reject=document.getElementById('rejectCount');

const availjobCount = document.getElementById('available-jobs')

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
}



 