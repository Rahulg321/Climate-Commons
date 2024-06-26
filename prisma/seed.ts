import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

// docker run -d -e POSTGRES_DB=mydb -e POSTGRES_PASSWORD=testpass123 -e POSTGRES_USER=postgres -p "6500:5432" postgres

const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 25; i++) {
    await prisma.user.create({
      data: {
        id: i,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        profilePicture: faker.image.avatar(),
        bio: faker.person.bio(),
        jobTitle: faker.person.jobTitle(),
        phoneNumber: faker.phone.number(),
      },
    });
    for (let j = 0; j <= getRandomIntInclusive(15, 20); j++) {
      await prisma.post.create({
        data: {
          title: faker.lorem.lines(1),
          slug: faker.lorem.slug(),
          published: faker.datatype.boolean(),
          content: faker.lorem.paragraphs({ min: 1, max: 3 }),
          featuredImage: faker.image.url(),
          authorId: i,
          comments: {
            create: {
              content: faker.lorem.paragraphs({ min: 1, max: 3 }),
              authorId: i,
            },
          },
        },
      });
    }
  }
}
main()
  .then(async () => {
    console.log("successfully seeded database");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    console.log("could not seed database");
    await prisma.$disconnect();
    process.exit(1);
  });

export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
