const router = require('express').Router()
const db = require('../../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authLockedRoute = require('./authLockedRoute')

// USER ROUTES ------>>
// GET /users - test endpoint
router.get('/', (req, res) => {
  res.json({ msg: 'welcome to the users endpoint' })
})

// GET /auth-locked - will redirect if bad jwt token is found
router.get('/auth-locked', authLockedRoute, (req, res) => {
  res.json( { msg: 'welcome to the private route!' })
})

// GET /users/:userId - show specific user
router.get('/:userId', async (req, res) => {
  try {
    const user = await db.User.findById(req.params.userId)
    res.json(user)
  } catch(err) {
    console.log(err)
    res.status(500).json({ message: 'internal server error' })
  }
})

// POST /users/register - CREATE new user
router.post('/register', async (req, res) => {
  try {
    // check if user exists already
    const findUser = await db.User.findOne({
      email: req.body.email
    })

    // don't allow emails to register twice
    if(findUser) return res.status(400).json({ msg: 'email exists already' })
  
    // hash password
    const password = req.body.password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds)
  
    // create new user
    const newUser = new db.User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
  
    await newUser.save()

    // create jwt payload
    const payload = {
      name: newUser.name,
      email: newUser.email, 
      id: newUser.id
    }

    // sign jwt and send back
    const token = await jwt.sign(payload, process.env.JWT_SECRET)

    res.json({ token })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'server error'  })
  }
})

// PUT /users/:userId -- update a single user
router.put('/:userId', async (req, res) => {
  try {
    const options = { new: true }
    const updateUser = await db.User.findByIdAndUpdate(req.params.userId, req.body, options)
    res.json(updateUser)
  } catch(err) {
    console.log(err)
    res.status(500).json({ message: 'internal server error' })
  }
})


// POST /users/login -- validate login credentials
router.post('/login', async (req, res) => {
  try {
    // try to find user in the db
    const foundUser = await db.User.findOne({
      email: req.body.email
    })

    const noLoginMessage = 'Incorrect username or password'

    // if the user is not found in the db, return and sent a status of 400 with a message
    if(!foundUser) return res.status(400).json({ msg: noLoginMessage })
    
    // check the password from the req body against the password in the database
    const matchPasswords = await bcrypt.compare(req.body.password, foundUser.password)
    
    // if provided password does not match, return an send a status of 400 with a message
    if(!matchPasswords) return res.status(400).json({ msg: noLoginMessage })

    // create jwt payload
    const payload = {
      name: foundUser.name,
      email: foundUser.email, 
      id: foundUser.id
    }

    // sign jwt and send back
    const token = await jwt.sign(payload, process.env.JWT_SECRET)

    res.json({ token })
  } catch(error) {
    console.log(error)
    res.status(500).json({ msg: 'server error'  })
  }
})

// DELETE /users/:userId -- destroy a user
router.delete('/:userId', async (req, res) => {
  try {
    await db.User.findByIdAndDelete(req.params.userId)
    res.sendStatus(204)
  } catch(err) {
    console.log(err)
    res.status(500).json({ message: 'internal server error' })
  }
})

// CART ROUTES ------>>
// GET /users/:userId - show specific user then show their shoppingcart
router.get('/:userId/cart', async (req, res) => {
  try {
    const user = await db.User.findById(req.params.userId)
    res.json(user.shoppingCart)
  } catch(err) {
    console.log(err)
    res.status(500).json({ message: 'internal server error' })
  }
})

// PUT /users/:userId/cart/:courseId - add items to cartArray in User
router.put('/:userId/cart/:courseId', async (req, res) => {
  try {
    // find the user 
    const user = await db.User.findById(req.params.userId)
    // pull course ID
    const course = await db.Course.findById(req.params.courseId)
    // add courseID to updatedUserCart Array
    user.shoppingCart.push(course._id)
    user.save()
    res.json(user.shoppingCart)

  } catch(err) {
    console.log(err)
    res.status(500).json({ message: 'internal server error' })
  }
})
// pull _id

// PUT /users/:userId/cartcourseId - checkout button / clear cart / add to purchases
router.put('/:userId/cart', async (req, res) => {
  try {
    // find the user 
    const user = await db.User.findById(req.params.userId)
    // iterate the array
    // moves items from shopping cart to purchased courses
    user.shoppingCart.forEach(course => {
      user.purchasedCourses.push(course._id)
    })
    user.shoppingCart = []
    user.save()
      res.json(user.shoppingCart)
  } catch(err) {
    console.log(err)
    res.status(500).json({ message: 'internal server error' })
  }
})

// PUT - ability to remove items off cart
router.put('/:userId/cart/:courseId/remove', async (req, res) => {
  try {
    // find the user 
    const user = await db.User.findById(req.params.userId)
    // delete items from shopping cart
    const course = await db.Course.findById(req.params.courseId)

    user.shoppingCart.pull(course)

    user.save()
      res.json(user.shoppingCart)
  } catch(err) {
    console.log(err)
    res.status(500).json({ message: 'internal server error' })
  }
})

module.exports = router