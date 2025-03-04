import { ageGroups } from "@/app/data/diseases";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define the params for static generation
export async function generateStaticParams() {
  return ageGroups.map((group) => ({
    id: group.id,
  }));
}

// Use the standard params pattern for Next.js 15
export default function AgeGroupPage({ params }: { params: { id: string } }) {
  const ageGroup = ageGroups.find((group) => group.id === params.id);

  if (!ageGroup) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link
            href="/"
            className="text-pink-600 hover:text-pink-800 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <header className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-2">
            {ageGroup.name}
          </h1>
          <p className="text-lg text-pink-600 mb-4">{ageGroup.range}</p>
          <p className="text-gray-600">{ageGroup.description}</p>
        </header>

        <h2 className="text-2xl font-semibold text-pink-700 mb-6">
          Common Diseases in this Age Group
        </h2>

        <div className="space-y-8 mb-16">
          {ageGroup.diseases.map((disease, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="bg-pink-600 text-white px-6 py-4">
                <h3 className="text-xl font-semibold">{disease.name}</h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-pink-700 mb-2">
                    What is it?
                  </h4>
                  <p className="text-gray-700">{disease.definition}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-pink-700 mb-2">
                      Affected Systems
                    </h4>
                    <p className="text-gray-700">{disease.affectedSystems}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-pink-700 mb-2">
                      Development
                    </h4>
                    <p className="text-gray-700">{disease.development}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-pink-700 mb-2">
                      Symptoms
                    </h4>
                    <p className="text-gray-700">{disease.symptoms}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-pink-700 mb-2">
                      Prevention
                    </h4>
                    <p className="text-gray-700">{disease.prevention}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-pink-700 mb-4">
            Important Note
          </h3>
          <p className="text-gray-700">
            This information is meant to guide, not replace, professional
            veterinary care. Always consult your veterinarian for personalized
            advice tailored to your kitten&apos;s specific needs.
          </p>
        </div>
      </div>
    </main>
  );
}
