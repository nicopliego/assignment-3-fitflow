"use client";

import { useState } from "react";

type Objetivo = "perder-peso" | "ganar-fuerza" | "mejorar-condicion";
type Nivel = "principiante" | "intermedio" | "avanzado";
type Intensidad = "tranquila" | "moderada" | "intensa";
type Dias = "2" | "3" | "4" | "5";

type EjercicioBase = {
  nombre: string;
  tranquila: string;
  moderada: string;
  intensa: string;
};

type RutinaGenerada = {
  objetivo: string;
  nivel: string;
  intensidad: string;
  dias: string;
  series: number;
  ejercicios: { nombre: string; repeticiones: string }[];
  recomendacion: string;
};

export default function Rutina() {
  const [objetivo, setObjetivo] = useState<Objetivo | "">("");
  const [nivel, setNivel] = useState<Nivel | "">("");
  const [intensidad, setIntensidad] = useState<Intensidad | "">("");
  const [dias, setDias] = useState<Dias | "">("");
  const [rutinaGenerada, setRutinaGenerada] =
    useState<RutinaGenerada | null>(null);
  const [mensaje, setMensaje] = useState("");

  const ejercicios: Record<Objetivo, EjercicioBase[]> = {
    "perder-peso": [
      { nombre: "Sentadillas", tranquila: "10 repeticiones", moderada: "15 repeticiones", intensa: "20 repeticiones" },
      { nombre: "Mountain climbers", tranquila: "12 repeticiones", moderada: "20 repeticiones", intensa: "30 repeticiones" },
      { nombre: "Jumping jacks", tranquila: "20 segundos", moderada: "30 segundos", intensa: "45 segundos" },
      { nombre: "Plancha", tranquila: "20 segundos", moderada: "30 segundos", intensa: "45 segundos" },
      { nombre: "Zancadas", tranquila: "8 por lado", moderada: "12 por lado", intensa: "16 por lado" },
      { nombre: "Rodillas arriba", tranquila: "20 segundos", moderada: "30 segundos", intensa: "45 segundos" },
    ],
    "ganar-fuerza": [
      { nombre: "Sentadilla", tranquila: "6 repeticiones", moderada: "8 repeticiones", intensa: "12 repeticiones" },
      { nombre: "Flexiones", tranquila: "5 repeticiones", moderada: "8 repeticiones", intensa: "12 repeticiones" },
      { nombre: "Peso muerto con mancuernas", tranquila: "6 repeticiones", moderada: "8 repeticiones", intensa: "12 repeticiones" },
      { nombre: "Remo con mancuerna", tranquila: "6 por lado", moderada: "10 por lado", intensa: "14 por lado" },
      { nombre: "Puente de glúteos", tranquila: "10 repeticiones", moderada: "15 repeticiones", intensa: "20 repeticiones" },
      { nombre: "Press de hombros", tranquila: "6 repeticiones", moderada: "10 repeticiones", intensa: "14 repeticiones" },
    ],
    "mejorar-condicion": [
      { nombre: "Zancadas", tranquila: "8 por lado", moderada: "12 por lado", intensa: "16 por lado" },
      { nombre: "Burpees", tranquila: "4 repeticiones", moderada: "8 repeticiones", intensa: "12 repeticiones" },
      { nombre: "Rodillas arriba", tranquila: "20 segundos", moderada: "30 segundos", intensa: "45 segundos" },
      { nombre: "Plancha lateral", tranquila: "15 segundos por lado", moderada: "20 segundos por lado", intensa: "30 segundos por lado" },
      { nombre: "Saltos laterales", tranquila: "15 segundos", moderada: "25 segundos", intensa: "40 segundos" },
      { nombre: "Escaladores", tranquila: "12 repeticiones", moderada: "20 repeticiones", intensa: "30 repeticiones" },
    ],
  };

  const etiquetasObjetivo: Record<Objetivo, string> = {
    "perder-peso": "Perder peso",
    "ganar-fuerza": "Ganar fuerza",
    "mejorar-condicion": "Mejorar condición",
  };

  const etiquetasNivel: Record<Nivel, string> = {
    principiante: "Principiante",
    intermedio: "Intermedio",
    avanzado: "Avanzado",
  };

  const etiquetasIntensidad: Record<Intensidad, string> = {
    tranquila: "Tranquila",
    moderada: "Moderada",
    intensa: "Intensa",
  };

  const recomendaciones: Record<Dias, string> = {
    "2": "Entrena cuerpo completo dos veces por semana.",
    "3": "Alterna entrenamiento, descanso y entrenamiento durante la semana.",
    "4": "Divide tus entrenamientos entre tren superior y tren inferior.",
    "5": "Distribuye tus sesiones por grupos musculares e incluye un día ligero.",
  };

  function generarRutina() {
    if (!objetivo || !nivel || !intensidad || !dias) {
      setMensaje("Completa todas las opciones para generar tu rutina.");
      setRutinaGenerada(null);
      return;
    }

    const seriesPorNivel: Record<Nivel, number> = {
      principiante: 3,
      intermedio: 4,
      avanzado: 5,
    };
    const ejerciciosPorIntensidad: Record<Intensidad, number> = {
      tranquila: 4,
      moderada: 5,
      intensa: 6,
    };

    const seleccionados = ejercicios[objetivo]
      .slice(0, ejerciciosPorIntensidad[intensidad])
      .map((ejercicio) => ({
        nombre: ejercicio.nombre,
        repeticiones: ejercicio[intensidad],
      }));

    setRutinaGenerada({
      objetivo: etiquetasObjetivo[objetivo],
      nivel: etiquetasNivel[nivel],
      intensidad: etiquetasIntensidad[intensidad],
      dias: `${dias} días por semana`,
      series: seriesPorNivel[nivel],
      ejercicios: seleccionados,
      recomendacion: recomendaciones[dias],
    });
    setMensaje("");
  }

  const estiloSelector =
    "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100";

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Movimiento</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">Tu rutina</h2>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">
        Completa tus preferencias para obtener una rutina sencilla y personalizada.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-800">
          Objetivo
          <select value={objetivo} onChange={(e) => setObjetivo(e.target.value as Objetivo | "")} className={estiloSelector}>
            <option value="">Selecciona una opción</option>
            <option value="perder-peso">Perder peso</option>
            <option value="ganar-fuerza">Ganar fuerza</option>
            <option value="mejorar-condicion">Mejorar condición</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-800">
          Nivel
          <select value={nivel} onChange={(e) => setNivel(e.target.value as Nivel | "")} className={estiloSelector}>
            <option value="">Selecciona una opción</option>
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-800">
          Intensidad deseada
          <select value={intensidad} onChange={(e) => setIntensidad(e.target.value as Intensidad | "")} className={estiloSelector}>
            <option value="">Selecciona una opción</option>
            <option value="tranquila">Tranquila</option>
            <option value="moderada">Moderada</option>
            <option value="intensa">Intensa</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-800">
          Días de entrenamiento por semana
          <select value={dias} onChange={(e) => setDias(e.target.value as Dias | "")} className={estiloSelector}>
            <option value="">Selecciona una opción</option>
            <option value="2">2 días</option>
            <option value="3">3 días</option>
            <option value="4">4 días</option>
            <option value="5">5 días</option>
          </select>
        </label>
      </div>

      <button type="button" onClick={generarRutina} className="mt-5 w-full rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto">
        Generar rutina
      </button>
      {mensaje && <p role="alert" className="mt-3 text-sm font-medium text-red-600">{mensaje}</p>}

      {rutinaGenerada && (
        <div className="mt-8">
          <h3 className="text-lg font-bold text-slate-950">Rutina recomendada</h3>
          <dl className="mt-4 grid gap-3 rounded-xl bg-emerald-50 p-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div><dt className="text-slate-500">Objetivo</dt><dd className="font-semibold text-slate-900">{rutinaGenerada.objetivo}</dd></div>
            <div><dt className="text-slate-500">Nivel</dt><dd className="font-semibold text-slate-900">{rutinaGenerada.nivel}</dd></div>
            <div><dt className="text-slate-500">Intensidad</dt><dd className="font-semibold text-slate-900">{rutinaGenerada.intensidad}</dd></div>
            <div><dt className="text-slate-500">Frecuencia</dt><dd className="font-semibold text-slate-900">{rutinaGenerada.dias}</dd></div>
          </dl>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rutinaGenerada.ejercicios.map((ejercicio) => (
              <article key={ejercicio.nombre} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="font-bold text-slate-950">{ejercicio.nombre}</h4>
                <p className="mt-2 text-sm text-slate-600">{rutinaGenerada.series} series</p>
                <p className="mt-1 text-sm text-slate-600">{ejercicio.repeticiones}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800">
            {rutinaGenerada.recomendacion}
          </p>
        </div>
      )}
    </div>
  );
}
