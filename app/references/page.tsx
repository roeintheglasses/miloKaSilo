import { references } from "@/app/data/diseases";

export default function ReferencesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 py-16">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
            References
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resources and citations used in compiling Milo ka Silo.
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <p className="text-gray-700 mb-8">
            This guide is based on information compiled from reputable
            veterinary resources. Below is a list of references used in creating
            Milo ka Silo. We encourage you to explore these resources for more
            detailed information.
          </p>

          <h2 className="text-2xl font-semibold text-pink-700 mb-6">
            Source List
          </h2>

          <ul className="space-y-6">
            {references.map((reference, index) => (
              <li
                key={index}
                className="border-b border-gray-200 pb-6 last:border-0"
              >
                <div className="flex items-start">
                  <span className="bg-pink-100 text-pink-700 rounded-full h-6 w-6 flex items-center justify-center font-semibold mr-3 flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {reference.name}
                    </h3>
                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 hover:underline inline-flex items-center"
                    >
                      Visit Source
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">
            Disclaimer
          </h2>
          <p className="text-gray-700 mb-4">
            The information provided in Milo ka Silo is for educational purposes
            only and is not intended to replace professional veterinary advice,
            diagnosis, or treatment. Always seek the advice of your veterinarian
            with any questions you may have regarding Milo&apos;s health.
          </p>
          <p className="text-gray-700">
            Every effort has been made to ensure the accuracy of the information
            presented, but we cannot guarantee that it is free from errors or
            omissions. The authors and publishers disclaim any liability for any
            loss, damage, or disruption caused by errors or omissions, whether
            such errors or omissions result from negligence, accident, or any
            other cause.
          </p>
        </div>
      </div>
    </main>
  );
}
