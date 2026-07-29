"use client";

import { useState } from "react";

export default function Agua() {
  const [peso, setPeso] = useState("");
  const [mililitros, setMililitros] = useState<number | null>(null);
  const [litros, setLitros] = useState<number | null>(null);
  const [error, setError] = useState("");

  function actualizarPeso(nuevoPeso: string) {
    setPeso(nuevoPeso);
    setMililitros(null);
    setLitros(null);
    setError("");
  }

  function calcularAgua() {
    const pesoEnNumero = Number(peso);

    if (peso === "" || !Number.isFinite(pesoEnNumero) || pesoEnNumero <= 0) {
      setError("Ingresa un peso válido.");
      setMililitros(null);
      setLitros(null);
      return;
    }

    const aguaEnMililitros = pesoEnNumero * 35;
    const aguaEnLitros = aguaEnMililitros / 1000;

    setMililitros(aguaEnMililitros);
    setLitros(Number(aguaEnLitros.toFixed(1)));
    setError("");
  }

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Hidratación
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">Agua diaria</h2>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">
        Ingresa tu peso para calcular una estimación sencilla de tu consumo
        diario de agua.
      </p>

      <div className="mt-6 max-w-md">
        <label
          htmlFor="peso-agua"
          className="block text-sm font-semibold text-slate-800"
        >
          Peso en kilogramos
        </label>
        <input
          id="peso-agua"
          type="number"
          min="0"
          step="0.1"
          value={peso}
          onChange={(event) => actualizarPeso(event.target.value)}
          placeholder="Ejemplo: 65"
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
        />

        <button
          type="button"
          onClick={calcularAgua}
          className="mt-4 w-full rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto"
        >
          Calcular agua
        </button>

        {error && (
          <p role="alert" className="mt-3 text-sm font-medium text-red-600">
            {error}
          </p>
        )}
      </div>

      {mililitros !== null && litros !== null && (
        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-slate-950">
            Recomendación diaria
          </h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-medium text-slate-500">
                Peso ingresado
              </dt>
              <dd className="mt-1 text-xl font-bold text-slate-950">
                {peso} kg
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">
                Agua en mililitros
              </dt>
              <dd className="mt-1 text-xl font-bold text-slate-950">
                {mililitros} ml
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">
                Agua en litros
              </dt>
              <dd className="mt-1 text-xl font-bold text-emerald-700">
                {litros} L
              </dd>
            </div>
          </dl>
        </div>
      )}

      <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-500">
        Esta cantidad es una estimación general y puede variar según tu
        actividad y necesidades personales.
      </p>
    </div>
  );
}
