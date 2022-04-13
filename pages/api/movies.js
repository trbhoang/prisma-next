import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const data = JSON.parse(req.body);

  const movie = await prisma.movie.create({
    data,
  });

  res.json(movie);
}
