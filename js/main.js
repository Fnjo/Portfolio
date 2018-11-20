/**
 * Created by Fnjo on 13/09/2018.
 */

// $(document).ready(function(){
//     //window.scrollTo(0,document.querySelector(".jumbotron").scrollHeight);
//     // $(this).scrollTop(0);
//     window.scrollTo(0,1);
//
//
//     setTimeout(function(){
//         // window.scrollTo(0,document.querySelector(".jumbotron").scrollHeight);
//         // $(this).scrollTop(0);
//         window.scrollTo(0,1);
//
//     }, 500);
// });

window.addEventListener("load",function() {
    setTimeout(function(){
        window.scrollTo(0, 1);
    }, 0);

    setTimeout(function(){
        window.scrollTo(0, 1);
    }, 1000);


});


for(var i = 1; i<7; i++) {
    document.querySelector("#project_"+i).addEventListener("click", function () {});
}

var oldID = "filler";

document.addEventListener('click', function (event) {

    var clickedID = event.target.id;
    var clickedClass = event.target.className;

    // Log the clicked element in the console
    // console.log(event.target);
    // console.log("clickedid = "+clickedID);
    // console.log("oldID = "+oldID);
    // console.log(clickedClass);

    if(clickedClass == "toProjects fadeInUp"){
        $(".mainLogo_F").css("animation-delay", "0.1s");
        $(".mainLogo_N").css("animation-delay", "0.3s");
        $(".mainLogo_J").css("animation-delay", "0.5s");
        $(".mainLogo_O").css("animation-delay", "0.7s");
        $(".toProjects").css("animation-delay", "0.1s");
        $(".mainLogo_F, .mainLogo_N, .mainLogo_J, .mainLogo_O, .toProjects").addClass("fadeOut");
        $(".projects-main").css("display", "block");
        // $(".mainLogo_F, .mainLogo_N, .mainLogo_J, .mainLogo_O, .toProjects").removeClass("fadeOut");
        setTimeout(showNextPage, 1000);
    }else if(clickedID == oldID){
        $(".projects-main").find(".width-100").removeClass("width-100");
        $("#projects-0-content").toggleClass("width-100");
        oldID = "filler";
    }else if((clickedID.length < 10) && (clickedID.length > 1)) {
        //console.log(clickedID.length);
        $(".projects-main").find(".width-100").removeClass("width-100");

        $("." + clickedID).toggleClass("width-100");
        oldID = clickedID;
    }else if(clickedClass == "showallbtn"){
        // var windowHeight = (window.innerHeight/4);
        // $(".projects-sub .col-12, .projects-sub .col-6").css("height", windowHeight + "px");
        $(".projects-main").find(".width-100").removeClass("width-100");
        oldID = "none";
    }

}, false);



    // // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    // let vh = window.innerHeight * 0.01;
    // // Then we set the value in the --vh custom property to the root of the document
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
    //
    // // We listen to the resize event
    //     window.addEventListener('resize', () => {
    //         // We execute the same script as before
    //         let vh = window.innerHeight * 0.01;
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
    // });
if(window.innerWidth < 450){
    window.addEventListener('resize', () => {
        var windowHeight = (window.innerHeight/4);
        $(".projects-sub .col-12, .projects-sub .col-6").css("height", windowHeight + "px");
    });
}


$('.LogoContainer').tilt({
    glare: true,
    maxGlare: .5,
    scale: 1.1
});

function showNextPage(){
    window.scrollTo(0,document.querySelector(".projects-main").scrollHeight);
    if(window.innerWidth < 450){
        var windowHeight = (window.innerHeight/4);
        $(".projects-sub .col-12, .projects-sub .col-6").css("height", windowHeight + "px");
    }
    $(".projects-sub").addClass("fadeInRight");
    $("#projects-0-content .row").addClass("fadeInText");
    document.getElementById("jumbo").remove();

}

