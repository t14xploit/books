import { prisma } from "@/lib/prisma";
import BookCard from "@/components/BookCard";
import BookCreateButton from "@/components/BookCreateButton";


export default async function Home() {
const books = await prisma.book.findMany();

  return (
    
<>
<div className="max-w-4xl mx-auto m-12 ">
  <div className="flex justify-between ">
  <h1 className="text-3xl font-bold text-green-400 ">
    Books LIst
  </h1>
  <BookCreateButton/>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {books.map((book)=>(
<BookCard key={book.id} book={book}/>
  ))}
  </div>

</div>
</>
  );
}
