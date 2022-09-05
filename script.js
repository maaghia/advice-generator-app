// https://api.adviceslip.com/advice
let adviceID = document.getElementById("advice-id")
let advice = document.getElementById("advice")
const fetchAdvice = async () => {
    try {
        let res = await fetch("https://api.adviceslip.com/advice")
        let info = await res.json();
        console.log(info)
        let data = info.slip;
            
        adviceID.innerHTML = `${data.id}`;
        advice.innerHTML = `"${data.advice}"`
    }   
    catch (error) {
        console.log(error)
    }
}