
const { User, Course } = require('./models')

const main = async () => {

    await User.deleteMany({})
    await Course.deleteMany({})

    const julieann = await User.create({
        name: 'Julieann',
        email: 'julieann@gmail.com',
        password: '1234',
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
      });
    
    const davidallen = await User.create({
        name: 'David Allen',
        email: 'david@gmail.com',
        password: '1234',
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const danielandbritt = await User.create({
        name: 'Daniel and Britt',
        email: 'daniel@gmail.com',
        password: '1234',
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const cecile = await User.create({
        name: 'Cecile',
        email: 'cecile@gmail.com',
        password: '1234',
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });
    
    const kim = await User.create({
        name: 'Kim',
        email: 'kim@gmail.com',
        password: 'to1234fu',
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const course1 = await Course.create({
        title: "Decorated Events",
        createdBy: julieann,
        price: 100,
        description: "Hosted over 50 Picnic Events. Learn the steps needed to create your own event. Help create experiences that will bring joy to others.  Learn the do and don'ts of the business.  Learn how to manage a team and grow as your business grows.  Q&A session at the end of class.",
        photoLink: "https://i.imgur.com/vrMyvlB.png",
        comments: [],
      });

    const course2 = await Course.create({
        title: "Learn how to Start a Clothing Brand",
        createdBy: davidallen,
        price: 50,
        description: "Grossed over $2million in clothing salesLearn how I started as an intern and then started my own distribution company. Learn how to work with local shops and big retailers.  Sales, Marketing, and Business tips.  Learn the importance of connecting to your buyers.  Meet and Greet the team of the Goods Group.",
        photoLink: "https://i.imgur.com/41F8USI.png",
        comments: [],
    });

    const course3 = await Course.create({
        title: "Learn how to be an AirBNB Host",
        createdBy: danielandbritt,
        price: 50,
        description: "Hosted over 50 AirBNB Guests. Learn how we turned our passion into a thriving business. Learn about the personal touch of customer service. Lead with passion and authenticity, then then business aspect will follow.  Learn how we as dreamers are staying true to ourselves.",
        photoLink: "https://i.imgur.com/F1ysIHf.png",
        comments: [],
    });

    const course4 = await Course.create({
        title: "Scuba Diving Introduction",
        createdBy: cecile,
        price: 75,
        description: "Scuba Dived over 20 locations worldwide.  This is an intro to Scuba Diving. Learn what it takes to get certified as a diver.   Dive deep into some fantastic stories of Ocean's magnificent creatures: dolphins, sting rays, whale sharks and many more.  If you're ready to dive into a new world, join today!",
        photoLink: "https://i.imgur.com/SoQxbnG.png",
        comments: [],
    });

    const course5 = await Course.create({
        title: "Success as a Stylist",
        createdBy: kim,
        price: 75, 
        description: "Styled over 300 Clients. Learn the basics of the Hair Styling Business. Learn what classes you need to get certified.  Learn how to manage your book of clients into and a successful business.   Hear stories about working with American's Next Top model.  Q&A Session at the end of class.",
        photoLink: "https://i.imgur.com/GseuijJ.png",
        comments: [],    
    })

    julieann.myCourses.push(course1) 
    await julieann.save()

    davidallen.myCourses.push(course2) 
    await davidallen.save()

    danielandbritt.myCourses.push(course3) 
    await danielandbritt.save()

    cecile.myCourses.push(course4) 
    await cecile.save()

    kim.myCourses.push(course5) 
    await kim.save()

}

main()