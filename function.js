function monthlyState() {
    $('#arcade-subtitle').html('$9/mo');
    $('#advanced-subtitle').html('$12/mo');
    $('#pro-subtitle').html('$15/mo');
    $('.monthly-toggle').css("color","hsl(213, 96%, 18%)");
    $('.plan-bonus').css("display","none")
    $('.step-2-box').css("height","60%")
}

function yearlyState() {
    $('#arcade-subtitle').html('$90/yr');
    $('#advanced-subtitle').html('$120/yr');
    $('#pro-subtitle').html('$150/yr');
    $('.yearly-toggle').css("color","hsl(213, 96%, 18%)");
    $('.monthly-toggle').css("color","");
    $('.plan-bonus').css("display","")
    $('.step-2-box').css("height","67.5%")
}

$(function() {

    $('#step-2').show();

    monthlyState();

    $('#monthly-year-toggle').change(function() {

        if (this.checked) {
            yearlyState()

        } else {
            monthlyState();
            $('.yearly-toggle').css("color","");
            
        }

    })

})