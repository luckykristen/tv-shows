const input = document.querySelector(".bar");
const movie = document.querySelectorAll(".item");

input.addEventListener("keyup", function (event) {
    const word = event.target.value.toLowerCase();
    
    movie.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})
