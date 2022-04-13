Step by step to create a project with nextjs + prisma.

## Getting Started

```bash
npx create-next-app prisma-next --use-npm
npm install -D prisma
npm install @prisma/client
npx prisma init
```

## Prisma

### Change schema.prisma and make migration

```bash
npx prisma migrate dev
```

### Open prisma studio

```bash
npx prisma studio
```
