let btn = document.getElementById("mainBtn");
let adviceId = document.getElementById("advice-number");
let advice = document.getElementById("advice");

let fetchAdvice = async()=>{ 
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    adviceId.innerHTML = `Advice #${data.slip.id}`
    advice.innerHTML = `&#8220 ${data.slip.advice} &#8221`
    
} 
btn.addEventListener("click",()=>{
    
    fetchAdvice()
})

