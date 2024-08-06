console.log("loaded navbar.js");

$("document").ready(()=>{$(".nav-item").hover((e)=>{
    console.log(e.target);
    $(e.target).closest('li').addClass('item-hover');
    $(e.target).closest('li').find('.nav-link').addClass('link-hover');
},(e)=>{
    $(e.target).closest('li').removeClass('item-hover');
    $(e.target).closest('li').find('.nav-link').removeClass('link-hover');
})});

$("document").ready(()=>{
    $(".nav-item").click((e)=>{
    e.preventDefault();
    window.location.href = $(e.target).closest('li').find('.nav-link').attr('href');
})});