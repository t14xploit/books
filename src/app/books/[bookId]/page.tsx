import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import DeleteBookButton from "@/components/DeleteBookButton";
import UpdateBookButton from "@/components/UpdateBookButton";


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
<div className="space-y-4 my-10 max-w-6xl mx-auto bg-gray-800 bg-opacity-60 backdrop-blur-md p-6 rounded-lg shadow-lg">
  <div className="flex items-start space-x-8"> {/* Changed 'items-center' to 'items-start' */}
    {book.image && (
      <div className="flex-shrink-0">
        <Image src={book.image} alt={book.title} width={300} height={400} className="rounded-lg shadow-md" />
      </div>
    )}
    <div className="flex-1">
      <div className="flex items-start justify-between mb-2"> {/* Changed 'items-center' to 'items-start' */}
        <h2 className="text-4xl font-bold text-white">{book.title}</h2>
        <div className="flex space-x-4">
         <UpdateBookButton bookId={bookId} updatedData={{
              }}/>
          <DeleteBookButton bookId={book.id}/>
        </div>
      </div>

      {/* Author, Date, ISBN */}
      <h3 className="text-xl font-bold text-white">{book.author}</h3>
      <p className="mt-4 text-sm text-gray-300">Published: {formattedDate}</p>
      <p className="text-sm mb-4 text-gray-300">ISBN: {book.isbn}</p>
      <hr />
      <br />
<p className="text-gray-300">📙:{book.coverType && <span> {book.coverType}</span>}</p>
<br />
<p>Overview:</p>
      {book.description && <p className="text-sm text-gray-300 mt-4">{book.description}</p>}
    </div>
  </div>
</div>



  </>)}