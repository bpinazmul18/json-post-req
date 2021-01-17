// const xhr = new XMLHttpRequest()
// xhr.open('get', 'https://jsonplaceholder.typicode.com/posts')
//
// xhr.onreadystatechange = e => {
//     if(xhr.readyState == 4) {
//         if(xhr.status == 200) {
//             var response = JSON.parse(xhr.response)
//             console.log(response)
//         }else {
//             console.log(xhr.response)
//         }
//     }
// }
//
// xhr.send();

// function getHttpRequest(url, callback) {
//     var xhr = new XMLHttpRequest()
//     xhr.open('get', url)
//     xhr.onreadystatechange = function(e) {
//         if( xhr.readyState ==4 ) {
//             if(xhr.status == 200) {
//                 let response = JSON.parse(xhr.response)
//                 callback(null, response)
//             }else {
//                 callback(xhr.status, null)
//             }
//         }
//     }
//     xhr.send()
// }
//
// getHttpRequest('https://jsonplaceholder.typicode.com/posts', function (err, res) {
//     if(err) {
//         console.log(err)
//     }else {
//         console.log(res)
//     }
// })
//
// getHttpRequest('https://jsonplaceholder.typicode.com/posts/1', function (err, res) {
//     if(err) {
//         console.log(err)
//     }else {
//         console.log(res)
//     }
// })