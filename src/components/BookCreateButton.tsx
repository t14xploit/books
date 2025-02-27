import Link from "next/link";


export default function BookCreateButton() {
  return (
    <Link href="/books/create-book">
    <button className="bg-green-600 text-xl mb-6 font-bold text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-green-400">Create</button>
    </Link>
  );
}
