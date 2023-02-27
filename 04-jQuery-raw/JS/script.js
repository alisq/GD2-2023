

// alert('hello world')
// console.log('hello, console!')

// selector



let dS = 0;

let i = 0;
while (i <= 100) {
    $("<div class='rect'></div>").appendTo(".grid-container");
    i=i+1;
}



$('.rect').click( function(){
    //alert("hello, rectangle")
    

    // if ($(this).hasClass("clicked")) {
    //     $(this).removeClass("clicked")
    // } else {
    //     $(this).addClass("clicked")
    // }

    $(this).toggleClass("clicked")
})

$(document).scroll(function(){
    dS = $(document).scrollTop();
    $("#distance-scrolled").text(dS)
})