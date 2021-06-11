var admin = require('firebase-admin');
const express = require('express')
const app = express()
var serviceAccount = require("./salvadorreactnative-firebase-adminsdk-pu5fu-4c567df9e6.json");
const port=3000

app.use(express.json())

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

app.get('/',(req,res)=>res.send('hello world'));

app.post('/send-notification', (req, res) => {
    console.log(req.body)

    const message = {
        notification: {
            title: 'Ahoy!',
            body: 'New Pet up for Adoption',
        },
        tokens: req.body.tokens,
    };
    admin.messaging().sendMulticast(message).then(res => {
        console.log('send scuccess');
    }).catch(err => {
        console.log(err)
    })

})

app.listen(process.env.PORT || port,()=>{
    console.log('Node JS server is running')
})
