"use server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { z } from "zod";


const createSchema = z.object({
    title: z.string().nonempty(),
    author: z.string().nonempty(),
    description: z.string().max(1000).optional(),
    image: z.union([z.string().url(), z.literal("")]),
    published: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), "Invalid date format") // Optional check to ensure the string is a valid date
    .transform((val) => new Date(val)),
    isbn: z.string().length(13).regex(/^\d{13}$/, "Invalid ISBN-13 format"),
    coverType: z.string().optional(),
  });
  


export async function createBook(prevState: unknown, formData: FormData){
     const obj = Object.fromEntries(formData.entries());
    // console.log(obj);
    // const title = formData.get("title") as string;
    // const author = formData.get("author") as string;
const result = createSchema.safeParse(obj);
if(!result.success){
    console.log(result.error.flatten());
    return{
        message: "Attempt to create a book failed!",
        error: result.error.message,
    };
}



    try {
        const book =  await prisma.book.create({
            data:{
                ...result.data,
                image: result.data.image||null,
                description: result.data.description || null,
                coverType: result.data.coverType||null,
            },
        });

        console.log("Created book with ID:", book.id);  // Debugging: log the created book's ID
return {message: "Succesfully created",
    bookId: book.id,
}

    } catch (error) {
    console.log(error);
    return {
        message: "Failed to create a product!",
    };
}


}

