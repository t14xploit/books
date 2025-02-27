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
   <h2 className="text-lg font-bold">{book.title}</h2>
        <h2 className="text-lg font-bold">{book.author}</h2>
        <p>Published: {formattedDate}</p>
        <p>ISBN: {book.isbn}</p>
  </>)}