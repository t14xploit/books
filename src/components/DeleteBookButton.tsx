"use client";
import { deleteBook } from "@/actions/book";
import { useState } from "react";


interface DeleteBookButtonProps {
    bookId:string;
}

export default function DeleteBookButton({bookId}:DeleteBookButtonProps) {
  const [isPending, setIsPending] = useState(false);

  
  async function handleClick(){
    const result = confirm("Are you sure you want to delete this book?");
   if(!result) return;
   setIsPending(true);

    await deleteBook(bookId);
    setIsPending(false);
  }
    return (
    <button onClick={handleClick} className="text-4xl text-red-500 hover:text-red-400 p-2 rounded-full transition duration-200" disabled={isPending}> {isPending? "Deleting...":"🗑"}
  </button>  )
}
