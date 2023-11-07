const prisma = require("../prisma");

//**seeds the database with 5 students */
const seed = async () => {
  for (let i = 1; i <= 5; i++) {
    await prisma.student.create({
      data: {
        firstName: "Bob",
        lastName: "Smith",
        email: `bobsmith${i}@gmail.com`,
        imageUrl: "ldksdfsadlfk",
        gpa: 3.5,
      },
    });
  }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });

module.exports = seed