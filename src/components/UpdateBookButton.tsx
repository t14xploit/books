"use client";
import { updateBook } from "@/actions/update"; // Change this to point to the updateBook function

interface UpdateBookButtonProps {
  bookId: string;
  updatedData: { title?: string; author?: string; description?: string; image?: string; published?: Date; isbn?: string; coverType?: string }; // Add updated fields as needed
}

export default function UpdateBookButton({ bookId, updatedData }: UpdateBookButtonProps) {
  async function handleClick() {
    const result = confirm("Are you sure you want to update this book?");
    if (!result) return;

    await updateBook(bookId, updatedData); // Call the updateBook function with bookId and the updatedData
  }

  return (
    <button
      onClick={handleClick}
      className="text-4xl text-blue-500 hover:text-blue-400 p-2 rounded-full transition duration-200"
    >
      ✏️
    </button>
  );
}
