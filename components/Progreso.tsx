"use client";

import { useEffect, useState } from "react";

export default function Progreso() {
  const [pesoInicial, setPesoInicial] = useState("");
  const [pesoActual, setPesoActual] = useState("");
  const [diferencia, setDiferencia] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const progresoGuardado = localStorage.getItem("fitflow-progreso");

    if (!progresoGuardado) {
      return;
    }

    try {
      const datos = JSON.parse(progresoGuardado);
      const inicial = Number(datos.pesoInicial);
      const actual = Number(datos.pesoActual);

      if (inicial > 0 && actual > 0) {
        // localStorage solo está disponible después de montar el componente.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPesoInicial(String(inicial));
        setPesoActual(String(actual));
        setDiferencia(Number((actual - inicial).toFixed(1)));
      }
    } catch {
      localStorage.removeItem("fitflow-progreso");
    }
  }, []);

  function actualizarPesoInicial(nuevoPeso: string) {
    setPesoInicial(nuevoPeso);
    setDiferencia(null);
    setError("");
  }

  function actualizarPesoActual(nuevoPeso: string) {
    setPesoActual(nuevoPeso);
    setDiferencia(null);
    setError("");
  }

  function guardarProgreso() {
    const inicial = Number(pesoInicial);
    const actual = Number(pesoActual);

    if (
      pesoInicial === "" ||
      pesoActual === "" ||
      !Number.isFinite(inicial) ||
      !Number.isFinite(actual) ||
      inicial <= 0 ||
      actual <= 0
    ) {
      setError("Ingresa pesos válidos.");
      setDiferencia(null);
      return;
    }

    const diferenciaCalculada = Number((actual - inicial).toFixed(1));

    localStorage.setItem(
      "fitflow-progreso",
      JSON.stringify({ pesoInicial: inicial, pesoActual: actual }),
    );
    setDiferencia(diferenciaCalculada);
    setError("");
  }

  function borrarProgreso() {
    localStorage.removeItem("fitflow-progreso");
    setPesoInicial("");
    setPesoActual("");
    setDiferencia(null);
    setError("");
  }

  function obtenerMensaje() {
    if (diferencia === null) {
      return "";
    }

    if (diferencia < 0) {
      return `Has perdido ${Math.abs(diferencia)} kg.`;
    }

    if (diferencia > 0) {
      return `Has ganado ${diferencia} kg.`;
    }

    return "Tu peso no ha cambiado.";
  }

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Seguimiento
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">Tu progreso</h2>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">
        Registra tu peso inicial y tu peso actual para conocer la diferencia.
      </p>

      <div className="mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="peso-inicial"
            className="block text-sm font-semibold text-slate-800"
          >
            Peso inicial
          </label>
          <input
            id="peso-inicial"
            type="number"
            min="0"
            step="0.1"
            value={pesoInicial}
            onChange={(event) => actualizarPesoInicial(event.target.value)}
            placeholder="Ejemplo: 70"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />
        </div>

        <div>
          <label
            htmlFor="peso-actual"
            className="block text-sm font-semibold text-slate-800"
          >
            Peso actual
          </label>
          <input
            id="peso-actual"
            type="number"
            min="0"
            step="0.1"
            value={pesoActual}
            onChange={(event) => actualizarPesoActual(event.target.value)}
            placeholder="Ejemplo: 68.5"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={guardarProgreso}
          className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Guardar progreso
        </button>
        <button
          type="button"
          onClick={borrarProgreso}
          className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
        >
          Borrar progreso
        </button>
      </div>

      {error && (
        <p role="alert" className="mt-3 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      {diferencia !== null && (
        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-slate-950">
            Progreso guardado
          </h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-slate-500">
                Peso inicial
              </dt>
              <dd className="mt-1 text-xl font-bold text-slate-950">
                {pesoInicial} kg
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">
                Peso actual
              </dt>
              <dd className="mt-1 text-xl font-bold text-slate-950">
                {pesoActual} kg
              </dd>
            </div>
          </dl>
          <p className="mt-5 font-semibold text-emerald-700">
            {obtenerMensaje()}
          </p>
        </div>
      )}
    </div>
  );
}
