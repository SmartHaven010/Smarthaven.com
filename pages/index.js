import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SmartHaven - Slimme producten voor elk huis</title>
        <meta
          name="description"
          content="SmartHaven - Dé webshop voor slimme deurbel, camera, verlichting en meer. Maak je huis slimmer vandaag."
        />
      </Head>

      <main className="bg-gray-50 text-gray-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-500 to-green-700 text-white">
          <div className="max-w-7xl mx-auto px-6 py-24 text-center">
            <h1 className="text-5xl font-bold mb-4">Welkom bij SmartHaven</h1>
            <p className="text-xl mb-8">
              Slimme oplossingen voor een veilig en modern huis
            </p>
            <a
              href="#products"
              className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
            >
              Bekijk producten
            </a>
          </div>
        </section>

        {/* USP Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold">🚚 Gratis verzending</h3>
              <p className="text-gray-600">Bij elke bestelling boven €50</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">🔒 Veilig betalen</h3>
              <p className="text-gray-600">Met iDEAL, PayPal of Creditcard</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">↩️ 30 dagen retour</h3>
              <p className="text-gray-600">Niet goed? Geld terug!</p>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section id="products" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Onze populairste producten
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Slimme Deurbel", price: "€89,99", image: "/deurbel.jpg" },
                { name: "Smart Camera", price: "€69,99", image: "/camera.jpg" },
                { name: "Slimme Lamp", price: "€29,99", image: "/lamp.jpg" },
                { name: "Robot Stofzuiger", price: "€199,99", image: "/stofzuiger.jpg" },
                { name: "Smart Plug", price: "€24,99", image: "/plug.jpg" },
                { name: "Slimme Thermostaat", price: "€149,99", image: "/thermostaat.jpg" },
              ].map((product) => (
                <div
                  key={product.name}
                  className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-green-600 font-bold mb-4">{product.price}</p>
                    <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700">
                      In winkelwagen
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} SmartHaven. Alle rechten voorbehouden.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Twitter</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
