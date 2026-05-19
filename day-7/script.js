fetch("header.html")
.then(res=>res.text())
.then(data=>{
document.getElementById("header").innerHTML=data;
});

fetch("footer.html")
.then(res=>res.text())
.then(data=>{
document.getElementById("footer").innerHTML=data;
});

let q=1;

function plus(){
q++;
document.getElementById("qty").innerText=q;
}

function minus(){
if(q>1){
q--;
document.getElementById("qty").innerText=q;
}
}

function loadMore(){
document.getElementById("more").style.display="grid";
}