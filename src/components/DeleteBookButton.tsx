"use client";
interface DeleteBookButtonProps {
    bookId:string;
}

export default function DeleteBookButton({bookId}:DeleteBookButtonProps) {
  async function handleClick(){
    //deleteBook(bookId)
  }
    return (
    <button onClick={handleClick} className="text-4xl text-red-500 hover:text-red-400 p-2 rounded-full transition duration-200">
    🗑
  </button>  )
}
