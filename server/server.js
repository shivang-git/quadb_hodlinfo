const express=require('express')
const app=express()
const port=process.env.PORT || 5000
const path=require('path')
require('ejs')


app.set('views',path.join(__dirname,'../views'));
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/connect/telegram',(req,res)=>{
    res.render('telegram')
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})