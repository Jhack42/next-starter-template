import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-sans">
      {/* Fondo con efectos visuales */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative z-10 grid grid-rows-[1fr_auto] min-h-screen p-8">
        <main className="flex flex-col items-center justify-center gap-12 text-center max-w-4xl mx-auto">
          {/* Logo con efecto brillante */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Image
                className="brightness-0 invert"
                src="/next.svg"
                alt="Logo de Next.js"
                width={220}
                height={46}
                priority
              />
            </div>
          </div>

          {/* Título principal */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Bienvenido a Next.js
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              El framework de React para producción que te permite crear aplicaciones web rápidas y escalables
            </p>
          </div>

          {/* Instrucciones con estilo moderno */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-purple-300">Primeros pasos</h2>
            <ol className="space-y-4 text-left">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <p className="text-gray-200">
                    Comienza editando{" "}
                    <code className="bg-purple-500/20 border border-purple-500/30 font-mono font-medium px-3 py-1 rounded-md text-purple-200">
                      src/app/page.tsx
                    </code>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <p className="text-gray-200">
                    Guarda y observa tus cambios al instante con recarga en caliente
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <a
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-[2px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-12 items-center justify-center gap-3 rounded-full bg-black px-6 text-white transition-colors group-hover:bg-black/80">
                <Image
                  className="brightness-0 invert"
                  src="/vercel.svg"
                  alt="Logo de Vercel"
                  width={20}
                  height={20}
                />
                <span className="font-medium">Desplegar ahora</span>
              </div>
            </a>
            
            <a
              className="flex h-12 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 font-medium backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>📖</span>
              <span>Leer documentación</span>
            </a>
          </div>
        </main>

        {/* Footer moderno */}
        <footer className="flex flex-wrap items-center justify-center gap-8 py-8 text-sm text-gray-400">
          <a
            className="flex items-center gap-2 transition-colors hover:text-purple-300 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="Icono de archivo"
              width={16}
              height={16}
              className="opacity-70"
            />
            Aprender
          </a>
          <a
            className="flex items-center gap-2 transition-colors hover:text-cyan-300 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Icono de ventana"
              width={16}
              height={16}
              className="opacity-70"
            />
            Ejemplos
          </a>
          <a
            className="flex items-center gap-2 transition-colors hover:text-white hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Icono de globo"
              width={16}
              height={16}
              className="opacity-70"
            />
            Ir a nextjs.org →
          </a>
        </footer>
      </div>
    </div>
  );
}