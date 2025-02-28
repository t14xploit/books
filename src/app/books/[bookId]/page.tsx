import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type Params = Promise<{
  bookId: string;
}>;

type Props = {
  params: Params;
};

export default async function BookDetailsPage(props: Props) {
  const params = await props.params;
  const bookId = params.bookId;

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  });

  if (!book) {
    notFound();
  }
const formattedDate = book.published.toLocaleDateString();
  return (<>
<div className="space-y-4 my-10 max-w-4xl mx-auto bg-gray-800 bg-opacity-60 backdrop-blur-md p-6 rounded-lg shadow-lg">
  <div className="flex items-center justify-between">
    <h2 className="text-4xl font-bold text-white">{book.title}</h2>
    <div className="flex space-x-4">
      <button className=" text-4xl text-yellow-500 hover:text-yellow-400 p-2 rounded-full transition duration-200">
        ✎
      </button>
      <button className=" text-4xl text-red-500 hover:text-red-400 p-2 rounded-full transition duration-200">
        🗑
      </button>
    </div>
  </div>
  
  <h2 className="text-lg font-bold text-white">{book.author}</h2>
  <p className="text-sm text-gray-300">Published: {formattedDate}</p>
  <p className="text-sm text-gray-300">ISBN: {book.isbn}</p>
  <p className="text-sm text-gray-300 mt-4">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui aut nulla blanditiis corrupti quaerat ab commodi earum, eaque natus iusto? Perferendis animi possimus aliquam quam laborum nisi ipsam sit ducimus.
  </p>
</div>

  </>)}