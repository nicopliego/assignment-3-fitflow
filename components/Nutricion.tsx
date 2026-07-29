"use client";

import { useState } from "react";

type TipoMenu = "balanceado" | "ligero" | "alto-proteina";

type Comida = {
  tipo: string;
  nombre: string;
};

export default function Nutricion() {
  const [tipoMenu, setTipoMenu] = useState<TipoMenu | "">("");
  const [menuGenerado, setMenuGenerado] = useState<Comida[] | null>(null);
  const [mensaje, setMensaje] = useState("");

  const menus: Record<TipoMenu, Comida[]> = {
    balanceado: [
      { tipo: "Desayuno", nombre: "Avena con plátano y yogurt" },
      { tipo: "Comida", nombre: "Pollo con arroz y verduras" },
      { tipo: "Cena", nombre: "Tostadas de atún con aguacate" },
    ],
    ligero: [
      { tipo: "Desayuno", nombre: "Yogurt con fruta" },
      { tipo: "Comida", nombre: "Ensalada con pollo" },
      { tipo: "Cena", nombre: "Sopa de verduras con queso panela" },
    ],
    "alto-proteina": [
      { tipo: "Desayuno", nombre: "Huevos con pan integral" },
      { tipo: "Comida", nombre: "Carne magra con arroz y brócoli" },
      {
        tipo: "Cena",
        nombre: "Bowl de yogurt griego con fruta y nueces",
      },
    ],
  };

  function generarMenu() {
    if (!tipoMenu) {
      setMensaje("Selecciona un tipo de menú.");
      setMenuGenerado(null);
      return;
    }

    setMenuGenerado(menus[tipoMenu]);
    setMensaje("");
  }

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Alimentación
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">Nutrición</h2>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">
        Selecciona un tipo de menú para consultar una propuesta sencilla de
        alimentación diaria.
      </p>

      <div className="mt-6 max-w-md">
        <label
          htmlFor="tipo-menu"
          className="block text-sm font-semibold text-slate-800"
        >
          Tipo de menú
        </label>
        <select
          id="tipo-menu"
          value={tipoMenu}
          onChange={(event) =>
            setTipoMenu(event.target.value as TipoMenu | "")
          }
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
        >
          <option value="">Selecciona una opción</option>
          <option value="balanceado">Balanceado</option>
          <option value="ligero">Ligero</option>
          <option value="alto-proteina">Alto en proteína</option>
        </select>

        <button
          type="button"
          onClick={generarMenu}
          className="mt-4 w-full rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto"
        >
          Generar menú
        </button>

        {mensaje && (
          <p role="alert" className="mt-3 text-sm font-medium text-red-600">
            {mensaje}
          </p>
        )}
      </div>

      {menuGenerado && (
        <div className="mt-8">
          <h3 className="text-lg font-bold text-slate-950">Menú sugerido</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {menuGenerado.map((comida) => (
              <article
                key={comida.tipo}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                  {comida.tipo}
                </h4>
                <p className="mt-2 font-bold leading-6 text-slate-950">
                  {comida.nombre}
                </p>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
