import { prisma } from "@/lib/prisma";



export default async function Home() {
const books = await prisma.book.findMany();

  return (
    
<>
<div className="max-w-4xl mx-auto m-12">
  <h1 className="text-2xl font-bold">
    Books LIst
  </h1>
  {books.map((book)=>(
    <div key={book.id}>
      <h2>{book.title}</h2>
    </div>
  ))}
</div>
</>
  );
}
