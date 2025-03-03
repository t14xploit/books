"use server";
import {prisma} from "@/lib/prisma";


export async function deleteBook(bookId: string){
    await prisma.book.delete({
        where:{
            id:bookId
        }
    });
}