
let userData = {
    name: "",
    email: "",
    phone: 0,
    plan: "",
    yearly: false,
    addOn1: false,
    addOn2: false,
    addOn3: false
}

function monthlyState() {
    userData.yearly = false;
    $('#arcade-subtitle').html('$9/mo');
    $('#advanced-subtitle').html('$12/mo');
    $('#pro-subtitle').html('$15/mo');
    $('.monthly-toggle').css("color","hsl(213, 96%, 18%)");
    $('.plan-bonus').css("display","none")
    $('.step-2-box').css("height","60%")
    $('#addon-1-price').html('+$1/mo');
    $('#addon-2-price, #addon-3-price').html('+$2/mo');
}

function yearlyState() {
    userData.yearly = true;
    $('#arcade-subtitle').html('$90/yr');
    $('#advanced-subtitle').html('$120/yr');
    $('#pro-subtitle').html('$150/yr');
    $('.yearly-toggle').css("color","hsl(213, 96%, 18%)");
    $('.monthly-toggle').css("color","");
    $('.plan-bonus').css("display","")
    $('.step-2-box').css("height","67.5%")
    $('#addon-1-price').html('+$10/yr');
    $('#addon-2-price, #addon-3-price').html('+$20/yr');
}

$(function() {

    $('#step-1').show();

// --------------------------STEP 1--------------------------

    $('#next-to-step-2').click(function() {
        $('#step-1').hide();
        $('#step-2').show();
        userData.name = $('#input-name').val();
        userData.email = $('#input-email').val();
        userData.phone = $('#input-phone').val();
        console.log(userData)
    })

// --------------------------STEP 2--------------------------

    monthlyState();

    $('#monthly-year-toggle').change(function() {

        if (this.checked) {
            yearlyState()
        } else {
            monthlyState();
            $('.yearly-toggle').css("color","");  
        }

    })

    $('#arcade-button').click(function () {
        $(this).addClass("focus");
        $('#advanced-button').removeClass("focus");
        $('#pro-button').removeClass("focus");
        userData.plan = "arcade";
    })

    $('#advanced-button').click(function () {
        $(this).addClass("focus");
        $('#arcade-button').removeClass("focus");
        $('#pro-button').removeClass("focus");
        userData.plan = "advanced";
    })

    $('#pro-button').click(function () {
        $(this).addClass("focus");
        $('#advanced-button').removeClass("focus");
        $('#arcade-button').removeClass("focus");
        userData.plan = "pro";
    })

    $('#next-to-step-3').click(function() {
        $('#step-2').hide();
        $('#step-3').show();
        console.log(userData);
    })

    $('#back-to-step-1').click(function() {
        $('#step-2').hide();
        $('#step-1').show();
    })

    // --------------------------STEP 3--------------------------

    $('#check-addon-1').change(function() {

        if (this.checked) {
            $('#addon-1').addClass("focus");
            userData.addOn1 = true;
        } else {
            $('#addon-1').removeClass("focus");
            userData.addOn1 = false;
        }

    })

    $('#check-addon-2').change(function() {

        if (this.checked) {
            $('#addon-2').addClass("focus");
            userData.addOn2 = true;
        } else {
            $('#addon-2').removeClass("focus");
            userData.addOn2 = false;
        }

    })

    $('#check-addon-3').change(function() {

        if (this.checked) {
            $('#addon-3').addClass("focus");
            userData.addOn3 = true;
        } else {
            $('#addon-3').removeClass("focus");
            userData.addOn3 = false;
        }

    })

    $('#next-to-step-4').click(function() {
        $('#step-3').hide();
        $('#step-4').show();
        console.log(userData);
    })

    $('#back-to-step-2').click(function() {
        $('#step-3').hide();
        $('#step-2').show();
    })

    // --------------------------STEP 4--------------------------

    $('#confirm-button').click(function() {
        $('#step-4').hide();
        $('#step-5').show();
    })

    $('#back-to-step-3').click(function() {
        $('#step-4').hide();
        $('#step-3').show();
    })

    $('#change-button').click(function() {
        $('#step-4').hide();
        $('#step-2').show();
    })

    

})