const cloud_btn = document.getElementById("cloud_btn");
const onsite_btn = document.getElementById("onsite_btn");
const writeup = document.getElementById("writeup");
const diagram = document.getElementById("diagram");

cloud_btn.addEventListener("click", function(){ 
    diagram.src = "assets/cloud.png";
    writeup.src = "assets/cloud_writeup.pdf";
});
onsite_btn.addEventListener("click", function(){ 
    diagram.src = "assets/onsite.png" 
    writeup.src = "assets/onsite_writeup.pdf";
});
