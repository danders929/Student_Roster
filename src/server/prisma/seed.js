const prisma = require("../prisma");
const { faker } = require('@faker-js/faker');

//**seeds the database with 5 students randomly generated using faker data */
const seed = async (numStudents =5) => {
  try {
    for (let i = 0; i < numStudents; i++) {    
      // Variables for faker data
      const generatedFirstName = faker.person.firstName();
      const generatedLastName = faker.person.lastName();
      const generatedEmail = faker.internet.email();
      const generatedGpa = faker.number.int({ min: 0, max: 4, precision: 0.01 });

      // Checks if faker data does not return null
      if (!generatedFirstName || !generatedLastName || !generatedEmail) {
        console.error(`Invalid data for student ${i + 1}. Skipping.`);
        continue;
      }

      // Creates a database entry using the data supplied by faker
      await prisma.student.create({
        data: {
          firstName: generatedFirstName,
          lastName: generatedLastName,
          email: generatedEmail,
          gpa: generatedGpa,
        },
      });
    }

  // Returns errors in a readable format
  } catch (error) {
    console.error(`Error creating student: ${error}`);
  }
}

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
