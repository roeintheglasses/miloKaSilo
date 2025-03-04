"use client";

import { ageGroups } from "@/app/data/diseases";
import Link from "next/link";
import { useState } from "react";

export default function AllDiseasesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSystem, setSelectedSystem] = useState("all");

  // Extract all diseases from all age groups
  const allDiseases = ageGroups.flatMap((group) =>
    group.diseases.map((disease) => ({
      ...disease,
      ageGroup: group.name,
      ageGroupId: group.id,
      ageRange: group.range,
    }))
  );

  // Get unique affected systems for filter
  const affectedSystems = [
    ...new Set(
      allDiseases.map((disease) => disease.affectedSystems.split(",")[0].trim())
    ),
  ];

  // Filter diseases based on search term and selected system
  const filteredDiseases = allDiseases.filter((disease) => {
    const matchesSearch =
      disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.symptoms.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSystem =
      selectedSystem === "all" ||
      disease.affectedSystems
        .toLowerCase()
        .includes(selectedSystem.toLowerCase());

    return matchesSearch && matchesSystem;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 py-16">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
            All Kitten Diseases
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive list of diseases that can affect kittens during
            their first year of life.
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Search Diseases
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by name, description, or symptoms..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="system"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Filter by System
              </label>
              <select
                id="system"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                value={selectedSystem}
                onChange={(e) => setSelectedSystem(e.target.value)}
              >
                <option value="all">All Systems</option>
                {affectedSystems.map((system, index) => (
                  <option key={index} value={system}>
                    {system}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredDiseases.length} of {allDiseases.length} diseases
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {filteredDiseases.map((disease, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="bg-pink-600 text-white px-6 py-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">{disease.name}</h2>
                <span className="bg-pink-700 text-white text-xs px-3 py-1 rounded-full">
                  {disease.ageGroup}
                </span>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{disease.definition}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase">
                      Affected Systems
                    </h3>
                    <p className="text-gray-700">{disease.affectedSystems}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase">
                      Common in
                    </h3>
                    <p className="text-gray-700">{disease.ageRange}</p>
                  </div>
                </div>

                <Link
                  href={`/age-group/${disease.ageGroupId}`}
                  className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center"
                >
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredDiseases.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No diseases found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria to find what
              you&apos;re looking for.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
