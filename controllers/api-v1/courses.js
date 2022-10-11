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
        const course = await db.Course.findById(req.params.courseId).populate({
            path: "comments",
            populate: [{
                path: "commenter",
                model: "User"
            }]
        });
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
        // find the user who created the course by createdBy: "id"
        const user = await db.User.findById(req.body.createdBy);
        // create the new course in the database
        const newCourse = await db.Course.create({
            title: req.body.title,
            createdBy: user,
            price: req.body.price,
            description: req.body.description,
            photoLink: req.body.photoLink,
        });
        // put the created course on the account of the user who submitted the form
        user.myCourses.push(newCourse._id);
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
        // find the course from the database
        const course = await db.Course.findById(req.params.courseId);
        if (!course) {
            // if no course found, send back status 404: Not Found
            res.status(404).json({msg: "404 Not Found"});
        }
        else {
            // find the user deleting the course from the createdBy key in the course object
            const user = await db.User.findById(course.createdBy._id);
            // remove reference in user.myCourses of the course to be deleted
            const index = user.myCourses.indexOf(req.params.courseId);
            if (index >= 0) {
                user.myCourses.splice(index, 1);
            }
            await user.save();
            // delete the specific course from the database
            await db.Course.deleteOne(course);
            // send back status 204: No Content
            res.sendStatus(204);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({msg: "server error" });
    }
});
// POST localhost:3001/api-v1/courses/:courseId/comments
router.post("/:courseId/comments", async (req, res) => {
    try {
        // find the user who created the comment by commenter: "id"
        const user = await db.User.findById(req.body.commenter);
        // find the course commented on in the database by id
        const course = await db.Course.findById(req.params.courseId);
        // create the comment object
        const newComment = {
            content: req.body.content,
            commenter: user
        }
        course.comments.push(newComment);
        await course.save();
        // send back single object json of the newly created comment
        res.status(201).json(newComment);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({msg: "server error" });
    }
});

module.exports = router;
