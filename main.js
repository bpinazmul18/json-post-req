function get() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

        .then((response) => response.json())
        .then((obj) =>{
            for(var i in obj) {
                $("#result").append(`<p>${obj[i].body}</p>`);
            }
        })
}



function email() {
    fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

        .then((response) => response.json())
        .then((obj) =>{
            // for(var i in obj) {
            //     $("#result").append(`<p>${obj[i].email}</p>`);
            // }
            obj.forEach(value => {
                    $("#result").append(`<p>${value.email}</p>`);
            })
        })
}