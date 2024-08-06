console.log("loaded project.js");

let project_container = document.getElementsByClassName('project-container');

for (let i = 0; i < 18; i++) {
    let cards = document.createElement('div');
    cards.className = `project`;
    cards.id = `p_${i}`;
    let content =`
    <div class="project-image"></div>
    <div class="project-content">
        <h1>Project ${i}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum sapiente eos ex dolore ipsam eaque, quisquam reiciendis molestias autem? Officiis vitae minus assumenda maxime aperiam ex voluptate nihil molestias!</p>
        <a href="#" class="project-link">read more >></a>     
    </div>
    `
    cards.innerHTML = content;
    project_container[0].appendChild(cards);
}


let total = $('.project');
let total_length = total.length;
let current = -1;

$(document).ready(() => {

    // on clicking project card
    $('.project').click((e)=>{
        $(e.target).closest('.project').siblings().removeClass('project-click');
        $(e.target).closest('.project').toggleClass('project-click');
        current = $(e.target).closest('.project').index();
        setTimeout(() => {
            (e.target).closest('.project').scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          }, 150);
    })

    // on hovering over navigation click
    $('.click').hover((e)=>{
        $(e.target).closest('.click').toggleClass('click-hover');
    })

    // on clicking next and prev navigation click
    $('.next').click((e)=>{

        current += 1;
        if (current > total_length - 1) {
            current = 0;
        }

        let card = total.eq(current);
        card.siblings().removeClass('project-click');
        card.toggleClass('project-click');

        setTimeout(() => {
            card[0].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          }, 150);
    })

    $('.prev').click((e)=>{

        current -= 1;
        if (current < 0) {
            current = total_length - 1;
        }

        let card = total.eq(current);
        card.siblings().removeClass('project-click');
        card.toggleClass('project-click');

        setTimeout(() => {
            card[0].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          }, 150);
    })
})