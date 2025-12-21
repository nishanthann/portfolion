import prisma from "@/lib/db";

async function main() {
  await prisma.blogPost.create({
    data: {
      slug: "first-blog-post",
      title: "My First Blog Post",
      content: "This is seeded content from Prisma seed.ts",
    },
  });

  console.log("🌱 BlogPost seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
