import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: "http://localhost:4466",
    secret: 'mysecret'
})

export {prisma as default}


// prisma.query.users(null, '{id name comments {id text}}')
//     .then(res => console.log(JSON.stringify(res, null, 2)))

// const posts = async () => {
//     return await prisma.query.posts(null, '{id title body}')
// }

// console.log(posts().then(res => console.log(res)))
