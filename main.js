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
                                <div class="card-header"> ${obj[i].title}</div>
                                <div class="card-body">
                                    ${obj[i].body}
                                </div>
                                <div class="footer p-4">
                                    <a href="https://jsonplaceholder.typicode.com/posts/${obj[i].id} " target="_blank">
                                    Read More </a>
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