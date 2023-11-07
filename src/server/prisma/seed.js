seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { faker } = require('@faker-js/faker');


//**seeds the database with 5 students */
const seed = async (numStudents =5) => {
  try {
    for (let i = 0; i < numStudents; i++) {    
      const generatedFirstName = faker.person.firstName();
      const generatedLastName = faker.person.lastName();
      const generatedEmail = faker.internet.email();
      const generatedGpa = faker.number.int({ min: 0, max: 4, precision: 0.01 });

      if (!firstName || !lastName || !email) {
        console.error(`Invalid data for student ${i + 1}. Skipping.`);
        continue;
      }

      await prisma.student.create({
        data: {
          firstName: generatedFirstName,
          lastName: generatedLastName,
          email: generatedEmail,
          gpa: generatedGpa,
        },
      });
    }
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
