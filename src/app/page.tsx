import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[calc(100vh-76px)] overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10" />
      
      <h1 className="text-7xl md:text-8xl font-black text-center bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
        Pelisplus.cO
      </h1>

      <p className="mt-6 text-slate-400 text-lg md:text-2xl max-w-2xl text-center leading-relaxed">
        Las mejores historias, sin comerciales y en 4K. 
        Tus películas favoritas a un clic de distancia.
      </p> 
      
      <Link 
        href="/catalogo"
        className="mt-10 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
      >
        Explorar Catálogo
      </Link>
    </main>
  );
}
