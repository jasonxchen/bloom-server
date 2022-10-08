const router = require("express").Router();
const db = require("../../models");

// GET localhost:3001/api-v1/courses
router.get("/", async (req, res) => {
    try {
        const allCourses = await db.Course.find({});
        // send back json of objects in an array (all courses in database)
        res.json(allCourses);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({msg: "server error" });
    }
});
// GET localhost:3001/api-v1/courses/:courseId
router.get("/:courseId", async (req, res) => {
    try {
        const course = await db.Course.findById(req.params.courseId);
        // send back json of a single course object
        res.json(course);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({msg: "server error" });
    }
});
// POST localhost:3001/api-v1/courses
router.post("/", async (req, res) => {
    try {
        // find the user who created the course by id
        const user = await db.User.findById(req.body.id);
        // create the new course in the database
        const newCourse = await db.Course.create({
            title: req.body.title,
            createdBy: user,
            price: req.body.price,
            description: req.body.description,
            photoLink: req.body.photoLink,
        });
        // put the created course on the account of the user who submitted the form
        user.myCourses.push(newCourse);
        await user.save();
        // send back single object json of the newly created course
        res.status(201).json(newCourse);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({msg: "server error" });
    }
});
// PUT localhost:3001/api-v1/courses/:courseId
router.put("/:courseId", async (req, res) => {
    try {
        // update an existing course in the database; not upsert
        const course = await db.Course.findByIdAndUpdate(
            req.params.courseId,
            {
                title: req.body.title,
                price: req.body.price,
                description: req.body.description,
                photoLink: req.body.photoLink,
            },
            {
                new: true
            }
        );
        // send back single object json of updated course
        res.json(course);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({msg: "server error" });
    }
});
// DELETE localhost:3001/api-v1/courses/:courseId
router.delete("/:courseId", async (req, res) => {
    try {
        // delete an existing course from the database
        const course = await db.Course.findByIdAndDelete(req.params.courseId);
        if (course) {
            // send back status 204: No Content
            res.sendStatus(204);
        }
        else {
            // if no user deleted, send back status 404: Not Found
            res.status(404).json({msg: "404 Not Found"});
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({msg: "server error" });
    }
});

module.exports = router;
