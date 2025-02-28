"use client";
import { createBook } from "./actions";
import { useActionState } from "react";

export default function CreateBookForm() {

const [state, formAction, isPending] = useActionState(createBook, {
    message:"",
});
    
    return (
      <div className="p-6 my-6 bg-gray-900 bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg max-w-xl w-full border border-gray-400">
        <form action={formAction} className="flex flex-col gap-4 w-full">
          
          {state.message &&(<p>{state.message}</p>)}
          <div>
            <label htmlFor="title" className="block text-lg font-semibold text-white">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="p-2 mt-1 w-full bg-gray-950 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
  
          <div>
            <label htmlFor="author" className="block text-lg font-semibold text-white">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              className="p-2 mt-1 bg-gray-950 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
  
          <div>
            <label htmlFor="description" className="block text-lg font-semibold text-white">Description</label>
            <textarea
              id="description"
              name="description"
              className="p-2 mt-1 w-full border bg-gray-950 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
  
          <div>
            <label htmlFor="image" className="block text-lg font-semibold text-white">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              className="p-2 mt-1 w-full bg-gray-950 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
  
          {/* Published Date
          not sure if can use Date here. 
          
          TODO // check out the date 
          // */}
          <div>
            <label htmlFor="published" className="block text-lg font-semibold text-white">Published Date</label>
            <input
              type="date"
              id="published"
              name="published"
              className="p-2 mt-1 w-full bg-gray-950 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
  
          <div>
            <label htmlFor="isbn" className="block text-lg font-semibold text-white">ISBN</label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              className="p-2 mt-1 w-full bg-gray-950 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
  
          <div>
            <label htmlFor="coverType" className="block text-lg font-semibold text-white">Cover Type</label>
            <input
              type="text"
              id="coverType"
              name="coverType"
              className="p-2 mt-1 w-full border bg-gray-950 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
  
          <div>
            <button
              type="submit" disabled={isPending}
              className=" text-2xl font-bold p-3 mt-4 bg-green-700 text-white rounded-lg w-full hover:bg-green-600 transition duration-200"
            >
              {isPending?"Submitting": "Submit"}
            </button>
          </div>
        </form>
      </div>
    );
  }
  