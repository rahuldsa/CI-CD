const app=require('express')()

app.get('/',(req,res)=>{
    res.send('success!')
})

app.listen(4500,()=>{
    console.log('app is live on 4500');
})