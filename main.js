(function($) {
    "use strict";

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

        .then((response) => response.json())
        .then((obj) =>{
            for(var i in obj) {
                $('#post').click(function(){
                    $("#result").append(`<p>${obj[i].id}</p>`);
                })
            }
        });


})(jQuery);