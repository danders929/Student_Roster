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
router.get('/:id', async (req, res, next) => {
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

// /api/students - POST, create a new student
router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, email, gpa } = req.body
    if (!firstName || !lastName || !email) {
      const error = {
        status: 400,
        message: 'Must provide title & content.',
      };
      return next(error);
    };
    const newStudent = await prisma.student.create({
      data: { firstName: firstName, lastName: lastName, email: email, gpa: gpa }
    })
    res.json(newStudent);
  } catch (err) {
    next(err);
  }
});

router.patch('/:id', async (req, res, next) => {
  try{
    const id = +req.params.id

    const { firstName, lastName, email, gpa } = req.body

    const updateStudent = await prisma.student.update({
      where: {id: id },
      data: { firstName: firstName, lastName: lastName, email: email, gpa: gpa }
    })

    res.json(updateStudent);
  } catch(err) {
    next(err);
  }
});

router.patch('/:id', async (req, res, next) => {
  try{
    // const id = +req.params.id
    

    const { id, firstName, lastName, email, gpa } = req.body



    const updateStudent = await prisma.student.update({
      where: {id: id },
      data: { firstName: firstName, lastName: lastName, email: email, gpa: gpa }
    })

      console.log(payload.error)

    res.json(updateStudent);
  } catch(err) {
    next(err);
  }
});

// /api/:id - DELETE, deletes a student by id number
router.delete('/:id', async (req, res, next) => {
  try {
    const id = +req.params.id
    const result = await prisma.student.delete({
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
