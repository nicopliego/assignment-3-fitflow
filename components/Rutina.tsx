"use client";

import { useState } from "react";

type Objetivo = "perder-peso" | "ganar-fuerza" | "mejorar-condicion";

type Ejercicio = {
  nombre: string;
  series: string;
  repeticiones: string;
};

export default function Rutina() {
  const [objetivo, setObjetivo] = useState<Objetivo | "">("");
  const [rutinaGenerada, setRutinaGenerada] = useState<Ejercicio[] | null>(
    null,
  );
  const [mensaje, setMensaje] = useState("");

  const rutinas: Record<Objetivo, Ejercicio[]> = {
    "perder-peso": [
      {
        nombre: "Sentadillas",
        series: "3 series",
        repeticiones: "15 repeticiones",
      },
      {
        nombre: "Mountain climbers",
        series: "3 series",
        repeticiones: "20 repeticiones",
      },
      {
        nombre: "Jumping jacks",
        series: "3 series",
        repeticiones: "30 segundos",
      },
      {
        nombre: "Plancha",
        series: "3 series",
        repeticiones: "30 segundos",
      },
    ],
    "ganar-fuerza": [
      {
        nombre: "Sentadilla",
        series: "4 series",
        repeticiones: "8 repeticiones",
      },
      {
        nombre: "Flexiones",
        series: "4 series",
        repeticiones: "8 repeticiones",
      },
      {
        nombre: "Peso muerto con mancuernas",
        series: "4 series",
        repeticiones: "8 repeticiones",
      },
      {
        nombre: "Remo con mancuerna",
        series: "4 series",
        repeticiones: "10 repeticiones",
      },
    ],
    "mejorar-condicion": [
      {
        nombre: "Zancadas",
        series: "3 series",
        repeticiones: "12 repeticiones",
      },
      {
        nombre: "Burpees",
        series: "3 series",
        repeticiones: "8 repeticiones",
      },
      {
        nombre: "Rodillas arriba",
        series: "3 series",
        repeticiones: "30 segundos",
      },
      {
        nombre: "Plancha lateral",
        series: "3 series",
        repeticiones: "20 segundos por lado",
      },
    ],
  };

  function generarRutina() {
    if (!objetivo) {
      setMensaje("Selecciona un objetivo.");
      setRutinaGenerada(null);
      return;
    }

    setRutinaGenerada(rutinas[objetivo]);
    setMensaje("");
  }

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Movimiento
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">Tu rutina</h2>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">
        Elige tu objetivo para obtener una rutina sencilla de cuatro
        ejercicios.
      </p>

      <div className="mt-6 max-w-md">
        <label
          htmlFor="objetivo"
          className="block text-sm font-semibold text-slate-800"
        >
          Objetivo
        </label>
        <select
          id="objetivo"
          value={objetivo}
          onChange={(event) => setObjetivo(event.target.value as Objetivo | "")}
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
        >
          <option value="">Selecciona una opción</option>
          <option value="perder-peso">Perder peso</option>
          <option value="ganar-fuerza">Ganar fuerza</option>
          <option value="mejorar-condicion">Mejorar condición</option>
        </select>

        <button
          type="button"
          onClick={generarRutina}
          className="mt-4 w-full rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto"
        >
          Generar rutina
        </button>

        {mensaje && (
          <p role="alert" className="mt-3 text-sm font-medium text-red-600">
            {mensaje}
          </p>
        )}
      </div>

      {rutinaGenerada && (
        <div className="mt-8">
          <h3 className="text-lg font-bold text-slate-950">
            Rutina recomendada
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {rutinaGenerada.map((ejercicio) => (
              <article
                key={ejercicio.nombre}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <h4 className="font-bold text-slate-950">
                  {ejercicio.nombre}
                </h4>
                <p className="mt-2 text-sm text-slate-600">
                  {ejercicio.series}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {ejercicio.repeticiones}
                </p>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
