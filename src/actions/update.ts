"use server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function updateBook(
  bookId: string,
  updatedData: {
    title?: string;
    author?: string;
    description?: string;
    image?: string;
    published?: Date;
    isbn?: string;
    coverType?: string;
  }
) {
  // You can update only the fields provided in updatedData
  await prisma.book.update({
    where: {
      id: bookId,
    },
    data: updatedData,
  });

  redirect("/");
}
