import { Book } from "@prisma/client";
import Link from "next/link";

interface BookCardProps{
    book:Book;
}

export default function BookCard({book}:BookCardProps) {
    const formattedDate = book.published.toLocaleDateString();
    return (
    <div className=" space-y-4 text-black p-4 rounded-lg bg-slate-100 shadow ">
        {/* • Include columns for 
        title, 
        author, 
        publication date, and 
        ISBN */}

        <h2 className="text-lg font-bold">{book.title}</h2>
        <h2 className="text-lg font-bold">{book.author}</h2>
        <p>Published: {formattedDate}</p>
        <p>ISBN: {book.isbn}</p>

        <Link href={`/book/${book.id}`} className="block text-center  bg-green-700 text-xl mb-6 font-bold text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-green-400">Details</Link>
    </div>
  )
}
