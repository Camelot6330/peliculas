"use client"
import { useEffect, useState } from 'react'; 
import CardPelicula from '../Componentes/Productos';


interface Pelicula {
  id: number;
  Nombre: string;
  categoria: string;
  rating: number;
  foto: string;
}

export default function CatalogoPage() {
  const [rentadas, setRentadas] = useState<number>(0);

  useEffect(() => {
    const estadoInicial = Number(localStorage.getItem("carrito")) || 0;
    setRentadas(estadoInicial);
  }, []);

  const incrementarRentadas = () => {
    setRentadas(prev => prev + 1);
  };

  useEffect(() => {
    localStorage.setItem("carrito", rentadas.toString());
  }, [rentadas]);

  const catalogo: Pelicula[] = [
    { id: 1, Nombre: "Los Juegos del Hambre", categoria: "Ciencia ficción", rating: 4.5, foto: "/a.jpg" },
    { id: 2, Nombre: "Harry Potter", categoria: "Fantasía", rating: 2.3, foto: "/b.jpg" },
    { id: 3, Nombre: "Inception", categoria: "Suspenso", rating: 4.8, foto: "/c.webp" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-10">
      <header className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2 text-white">Cartelera</h1>
          <p className="text-slate-400">Descubre los estrenos más recientes</p>
        </div>
        <div className="bg-slate-900 border border-slate-700 px-6 py-3 rounded-2xl shadow-xl">
          <span className="text-blue-400 font-bold text-xl">🛒 {rentadas}</span>
          <span className="ml-2 text-sm text-slate-300">rentadas</span>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {catalogo.map((prod) => (
          <CardPelicula
            key={prod.id}
            Nombre={prod.Nombre}
            Categoria={prod.categoria}
            rating={prod.rating}
            foto={prod.foto}
            onRentar={incrementarRentadas}
          />
        ))}
      </div>
    </div>
  );
}