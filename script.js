const sections = $('.section');
const sectBtns = $('.controls');
const sectBtn = $('.control');
const allSections = $('.main-content');
var themeBtn = $('.theme-btn');
const sunIcon = $('.fa-solid.fa-sun');
const moonIcon = $('.fa-solid.fa-moon');

function PageTransition(){
    //button of active class is clicked
    sectBtn.click(function() {
        let currentBtn = $('.active-btn');
        currentBtn.removeClass('active-btn');
        $(this).addClass('active-btn');
    });

    //Sections active
    allSections.on('click', function(e) {
        const id = $(e.target).data('id');
        if (id) {
            // remove 'active' class from other buttons
            sectBtns.removeClass('active');

            // add 'active' class to the clicked button
            $(e.target).addClass('active');

            // hide other sections
            sections.removeClass('active');

            const ele = $('#' + id);
            ele.addClass('active');

        }
    });   
}

themeBtn.click(function() {
    sunIcon.toggleClass("hidden");
    moonIcon.toggleClass("hidden");

    //toggle theme
    $('body').toggleClass("light-mode");
});

PageTransition();