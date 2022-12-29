let button=document.getElementsByClassName("sub-btn");
button.addEventListener('click',async function apiCall(){
    let {res}=await fetch('http://localhost:8000/register');
    console.log(res);
})