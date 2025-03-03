"use client";
import { deleteBook } from "@/actions/book";


interface DeleteBookButtonProps {
    bookId:string;
}

export default function DeleteBookButton({bookId}:DeleteBookButtonProps) {
  async function handleClick(){
    const result = confirm("Are you sure you want to delete this book?");
   if(!result) return;
   
    await deleteBook(bookId);
  }
    return (
    <button onClick={handleClick} className="text-4xl text-red-500 hover:text-red-400 p-2 rounded-full transition duration-200">
    🗑
  </button>  )
}
