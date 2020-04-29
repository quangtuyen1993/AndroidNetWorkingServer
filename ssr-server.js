const express=require('express')
const next=require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
var cookieParser = require('cookie-parser');
var logger = require('morgan')
/**
 * Connect DB
 */
require("./src/database")

const bodyParser=require('body-parser')

app.prepare()
    .then(()=>{
        const server =express()
        server.use(bodyParser.json())
        server.use(bodyParser.urlencoded({ extended: true }));     
        server.use(express.json());
        server.use(logger('dev'))
        server.use(cookieParser())
        server.use("/api",require('./src/router/CustomerRouter'))
        server.use('/api/product',require('./src/router/Product'))
        server.use("/customer",require("./src/router/CustomerRouter"))
        server.use("/api/productType",require('./src/router/ProductTypeRouter'))
        server.get('/about',(req,res)=>{
            res.status(200).send({
                user:"quang tuyen"
            })
        })
        server.get('/',(req,res)=>{
            const actualPage="/index"
            app.render(req,res,actualPage)
        })
        server.get('*',(req,res)=>{
            return handle(req,res)
        })

        server.listen(3000,(err)=>{
            if (err) throw err
            console.log('>Ready on http')
        })
    })
    .catch((ex)=>{
        console.log(ex.stack)
        process.exit(1)
    })