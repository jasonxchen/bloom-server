const bcrypt = require("bcryptjs");
const { User, Course } = require('./models')

const main = async () => {
    const hashedPassword = await bcrypt.hash("123", 12);

    await User.deleteMany({})
    await Course.deleteMany({})

    const julieann = await User.create({
        name: 'Julieann',
        email: 'julieann@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
      });
    
    const davidallen = await User.create({
        name: 'David Allen',
        email: 'david@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const danielandbritt = await User.create({
        name: 'Daniel and Britt',
        email: 'daniel@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const cecile = await User.create({
        name: 'Cecile',
        email: 'cecile@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });
    
    const kim = await User.create({
        name: 'Kim',
        email: 'kim@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const armnhmr = await User.create({
        name: 'ARMNHMR',
        email: 'armnhmr@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
      });

    const carlos = await User.create({
        name: 'Carlos',
        email: 'carlos@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const carol = await User.create({
        name: 'Carol',
        email: 'carol@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const cassy = await User.create({
        name: 'Cassy',
        email: 'tails@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const tails = await User.create({
        name: 'Tails',
        email: 'tails@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const peter = await User.create({
        name: 'Peter',
        email: 'peter@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const ron = await User.create({
        name: 'Ron',
        email: 'ron@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const viet = await User.create({
        name: 'Viet',
        email: 'viet@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const serena = await User.create({
        name: 'Serena',
        email: 'serena@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const amy = await User.create({
        name: 'Amy',
        email: 'amy@gmail.com',
        password: hashedPassword,
        myCourses: [],
        purchasedCourses: [],
        shoppingCart: [],
    });

    const course1 = await Course.create({
        title: "Decorated Events",
        createdBy: julieann,
        price: 100,
        description: "Hosted over 50 Picnic Events. Learn the steps needed to create your own event. Help create experiences that will bring joy to others.  Learn the do and don'ts of the business.  Learn how to manage a team and grow as your business grows.  Q&A session at the end of class.",
        photoLink: "https://i.imgur.com/bbBE46t.png",
        comments: [],
      });
    const course2 = await Course.create({
        title: "Learn how to Start a Clothing Brand",
        createdBy: davidallen,
        price: 50,
        description: "Grossed over $2million in clothing salesLearn how I started as an intern and then started my own distribution company. Learn how to work with local shops and big retailers.  Sales, Marketing, and Business tips.  Learn the importance of connecting to your buyers.  Meet and Greet the team of the Goods Group.",
        photoLink: "https://i.imgur.com/zO2FEG8.png",
        comments: [],
    });
    const course3 = await Course.create({
        title: "Learn how to be an AirBNB Host",
        createdBy: danielandbritt,
        price: 50,
        description: "Hosted over 50 AirBNB Guests. Learn how we turned our passion into a thriving business. Learn about the personal touch of customer service. Lead with passion and authenticity, then then business aspect will follow.  Learn how we as dreamers are staying true to ourselves.",
        photoLink: "https://i.imgur.com/yuRVzkx.png",
        comments: [],
    });
    const course4 = await Course.create({
        title: "Scuba Diving Introduction",
        createdBy: cecile,
        price: 75,
        description: "Scuba Dived over 20 locations worldwide.  This is an intro to Scuba Diving. Learn what it takes to get certified as a diver.   Dive deep into some fantastic stories of Ocean's magnificent creatures: dolphins, sting rays, whale sharks and many more.  If you're ready to dive into a new world, join today!",
        photoLink: "https://i.imgur.com/9m3YclC.png",
        comments: [],
    });
    const course5 = await Course.create({
        title: "Success as a Stylist",
        createdBy: kim,
        price: 75, 
        description: "Styled over 300 Clients. Learn the basics of the Hair Styling Business. Learn what classes you need to get certified.  Learn how to manage your book of clients into and a successful business.   Hear stories about working with American's Next Top model.  Q&A Session at the end of class.",
        photoLink: "https://i.imgur.com/hcl85zZ.png",
        comments: [],    
    })
    const course6 = await Course.create({
        title: "DJ'in on the path to EDC",
        createdBy: armnhmr,
        price: 92,
        description: "DJ'ed at EDC and hundreds of stages all over the world.  Learn how hometown DJ's created a core following.  Learn how to get your spotify noticed.  Networking with the right people and staying true to the music.  Consistency over a long period of time will lead to you the biggest stage",
        photoLink: "https://i.imgur.com/37YVL8P.png",
        comments: [],   
    })
    const course7 = await Course.create({
        title: "Learn about Muay Thai camps  in Thailand",
        createdBy: carlos,
        price: 80,
        description: "Fought in 8 Muay Thai matches in Phuket.  Learn about Muay Thai camps in Thailand.  Tips on the Thai food and the culture of fighting in a foreign land.  Dedication to your craft above all else, sacrifices will be made.  Learn how to keep that mentality while overseas", 
        photoLink: "https://i.imgur.com/xZyT24b.png",
        comments: [],
    })
    const course8 = await Course.create({
        title: "From culinary school to Catering Business",
        createdBy: carol,
        price: 60,
        description: "Catered over 1000's of meals.  Learn how I turned my love for cooking into a career will I can spark joy for others.  Get the right foundation at a proper culinary schools.  After gaining experience you'll be able to go many different routes where it fits your the best.",
        photoLink: "https://i.imgur.com/l6I0T7D.png",
        comments: [], 
    })
    const course9 = await Course.create({
        title: "Intro to Wedding Photography",
        createdBy: cassy,
        price: 50,
        description: "Captured over 50 wedding experiences.  Taking a leap of faith and turning a passion project into a career.  You'll learn the common pitfalls of the industry and how to avoid them.  Learn how you become a destination wedding photography.",
        photoLink: "https://i.imgur.com/ZHDE4fm.png",
        comments: [],   
    })
    const course10 = await Course.create({
        title: "Break Dancer to CyberYoga ",
        createdBy: tails,
        price: 100,
        description: "Performed for Cirque du Soleil Las Vegas.  Learn how a break dancer curated a life of self expression.  Learn about the hard truths as an artist and finding your resolve.",
        photoLink: "https://i.imgur.com/99ErkVl.png",
        comments: [],
    })
    const course11 = await Course.create({
        title: "Start a Podcast with Friends",
        createdBy: peter,
        price: 100,
        description: "Hosted over 100 of podcasts with friends.  Learn how doing what you love will be more than any amount of money you can make.  Enjoy work but also remember to enjoy a life well traveled ",
        photoLink: "https://i.imgur.com/MoFVED1.png",
        comments: [],
    })
    const course12 = await Course.create({
        title: "Spear Hunting Fish in the Pacific",
        createdBy: ron,
        price: 100,
        description: "Caught over 2000 lbs of fish.  Being in ocean brings you closer you nature and gives you a great appreciation to life itself.  Learn how a weekend fishing with friends will last a lifetime of stories shared together", 
        photoLink: "https://i.imgur.com/gQxG4Qt.png",
        comments: [],
    })
    const course13 = await Course.create({
        title: "Tattoo Artist",
        createdBy: viet,
        price: 100,
        description: "Breaking stereotypes of being inked.  Art comes in all shapes and sizes.  The process of ink brings me closer to family, friends and clients through the tattooing experience .  You'll learn how to get started and learn the possible steps to get into the industry",
        photoLink: "https://i.imgur.com/NQktXBa.png",
        comments: [],
    })
    const course14 = await Course.create({
        title: "The journey to getting the perfect Smile",
        createdBy: serena,
        price: 50,
        description: "Helped over 100 people smile brighter with invisalign. Learn how to make people smile a little brighter.  Everyone comes in at different places in their dental desires.  Learn the benefits of using Invisalign.  Learn the steps of becoming a dental hygienist or dentist.",
        
        photoLink: "https://i.imgur.com/MKmWMog.png",
        comments: [],
    })
    const course15 = await Course.create({
        title: "Your health is your wealth",
        createdBy: amy,
        price: 50,
        description: "Creating a lifestyle balance.  Learn how I created a brand that aligned with my lifestyle.  Being a yoga instructor and selling yoga apparel.  Learn how to be completely immerse with your passion.  Learn how you can use different avenues that will complement your career. ",
        photoLink: "https://i.imgur.com/D2fqVuc.png",
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
    armnhmr.myCourses.push(course6) 
    await armnhmr.save()
    carlos.myCourses.push(course7) 
    await carlos.save()
    carol.myCourses.push(course8) 
    await carol.save()
    cassy.myCourses.push(course9) 
    await cassy.save()
    tails.myCourses.push(course10) 
    await tails.save()
    peter.myCourses.push(course11) 
    await peter.save()
    ron.myCourses.push(course12) 
    await ron.save()
    viet.myCourses.push(course13) 
    await viet.save()
    serena.myCourses.push(course14) 
    await serena.save()
    amy.myCourses.push(course15) 
    await amy.save()

}

main()