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

function sendEmail(){
    Email.send({
        SecureToken: "335ae31b-a2f4-41d9-bdcb-a1e49ff05524",
        Host : "smtp.elasticemail.com",
        Username : "animesh07singh@gmail.com",
        Password : "F032CBA8187E89D509B9C26FF716BA50A79E",
        To : 'animesh07singh@gmail.com',
        From : $('.emailinput').value,
        Subject : $('.subjectinput').value,
        Body : "Name: " + $('.nameinput').value + "<br> Email: " + $('.emailinput').value + "<br> Message: " + $('.msginput').value,
    }).then(
        message => alert("Message sent successfully!!")
    );
};

PageTransition();