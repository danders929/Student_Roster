const { ServerError } = require("../errors");
const prisma = require("../prisma");
const router = require("express").Router();
module.exports = router;


// /api/students - GET all students 
router.get('/', async (req, res, next) => {
  try {
    // for testing that path can be reached:
    // console.log('You have reached /api/students page')
    // res.send('You have reached the students page!')

    // for actual GET request for all students:
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

// /api/students/:id - GET the details of student specified by the id
router.get('/:id', async (req, res, next)=> {
  try {
    const id = +req.params.id
    const result = await prisma.student.findUnique({
      where: {
        id: id,
      },
    });
    if (!result) {
      return next({
        status: 404,
        message: `Could not find student with id ${id}`
      });
    }
    res.json(result)
  } catch (err) {
    next(err);
  }
})

