import { notFound } from "next/navigation";
import {prisma} from "@/lib/prisma";
import EditBookForm from "./form";
type Params = Promise<{
    bookId: string;
    // name is the same as a folder name 
}>;

type Props = {
    params: Params;
}

export default async function EditBookPage(props:Props) {
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


    return (
    <div>
        <h1>
Edit Book            </h1>
<EditBookForm book={book}/>

            </div>
  )
}
