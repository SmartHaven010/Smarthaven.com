export default function Home() {
  return (
    <html lang="nl">
      <head>
        <title>Smarthaven</title>
        {/* Tailwind via CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Welkom bij Smarthaven 🚀</h1>
          <p className="mt-4 text-lg text-gray-600">
            Jouw slimme shop voor de toekomst.
          </p>
        </div>
      </body>
    </html>
  )
}
