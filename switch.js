var button = document.getElementById("button")

button.onclick=function(txt){
    document.body.classList.toggle("dark-theme");
    
    txt.target.textContent =="Dark Mode" ? 
    txt.target.textContent = "Light Mode" : 
    txt.target.textContent = "Dark Mode";
}