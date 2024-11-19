import Link from "next/link";

const DummyPage = () => {
  {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <p>
            My name is Erfan Taheri. This site is a showcase of my front-end
            development skills and is not affiliated with the official Dota 2
            website.
            <Link
              href="/heroes"
              className="mt-4 block text-blue-500 underline hover:text-blue-300"
            >
              Go to Heroes Page
            </Link>
          </p>
          <a
            href="https://www.dota2.com/home"
            className="mt-4 block text-blue-500 underline hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the official Dota 2 website
          </a>
        </div>
      </div>
    );
  }
};

export default DummyPage;
