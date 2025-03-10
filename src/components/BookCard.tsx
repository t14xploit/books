import { Book } from "@prisma/client";
import Link from "next/link";

interface BookCardProps{
    book:Book;
}

export default function BookCard({book}:BookCardProps) {
    const formattedDate = book.published.toLocaleDateString();
    return (
    <div className="p-8 space-y-4 rounded-lg shadow-lg text-white bg-black border ">
        {/* • Include columns for 
        title, 
        author, 
        publication date, and 
        ISBN */}

        <h2 className="text-2xl font-bold text-green-400">{book.title}</h2>
        <h3 className="text-lg text-gray-400">{book.author}</h3>
        <p className="text-sm text-gray-300">Published: {formattedDate}</p>
        <p className="text-sm text-gray-300">ISBN: {book.isbn}</p>

        <Link href={`/books/${book.id}`} className="block text-center bg-green-400 text-xl font-bold text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ">Details</Link>
    </div>
  )
}
