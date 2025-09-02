// pages/index.js
export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          Welcome to <span className="text-blue-600">SmartHaven</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Upgrade your lifestyle with the smartest home devices.  
          Quality, innovation, and simplicity — just like Apple.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg rounded-xl shadow hover:bg-blue-700 transition">
          Shop Now
        </button>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Product */}
          <div className="border rounded-2xl shadow hover:shadow-lg transition p-6 text-center">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Smart Doorbell"
              className="rounded-xl mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">Smart Doorbell</h3>
            <p className="text-gray-600 mb-4">
              See who's at your door from anywhere. Easy setup, sleek design.
            </p>
            <p className="text-lg font-bold mb-4">$129</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>

          {/* Duplicate this block for more products */}
          <div className="border rounded-2xl shadow hover:shadow-lg transition p-6 text-center">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Smart Camera"
              className="rounded-xl mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">Smart Camera</h3>
            <p className="text-gray-600 mb-4">
              Keep an eye on your home with crystal-clear HD security.
            </p>
            <p className="text-lg font-bold mb-4">$99</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>

          <div className="border rounded-2xl shadow hover:shadow-lg transition p-6 text-center">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Smart Light"
              className="rounded-xl mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">Smart Light</h3>
            <p className="text-gray-600 mb-4">
              Control your lighting from your phone. Save energy, live smarter.
            </p>
            <p className="text-lg font-bold mb-4">$49</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
