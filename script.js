// ================= HEADER FOOTER LOAD =================

fetch("header.html")
.then(response => response.text())
.then(data => {
    document.getElementById("header").innerHTML = data;
});

fetch("footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;

    // SCROLL BUTTON AFTER FOOTER LOAD

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if(document.documentElement.scrollTop > 200){
            topBtn.style.display = "block";
        }
        else{
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

});

// ================= CART QUANTITY =================

let qty = 1;

function increaseQty(){

    qty++;

    document.getElementById("qty").innerText = qty;

    updatePrice();

}

function decreaseQty(){

    if(qty > 1){

        qty--;

        document.getElementById("qty").innerText = qty;

        updatePrice();

    }

}

function updatePrice(){

    let price = 99;

    let total = price * qty;

    let totalPrice = document.getElementById("totalPrice");

    if(totalPrice){
        totalPrice.innerText = "$" + total;
    }

}

// ================= LOAD MORE =================

const loadBtn = document.getElementById("loadMore");

if(loadBtn){

loadBtn.addEventListener("click", () => {

    const hiddenCourses = document.querySelectorAll(".hidden-course");

    hiddenCourses.forEach(course => {

        course.style.display = "block";

    });

    loadBtn.style.display = "none";

});

}