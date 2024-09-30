import { rest } from 'msw';


export const handlers = [
    rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, name: 'John Doe' },
                { id: 2, name: 'Jane Doe' }, 
                { id: 3, name: 'Rohit' }, 
                { id: 4, name: 'Mohit' }, 
            ])
        );
    })
]



// import { http, HttpResponse } from "msw"


// export const handlers = [
//     http.get("https://jsonplaceholder.typicode.com/users", () => {
//         return HttpResponse.json(
//             [
//                 { id: 1, name: 'John Doe' },
//                 { id: 2, name: 'Jane Doe' }, 
//                 { id: 3, name: 'Rohit' }, 
//                 { id: 4, name: 'Mohit' }, 
//             ]
//         ),{status: 200}
//     })
// ]