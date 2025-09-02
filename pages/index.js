export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Hero sectie */}
      <header className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welkom bij Smarthaven</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Ontdek de nieuwste smart home oplossingen voor een comfortabeler en slimmer leven.
        </p>
        <a
          href="#producten"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Bekijk producten
        </a>
      </header>

      {/* Producten sectie */}
      <main id="producten" className="py-16 bg-white text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Onze Producten</h2>
        <div className="max-w-6xl mx-auto grid gap-8 px-6 md:grid-cols-3">
          {/* Product 1 */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Slimme lamp"
              className="rounded-md mb-4 w-full"
            />
            <h3 className="text-xl font-semibold mb-2">Slimme lamp</h3>
            <p className="text-gray-700 mb-4">
              Bedien je verlichting eenvoudig via je smartphone of spraakassistent.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Bekijk
            </button>
          </div>

          {/* Product 2 */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Slimme thermostaat"
              className="rounded-md mb-4 w-full"
            />
            <h3 className="text-xl font-semibold mb-2">Slimme thermostaat</h3>
            <p className="text-gray-700 mb-4">
              Bespaar energie en verhoog je comfort met slimme temperatuurregeling.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Bekijk
            </button>
          </div>

          {/* Product 3 */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Slimme beveiligingscamera"
              className="rounded-md mb-4 w-full"
            />
            <h3 className="text-xl font-semibold mb-2">Slimme beveiligingscamera</h3>
            <p className="text-gray-700 mb-4">
              Houd je huis veilig met real-time meldingen en HD-video.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Bekijk
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © {new Date().getFullYear()} Smarthaven. Alle rechten voorbehouden.
      </footer>
    </div>
  );
}
