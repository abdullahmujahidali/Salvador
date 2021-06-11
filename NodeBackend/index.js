var admin = require('firebase-admin');
var serviceAccount = require("./salvadorreactnative-firebase-adminsdk-pu5fu-4c567df9e6.json");
admin.initializeApp({ 
    credential: admin.credential.cert(serviceAccount) 
});

const message={
    notification:{
        title: "Ahoy!",
        body: "New Pet up for Adoption"
    },
    token: ''
}
admin.messaging().send()