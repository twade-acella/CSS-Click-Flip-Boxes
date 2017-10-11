$('#js-flip-1').toggle(
    function() {
        $('#js-flip-1 .card').addClass('flipped');
    },
    function() { $('#js-flip-1 .card').removeClass('flipped');
    }
);

$('#js-flip-2').bind('click mouseleave', function() {
    $('#js-flip-2 .card').toggleClass('flipped');
});

$('#js-flip-3').bind({
    click: function() {
        $('#js-flip-3 .card').toggleClass('flipped');
    },
    mouseleave: function() {
        $('#js-flip-3 .card').toggleClass('flipped');
    }
});