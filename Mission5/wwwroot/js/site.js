// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    // Event handler for the Calculate button
    $('#calculate-button').click(function () {
        // Get the value of hours and validate it
        var hours = $('#hours').val();
        if (hours <= 0 || isNaN(hours)) {
            $('#hours-error').show();
            $('#total').val('');
        } else {
            $('#hours-error').hide();

            // Get the hourly rate and convert it to a number
            var rate = parseFloat($('#rate').val());

            // Calculate the total
            var total = hours * rate;

            // Display the total
            $('#total').val(total);
        }
    });
});