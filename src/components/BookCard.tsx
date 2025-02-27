import { Book } from "@prisma/client";

interface BookCardProps{
    book:Book;
}

export default function BookCard({book}:BookCardProps) {
    const formattedDate = book.published.toLocaleDateString();
    return (
    <div className=" space-y-3 text-black p-4 rounded-lg bg-slate-100 shadow ">
        {/* • Include columns for 
        title, 
        author, 
        publication date, and 
        ISBN */}

        <h2 className="text-lg font-bold">{book.title}</h2>
        <h2 className="text-lg font-bold">{book.author}</h2>
        <p>Published: {formattedDate}</p>
        <p>ISBN: {book.isbn}</p>
    </div>
  )
}
