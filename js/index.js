    $(".clickable1").click(function(){
        $(".clickable1").toggle()
        $(".description1").toggle();
    })

    $(".clickable2").click(function(){
        $(".clickable2").toggle()
        $(".description2").toggle();
    })

    $(".clickable3").click(function(){
        $(".clickable3").toggle()
        $(".description3").toggle();
    })

    $(".description1").click(function(){
        $(".description1").toggle()
        $(".clickable1").toggle();
    })

    $(".description2").click(function(){
        $(".description2").toggle()
        $(".clickable2").toggle();
    })

    $(".description3").click(function(){
        $(".description3").toggle()
        $(".clickable3").toggle();
    })

    



    
// showing a hidden image
// $(document).ready(function(){
//     $("p").click(function(){
//         $("img").show();
//     })
// })