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
                $("#result").append(`
                            <div class="card mt-4">
                                <a class="card-header" href="https://jsonplaceholder.typicode.com/posts/${obj[i].id} " target="_blank">
                                    <div class="card-title"> ${obj[i].title}</div>
                                </a>
                                <div class="card-body">
                                    ${obj[i].body}
                                </div>
                            </div>`);



            }
        })
}



// function email() {
//     fetch('https://jsonplaceholder.typicode.com/comments', {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//
//         .then((response) => response.json())
//         .then((obj) =>{
//             // for(var i in obj) {
//             //     $("#result").append(`<p>${obj[i].email}</p>`);
//             // }
//             obj.forEach(value => {
//                     $("#result").append(`<p>${value.email}</p>`);
//             })
//         })
// }