import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SmartHaven – Slim wonen begint hier</title>
        <meta
          name="description"
          content="Ontdek de premium collectie slimme woonproducten van SmartHaven. Design, innovatie en gebruiksgemak in één."
        />
      </Head>

      <main className="bg-white text-gray-900 font-sans">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gray-50">
          <img
            src="/hero-deurbel.jpg"
            alt="Slimme deurbel"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 px-6">
            <h1 className="text-6xl md:text-7xl font-extralight tracking-tight mb-6">
              Slim wonen. <span className="font-semibold">Stijlvol.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 mb-8">
              Ontdek de toekomst van jouw huis bij SmartHaven
            </p>
            <a
              href="#products"
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition"
            >
              Shop nu
            </a>
          </div>
        </section>

        {/* Product showcase */}
        <section id="products" className="py-24 max-w-7xl mx-auto px-6 space-y-32">
          {[
            {
              name: "Slimme Deurbel",
              price: "€89,99",
              desc: "Zie wie er aanbelt, waar je ook bent.",
              image: "/deurbel.jpg",
            },
            {
              name: "Smart Camera",
              price: "€69,99",
              desc: "24/7 beveiliging met haarscherpe beelden.",
              image: "/camera.jpg",
            },
            {
              name: "Robot Stofzuiger",
              price: "€199,99",
              desc: "Altijd een schoon huis zonder moeite.",
              image: "/stofzuiger.jpg",
            },
          ].map((product, i) => (
            <div
              key={product.name}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-3xl shadow-lg w-full"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-light mb-4">{product.name}</h2>
                <p className="text-gray-600 text-lg mb-6">{product.desc}</p>
                <p className="text-2xl font-semibold mb-8">{product.price}</p>
                <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                  In winkelwagen
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-400 text-center py-12">
          <p className="mb-4 text-sm">
            © {new Date().getFullYear()} SmartHaven. Alle rechten voorbehouden.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Voorwaarden
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
