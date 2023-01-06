import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedUsers() {
  await prisma.user.createMany({
    data: [
      {
        username: "benthos",
        password: "ba4f288e81acd9b1ca3388f3702660c435b6f854d2fd320e15e4ce2fb24afb83",
      },
      {
        username: "press",
        password: "e996c8274e2115784422ab4e65de11dba61d1a6fb6393bb3df6ed744e849b177",
      },
      {
        username: "booking",
        password: "aed10f1dc43da9d111d0644cb623360f8c4c7820c01ff525fa9c132f81b5c12a",
      },
    ],
    skipDuplicates: true,
  })
}

async function main() {
  console.log("Seeding users...");
  await seedUsers();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
