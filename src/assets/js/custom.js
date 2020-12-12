/*
Function: Fixed top menu and add class or remove class when scrolling
*/
$(window).scroll(function(){
    if ($(this).scrollTop() > 60){
        $('header').addClass('header-fixed-in shadow-sm').removeClass('header-fixed-out');
    }else{
        $('header').addClass('header-fixed-out').removeClass('header-fixed-in shadow-sm');
    }
})



// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict';
//     window.addEventListener('load', function () {
//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         var forms = document.getElementsByClassName('needs-validation');
//         // Loop over them and prevent submission
//         var validation = Array.prototype.filter.call(forms, function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (form.checkValidity() === false) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                 }
//                 form.classList.add('was-validated');
//             }, false);
//         });
//     }, false);
// })();

// // Fixed top Navbar after scrolling
// if ($(window).width() > 992){
//     $(window).scroll(function (){
//         if($(this).scrollTop() > 40){
//             $('header').addClass('.header-fixed');
//             $('#navbar-top').addClass('fixed-top');

//             $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
//         }else{
//             $('header').removeClass('.header-fixed');
//             $('#navbar-top').removeClass('fixed-top');
//             $('body').css('padding-top', '0');
//         }
//     });
// }

// // //Loading
// // $('body').append('<div id="preloader"><div id="loader"></div></div>');
// // $('window').on('load', function(){
// //     setTimeout(removeLoading, 5000);
// // })

// // function removeLoading(){
// //     $('#preloader').fadeOut(500, function(){
// //         $('#preloader').remove();
// //     });
// // }