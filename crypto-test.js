const bcrypt = require("bcryptjs");

const testCrypto = async () => {
    try {
        // when a user is registering, we need to make a hash of their password
        const password = "hello";
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log(hashedPassword);
        const matchPasswordBool = await bcrypt.compare("hello", hashedPassword);
        console.log(matchPasswordBool)
    }
    catch (error) {
        console.log(error);
    }
}
testCrypto();

// same hash output every time - not as good for passwords (^ bcrypt adds some salt each hashing)
const { createHash } = require("crypto");
const hash = createHash("sha256");
hash.update("hello");
const digest = hash.digest("hex");
// console.log(digest);
