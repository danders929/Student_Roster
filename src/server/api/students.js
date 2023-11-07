const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** User must be logged in to access students. */
// router.use((req, res, next) => {
//   if (!res.locals.user) {
//     return next(new ServerError(401, "You must be logged in."));
//   }
//   next();
// });

// /api/students - GET all students 
router.get('/', async (req, res, next) => {
  try {
    // for testing that path can be reached:
    // console.log('You have reached /api/students page')
    // res.send('You have reached the students page!')

    // for actual GET request for all students:
    // const students = await prisma.student.findMany();
    // res.json(students);
  } catch (err) {
    next(err);
  }
});

