const jwt = require("jsonwebtoken");

const jwtTest = () => {
    try {
        // create a jwt payload - data that is encoded
        const payload = {
            // public user info
            name: "Jason",
            id: 0,
            email: "j@c.com"
        }
        // "sign" jwt by supplying a secret to hash in the signature
        const secret = "serverPassword";
        const token = jwt.sign(payload, secret, {expiresIn: "30s"});
        console.log(token)
        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. (head; encoding standard)
        // eyJuYW1lIjoiSmFzb24iLCJpZCI6MCwiZW1haWwiOiJqQGMuY29tIiwiaWF0IjoxNjY1MDgyMjM0fQ. (payload; encoded data)
        // xLBIlEKiad7KktG9ulnwj_eXsBbci2ea4LCfeuEHHDo (signature; hashed w/ payload, so secret cannot be reverse-engineered or payload altered)
        
        // when decoding jwt, check the signature to make sure user's login is valid
        const decode = jwt.verify(token, secret);
        console.log(decode);
    }
    catch (error) {
        console.log(error);
    }
}
jwtTest();
