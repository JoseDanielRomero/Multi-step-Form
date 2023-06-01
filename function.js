
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

const planPrices = {
    arcade: 9,
    advanced: 12,
    pro: 15,
    addOn1: 1,
    addOn2: 2,
    addOn3: 2
}

let tiempoPlan = "";
let activePlanPrice;

const readyToSum = {
    '1': 0,
    '2': 0,
    '3': 0
}

function monthlyState() {
    userData.yearly = false;
    $('#arcade-subtitle').html(`$${planPrices.arcade}/mo`);
    $('#advanced-subtitle').html(`$${planPrices.advanced}/mo`);
    $('#pro-subtitle').html(`$${planPrices.pro}/mo`);
    $('.monthly-toggle').css("color","hsl(213, 96%, 18%)");
    $('.plan-bonus').css("display","none")
    $('.step-2-box').css("height","60%")
    $('#addon-1-price').html(`+$${planPrices.addOn1}/mo`);
    $('#addon-2-price').html(`+$${planPrices.addOn2}/mo`);
    $('#addon-3-price').html(`+$${planPrices.addOn3}/mo`);
    tiempoPlan = "Monthly";
}

function yearlyState() {
    userData.yearly = true;
    $('#arcade-subtitle').html(`$${(planPrices.arcade)*10}/yr`);
    $('#advanced-subtitle').html(`$${(planPrices.advanced)*10}/yr`);
    $('#pro-subtitle').html(`$${(planPrices.pro)*10}/yr`);
    $('.yearly-toggle').css("color","hsl(213, 96%, 18%)");
    $('.monthly-toggle').css("color","");
    $('.plan-bonus').css("display","")
    $('.step-2-box').css("height","67.5%")
    $('#addon-1-price').html(`+$${(planPrices.addOn1)*10}/yr`);
    $('#addon-2-price').html(`+$${(planPrices.addOn2)*10}/yr`);
    $('#addon-3-price').html(`+$${(planPrices.addOn3)*10}/yr`);
    tiempoPlan = "Yearly";
}

function summaryTitlePrice(num) {
    if (userData["addOn" + num] == true) {
        $(`#addon-${num}-summary-title`).html($(`#addon-${num}-title`).html());
        $(`#addon-${num}-summary-price`).html($(`#addon-${num}-price`).html());
        readyToSum[num] = planPrices["addOn" + num];
    } else {
        $(`#addon-${num}-summary-title`).html("");
        $(`#addon-${num}-summary-price`).html("");
        readyToSum[num] = 0;
    }
}

// --------------------------ONCLICK EVENTS--------------------------

function verificarStep1() {
    if ( $("#input-name").val().trim().length > 0 && $("#input-email").val().trim().length > 0 && $("#input-phone").val().trim().length > 0 ) {
        $('#step-1').hide();
        $('#step-2').show();
        userData.name = $('#input-name').val();
        userData.email = $('#input-email').val();
        userData.phone = $('#input-phone').val();
    }
    else {
        alert("All fields are required");
    }
  }

  function verificarStep2() {
    if ( userData.plan.length > 0 ) {
        $('#step-2').hide();
        $('#step-3').show();
        if (userData.yearly == true) {
            summaryPlanPrice = (activePlanPrice)*10;
        } else {
            summaryPlanPrice = activePlanPrice;
        }
    }
    else {
        alert("Choose a plan");
    }
  }

// --------------------------------------DOCUMENT.READY--------------------------------------

$(function() {

    $('#step-1').show();

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
        userData.plan = "Arcade";
        activePlanPrice = planPrices.arcade;
    })

    $('#advanced-button').click(function () {
        $(this).addClass("focus");
        $('#arcade-button').removeClass("focus");
        $('#pro-button').removeClass("focus");
        userData.plan = "Advanced";
        activePlanPrice = planPrices.advanced;
    })

    $('#pro-button').click(function () {
        $(this).addClass("focus");
        $('#advanced-button').removeClass("focus");
        $('#arcade-button').removeClass("focus");
        userData.plan = "Pro";
        activePlanPrice = planPrices.pro;
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

        $('#summay-header-plan').html(`${userData.plan} (${tiempoPlan})`);
        if (userData.yearly == true) {
            $('#summay-header-price').html(`$${summaryPlanPrice}/yr`);
        } else {
            $('#summay-header-price').html(`$${summaryPlanPrice}/mo`);
        }

        summaryTitlePrice("1");
        summaryTitlePrice("2");
        summaryTitlePrice("3");

        let sum = (readyToSum["1"]) + (readyToSum["2"]) + (readyToSum["3"]);
        let sum2 = sum*10;
        let totalMonthly = sum + summaryPlanPrice;
        let totalYearly = sum2 + summaryPlanPrice;

        if (userData.yearly == true) {
            $('#total-price').html(`$${totalYearly}/yr`);
            $('#total-time').html("Total (per year)");
        } else {
            $('#total-price').html(`$${totalMonthly}/mo`);
            $('#total-time').html("Total (per month)");
        }

    })

    $('#back-to-step-2').click(function() {
        $('#step-3').hide();
        $('#step-2').show();
    })

    // --------------------------STEP 4--------------------------

    $('#confirm-button').click(function() {
        $('#step-4').hide();
        $('#step-5').show();
        console.log("Se enviaron los siguientes datos:")
        console.log(userData);
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