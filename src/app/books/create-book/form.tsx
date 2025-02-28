"use client";

export default function CreateBookForm() {
    return (
      <div className="p-6 my-6 bg-gray-900 bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg max-w-xl w-full border border-gray-400">
        <form className="flex flex-col gap-4 w-full">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-lg font-semibold text-white">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="p-2 mt-1 w-full bg-gray-950 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
  
          {/* Author */}
          <div>
            <label htmlFor="author" className="block text-lg font-semibold text-white">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              required
              className="p-2 mt-1 bg-gray-950 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
  
          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-lg font-semibold text-white">Description</label>
            <textarea
              id="description"
              name="description"
              className="p-2 mt-1 w-full border bg-gray-950 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
  
          {/* Image URL */}
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
              required
              className="p-2 mt-1 w-full bg-gray-950 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
  
          {/* ISBN */}
          <div>
            <label htmlFor="isbn" className="block text-lg font-semibold text-white">ISBN</label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              required
              className="p-2 mt-1 w-full bg-gray-950 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
  
          {/* Cover Type */}
          <div>
            <label htmlFor="coverType" className="block text-lg font-semibold text-white">Cover Type</label>
            <input
              type="text"
              id="coverType"
              name="coverType"
              className="p-2 mt-1 w-full border bg-gray-950 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
  
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className=" text-2xl font-bold p-3 mt-4 bg-green-700 text-white rounded-lg w-full hover:bg-green-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
  