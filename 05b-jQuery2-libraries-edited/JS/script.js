$('.firstRect').click(function(){
    $.scrollTo('#rect17', 2600, {
        offset:-70
    })
})


$('#rect17').click(function(){
    $.scrollTo('.firstRect', 2600, {
        offset:-70
    })
})

$('#gd2010').flickity({
    draggable: false,
    wrapAround: true
})

$('.slideshow-link').click(function(){
    $.scrollTo('#gd2010', 600, {
        offset:-70
    })
})