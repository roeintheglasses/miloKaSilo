# Milo ka Silo

A comprehensive Next.js web application that provides information about taking care of Milo's health. This project uses Tailwind CSS for styling and offers a clean, intuitive user interface to help with understanding and managing Milo's health care needs.

## Features

- **Age-Based Disease Information**: Diseases categorized into four age groups (Neonatal, Post-Neonatal, Young Kittens, Older Kittens)
- **Detailed Disease Profiles**: Each disease includes information about definition, affected systems, development, symptoms, and prevention
- **Search and Filter**: Ability to search diseases by name, description or symptoms, and filter by affected body systems
- **Responsive Design**: Mobile-friendly interface that works well on all device sizes
- **Beautiful UI**: Clean, modern interface with a kitten-friendly color scheme

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - JavaScript library for building user interfaces

## Getting Started

1. Clone the repository
2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

- `app/` - Next.js app directory structure
  - `data/` - Data files containing kitten disease information
  - `age-group/` - Dynamic routes for age group pages
  - `all-diseases/` - All diseases listing page with search and filter
  - `references/` - References and citations page
  - `components/` - Reusable UI components

## Customization

Feel free to customize this project to suit your needs:

- Update the disease data in `app/data/diseases.ts`
- Modify the color scheme by changing the Tailwind theme in `tailwind.config.ts`
- Add additional features or pages as needed

## License

This project is open-source and available under the MIT License.

## Acknowledgements

The kitten health data in this project is based on research from various veterinary sources. Please see the References page in the application for a complete list of sources.
