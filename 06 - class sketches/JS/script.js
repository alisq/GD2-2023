// THIS IS FOR DIMA...
// BELOW IS THE BRUTE FORCE METHOD
// AFTER THAT IS THE SIMPLER BUT MORE TECHNICAL METHOD TO DO THE SAME THING

$(".tab1").click(function(){
    $(".folder2, .folder3, .folder4").css({"z-index":0})
    $(".folder1").css({"z-index":1})
})

$(".tab2").click(function(){
    $(".folder1, .folder3, .folder4").css({"z-index":0})
    $(".folder2").css({"z-index":1})
})

$(".tab3").click(function(){
    $(".folder1, .folder2, .folder4").css({"z-index":0})
    $(".folder3").css({"z-index":1})
})

$(".tab4").click(function(){
    $(".folder1, .folder2, .folder3").css({"z-index":0})
    $(".folder4").css({"z-index":1})
})




// $(".tab").click(function(){
//     $(".folder").css({"z-index":0})
//     folderClass = ".folder" + $(this).attr("class").replace("tab tab","");    
//     $(folderClass).css({"z-index":1})
// })


//THIS IS FOR ANOSHA

$('.open-close').click(function(){
    $("#side-menu").toggleClass("active");
})