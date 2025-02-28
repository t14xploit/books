import CreateBookForm from "./form";


export default function CreateBookPage() {
  return (
    <div className="flex flex-col items-center gap-4 bg-gray-950 p-4 w-full text-white h-screen justify-center">
      <h1 className="text-4xl text-center">Create a book</h1>
      <CreateBookForm />
    </div>
  );
}

