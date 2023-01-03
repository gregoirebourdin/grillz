export default function Homepage() {
  return (
      <>
        <main
            className="min-h-screen bg-cover bg-top sm:bg-top"
            style={{
              backgroundImage:
                  'url("https://i.postimg.cc/ThMzyyM8/grillz.png")',
            }}
        >
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
            <p className="text-3xl font-semibold text-white text-opacity-50">Your Grillz</p>
            <h1 className="mt-2 text-7xl font-bold tracking-tight text-white sm:text-5xl">Vos Grillz sur-mesure bientôt disponible.</h1>
            <p className="mt-2 text-lg font-medium text-gray-300">
                Grillz sur-mesure (bijoux dentaires Sur Mesure & amovibles) livré partout en France ! 🇫🇷
            </p>
            <div className="mt-6">
              <a
                  href="#"
                  className="inline-flex items-center rounded-md border border-transparent bg-white  px-4 py-2 text-sm font-medium text-black "
              >
                Voir les grillz
              </a>
            </div>
          </div>
        </main>
      </>
  )
}
