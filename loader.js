function loader(){
    load = setTimeout(showPage, 1000);
}
function showPage(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
}