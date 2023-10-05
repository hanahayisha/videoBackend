// import json server
const jsonserver=require('json-server')

//server creation
const server=jsonserver.create()

//parse json data to js--uses middleware
const middleware=jsonserver.defaults()


//router creation
const router=jsonserver.router("db.json")
//port
const PORT=process.env.PORT || 4000

//use that middleware
server.use(middleware)
//router use
server.use(router)
//listen
server.listen(PORT,()=>{
    console.log(`Json Server Started At Port number ${PORT}`);
})

