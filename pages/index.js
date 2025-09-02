import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SmartHaven – Slim wonen, strak design</title>
        <meta
          name="description"
          content="Beleef de toekomst van wonen met SmartHaven. Slimme deurbellen, camera’s en meer – strak en betrouwbaar."
        />
      </Head>

      <main className="bg-white text-gray-900 font-sans">
        {/* Hero Section */}
        <section className="relative bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-32 text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              Slim wonen. Strak design.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ontdek hoe slimme technologie jouw huis veiliger en stijlvoller maakt.  
              SmartHaven brengt de toekomst naar je voordeur.
            </p>
            <a
              href="#products"
              className="px-6 py-3 rounded-full bg-black text-white text-lg font-medium hover:bg-gray-800 transition"
            >
              Shop nu
            </a>
          </div>
        </section>

        {/* USP Section */}
        <section className="bg-white border-t border-b border-gray-200 py-12">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">🚚 Gratis verzending</h3>
              <p className="text-gray-600">Binnen 2–5 dagen geleverd.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🔒 Veilig betalen</h3>
              <p className="text-gray-600">Met iDEAL, PayPal en meer.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">↩️ 30 dagen retour</h3>
              <p className="text-gray-600">Niet goed? Geld terug.</p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Onze Bestsellers
            </h2>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Product Card */}
              <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                <img
                  src="/deurbel.jpg"
                  alt="Slimme deurbel"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Slimme Deurbel</h3>
                  <p className="text-gray-600 mb-4">
                    Zie en spreek bezoekers direct via je smartphone.
                  </p>
                  <span className="block text-lg font-bold mb-4">€99</span>
                  <a
                    href="#"
                    className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                  >
                    In winkelmand
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                <img
                  src="/camera.jpg"
                  alt="Slimme camera"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Slimme Camera</h3>
                  <p className="text-gray-600 mb-4">
                    Altijd zicht op je huis, waar je ook bent.
                  </p>
                  <span className="block text-lg font-bold mb-4">€129</span>
                  <a
                    href="#"
                    className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                  >
                    In winkelmand
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                <img
                  src="/robot.jpg"
                  alt="Slimme stofzuiger"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Robot Stofzuiger</h3>
                  <p className="text-gray-600 mb-4">
                    Laat je vloer vanzelf schoonmaken met slimme navigatie.
                  </p>
                  <span className="block text-lg font-bold mb-4">€249</span>
                  <a
                    href="#"
                    className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                  >
                    In winkelmand
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-400 py-10 mt-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 SmartHaven. Alle rechten voorbehouden.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Contact</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
