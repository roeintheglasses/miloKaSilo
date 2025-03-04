import Link from "next/link";
import { keyPoints } from "./data/diseases";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-700 mb-4">
            Milo ka Silo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive resource for understanding and taking care of
            Milo&apos;s health.
          </p>
        </header>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-pink-700 mb-6">
            Key Points
          </h2>
          <ul className="space-y-4">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-pink-200 text-pink-700 rounded-full p-1 mr-3 flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <AgeGroupCard
            id="neonatal"
            title="Neonatal Period"
            ageRange="Birth to 2 Weeks"
            description="The earliest stage, where kittens are highly dependent and vulnerable."
          />
          <AgeGroupCard
            id="post-neonatal"
            title="Post-Neonatal"
            ageRange="2 Weeks to 8 Weeks"
            description="Kittens start exploring, with eyes open and increased exposure."
          />
          <AgeGroupCard
            id="young"
            title="Young Kittens"
            ageRange="8 Weeks to 6 Months"
            description="More independent, with growing activity and environmental interaction."
          />
          <AgeGroupCard
            id="older"
            title="Older Kittens"
            ageRange="6 Months to 1 Year"
            description="Approaching adulthood, with emerging adult-like health concerns."
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">
            Why Age Matters
          </h2>
          <p className="text-gray-700 mb-4">
            Kittens, from birth to one year, undergo rapid growth and
            development, making them susceptible to various diseases at
            different stages. Understanding these risks, grouped by age, helps
            in timely prevention and intervention.
          </p>
          <p className="text-gray-700">
            Select an age group above to learn about specific diseases, their
            symptoms, and prevention strategies relevant to that developmental
            stage.
          </p>
        </section>

        <div className="text-center">
          <Link
            href="/all-diseases"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            View All Diseases
          </Link>
        </div>
      </div>
    </main>
  );
}

function AgeGroupCard({
  id,
  title,
  ageRange,
  description,
}: {
  id: string;
  title: string;
  ageRange: string;
  description: string;
}) {
  return (
    <Link href={`/age-group/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg">
        <div className="h-48 bg-pink-200 flex items-center justify-center">
          <div className="text-6xl text-pink-500">🐱</div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-pink-700 mb-1">{title}</h3>
          <p className="text-sm font-medium text-pink-500 mb-3">{ageRange}</p>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}
