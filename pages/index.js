export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <header className="bg-indigo-600 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welkom bij Smarthaven
          </h1>
          <p className="text-lg md:text-xl text-indigo-100">
            Dé plek voor slimme apparaten en moderne technologie.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
            Bekijk producten
          </button>
        </div>
      </header>

      {/* Product grid */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Populaire producten</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Product 1 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img
              src="https://source.unsplash.com/400x300/?smart-home"
              alt="Smart Home Product"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Slimme Lamp</h3>
              <p className="text-gray-600">€49,99</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img
              src="https://source.unsplash.com/400x300/?smart-light"
              alt="Smart Light"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Slimme Sensor</h3>
              <p className="text-gray-600">€29,99</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img
              src="https://source.unsplash.com/400x300/?iot"
              alt="IoT Device"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Smart Hub</h3>
              <p className="text-gray-600">€99,99</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex justify-between">
          <p>© {new Date().getFullYear()} Smarthaven</p>
          <p>Made with ❤️ in Rotterdam</p>
        </div>
      </footer>
    </div>
  )
}
