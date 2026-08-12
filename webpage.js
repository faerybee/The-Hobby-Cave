const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");

function openTravel ( ) {
    window.open("travel.html" , "_blank");
}
function openFood ( ) {
    window.open("food.html", "_blank");

}

function openBooks ( ) {
    window.open("book.html", "_blank");
}
function openFashionAndBeauty ( ) {
    window.open("lifestyle.html", "_blank");
}

image1.addEventListener("click", openTravel);
image2.addEventListener("click", openFood);
image4.addEventListener("click", openBooks);
image5.addEventListener("click", openFashionAndBeauty);

