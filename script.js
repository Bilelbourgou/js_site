let english = document.getElementById("english");
let arabic = document.getElementById("arabic");
let alert = document.getElementById("alert");
let cardtitle = document.getElementById("card-title");
let cardtext = document.getElementById("card-text");
let btn = document.getElementById("btn");
let title = document.getElementById("title")
english.onclick = ()=>{
    setLanguage("english") 
    localStorage.setItem("lang","english")   
};
arabic.onclick = ()=>{
    setLanguage("arabic") 
    localStorage.setItem("lang","arabic") 
};
onload = () =>{
    setLanguage(localStorage.getItem("lang"))
}
function setLanguage(getLanguage){
    if(getLanguage === "arabic"){
        alert.innerHTML = "مرحبا بك في موقعنا";
        title.innerHTML = "حولنا"
        cardtitle.innerHTML = "نحن الأفضل";
        cardtext.innerHTML = "أعلى شكل للياقة البدنية هو أفضل مكان إذا كنت ترغب في تحسين نفسك ";
        btn.innerHTML = "إبحث عنا"
        
    }else if (getLanguage === "english"){
        alert.innerHTML = "Welcome to our Site";
        title.innerHTML = "about-us"
        cardtitle.innerHTML = "WE ARE THE BEST";
        cardtext.innerHTML = "Top form fitness is the best place if want to improve yourself";
        btn.innerHTML = "Find Us"
    }
    
};