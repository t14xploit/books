import CreateBookForm from "./form";


export default function CreateBookPage() {
  return (
    <div className="m-auto flex flex-col items-center gap-4 bg-black p-4 w-full text-white justify-center">
      <h1 className="text-4xl text-center">Create a book</h1>
      <CreateBookForm />
    </div>
  );
}

