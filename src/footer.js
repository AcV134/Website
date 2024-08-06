console.log("loaded footer.js");

$("document").ready(()=>{
    $(".footer-link").hover((e)=>{
    $(e.target).closest('a').addClass('footer-hover');
},(e)=>{
    $(e.target).closest('a').removeClass('footer-hover');
});
});



$(".icon-link").hover((e) => {
    console.log(e.target);
    $(e.target).closest("a").addClass('hop');
    $(e.target).closest("a").find('.fg-primary').css('fill', '#F92C85');
    setTimeout(() => {
        $(e.target).closest("a").removeClass('hop');
        $(e.target).closest("a").find('.fg-primary').css('fill', '#5EBEC4'); 
    }, 600);
});