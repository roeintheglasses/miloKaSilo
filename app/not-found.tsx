import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex items-center justify-center px-4 py-16">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-8xl text-pink-500 mb-2">🐱</div>
          <h1 className="text-5xl font-bold text-pink-700 mb-2">404</h1>
          <h2 className="text-2xl text-gray-700">Page Not Found</h2>
        </div>

        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Oops! It looks like this page has wandered off to chase a toy mouse.
          Let&apos;s get you back to where you need to be.
        </p>

        <Link
          href="/"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
