"use server";
import {prisma} from "@/lib/prisma";
import { redirect } from "next/navigation";


export async function deleteBook(bookId: string){
    await prisma.book.delete({
        where:{
            id:bookId
        }
    });
    redirect("/books");
}