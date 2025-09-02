export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-x-10">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Welkom bij <span className="text-yellow-400">SmartHaven</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Dé webshop voor slimme gadgets die je leven makkelijker en veiliger maken. 
              Ontdek vandaag nog onze bestsellers met hoge marges en snelle levering.
            </p>
            <div className="mt-10 flex gap-x-6">
              <a
                href="#products"
                className="rounded-xl bg-yellow-400 px-6 py-3 text-lg font-semibold text-gray-900 shadow hover:bg-yellow-300 transition"
              >
                Shop nu
              </a>
              <a
                href="#about"
                className="text-lg font-semibold leading-6 text-white hover:underline"
              >
                Meer weten →
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <img
              src="/hero-smart-home.jpg"
              alt="Slimme producten"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <span className="text-3xl">🚚</span>
          <h3 className="mt-4 text-xl font-bold">Gratis verzending</h3>
          <p className="mt-2 text-gray-600">Bij bestellingen vanaf €50.</p>
        </div>
        <div>
          <span className="text-3xl">💳</span>
          <h3 className="mt-4 text-xl font-bold">Veilige betalingen</h3>
          <p className="mt-2 text-gray-600">Altijd beschermd via SSL.</p>
        </div>
        <div>
          <span className="text-3xl">↩️</span>
          <h3 className="mt-4 text-xl font-bold">30 dagen retour</h3>
          <p className="mt-2 text-gray-600">Niet goed? Geld terug.</p>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Onze Bestsellers
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Product Card */}
            {[
              { name: "Slimme Deurbel", price: "€79", img: "/product-doorbell.jpg" },
              { name: "Smart LED Lamp", price: "€29", img: "/product-ledlamp.jpg" },
              { name: "Slimme Camera", price: "€99", img: "/product-camera.jpg" },
              { name: "Smart Thermostaat", price: "€149", img: "/product-thermostat.jpg" },
              { name: "Slimme Steckers", price: "€39", img: "/product-smartplug.jpg" },
              { name: "Robotstofzuiger", price: "€199", img: "/product-robotvac.jpg" },
            ].map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
              >
                <img src={p.img} alt={p.name} className="h-64 w-full object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-lg font-semibold text-blue-600">{p.price}</p>
                  <button className="mt-auto rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-500 transition">
                    In winkelwagen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} SmartHaven. Alle rechten voorbehouden.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
