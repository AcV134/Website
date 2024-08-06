console.log("loaded blog.js");

let container = document.getElementsByClassName('cards-container');

for (let i = 0; i < 8; i++) {
    let cards = document.createElement('article');
    cards.className = 'cards';
    let content =`
        <h1 class="cards-title">Card ${i}</h1>
        <p class="cards-content">This is a card.</p>
        <a href="blog-${i}" class="cards-link">Read More</a>
    `;
    cards.innerHTML = content;
    container[0].appendChild(cards);
}

$(document).ready(()=>{
    $(".cards").hover((e)=>{
        $(e.target).closest("article").addClass("cards-hover");
        $(e.target).closest("article").nextAll().addClass("cards-after");
    },
    ((e)=>{
        $(e.target).closest("article").removeClass("cards-hover");
        $(e.target).closest("article").nextAll().removeClass("cards-after"); 
    }))

}) 