// pages/index.tsx
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      {/* Homepage Hero Section */}
      <div className="text-center max-w-3xl my-16 mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-green-400 mb-4">
          Welcome to T14X Book Manager
        </h1>
        <p className=" my-16 text-lg text-gray-400 ">
          Manage your books seamlessly, keep track of your library, and organize your reading experience.
        </p>
        <Link
          href="/books"
          className="inline-block text-lg bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-400 transition duration-200"
        >
          Start Managing Books
        </Link>
      </div>
    </>
  );
};

export default HomePage;
