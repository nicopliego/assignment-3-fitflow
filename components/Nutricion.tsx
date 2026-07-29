"use client";

import { useState } from "react";

type Necesidad = "menu" | "antojo" | "receta";
type Resultado = {
  titulo: string;
  elementos: {
    tipo?: string;
    nombre: string;
    ingredientes?: string[];
    pasos?: string[];
  }[];
};

export default function Nutricion() {
  const [necesidad, setNecesidad] = useState<Necesidad | "">("");
  const [opcion, setOpcion] = useState("");
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [mensaje, setMensaje] = useState("");

  const menus: Record<string, Resultado> = {
    balanceado: { titulo: "Menú balanceado", elementos: [
      { tipo: "Desayuno", nombre: "Avena con plátano y yogurt" },
      { tipo: "Comida", nombre: "Pollo con arroz y verduras" },
      { tipo: "Cena", nombre: "Tostadas de atún con aguacate" },
    ] },
    ligero: { titulo: "Menú ligero", elementos: [
      { tipo: "Desayuno", nombre: "Yogurt con fruta" },
      { tipo: "Comida", nombre: "Ensalada con pollo" },
      { tipo: "Cena", nombre: "Sopa de verduras con queso panela" },
    ] },
    proteina: { titulo: "Menú alto en proteína", elementos: [
      { tipo: "Desayuno", nombre: "Huevos con pan integral" },
      { tipo: "Comida", nombre: "Carne magra con arroz y brócoli" },
      { tipo: "Cena", nombre: "Bowl de yogurt griego con fruta y nueces" },
    ] },
    vegetariano: { titulo: "Menú vegetariano", elementos: [
      { tipo: "Desayuno", nombre: "Tostada integral con aguacate y fruta" },
      { tipo: "Comida", nombre: "Tazón de lentejas con arroz y verduras" },
      { tipo: "Cena", nombre: "Quesadillas de champiñones con ensalada" },
    ] },
  };

  const antojos: Record<string, Resultado> = {
    dulce: { titulo: "Algo dulce", elementos: [{ nombre: "Manzana con yogurt y canela", ingredientes: ["Manzana", "Yogurt natural", "Canela"], pasos: ["Corta la manzana, agrega el yogurt y termina con canela."] }] },
    salado: { titulo: "Algo salado", elementos: [{ nombre: "Tostada con aguacate", ingredientes: ["Tostada horneada", "Aguacate", "Limón y sal"], pasos: ["Machaca el aguacate con limón y sal, y colócalo sobre la tostada."] }] },
    fresco: { titulo: "Algo fresco", elementos: [{ nombre: "Pepino con yogurt y limón", ingredientes: ["Pepino", "Yogurt natural", "Limón"], pasos: ["Corta el pepino y mézclalo con yogurt y unas gotas de limón."] }] },
    crujiente: { titulo: "Algo crujiente", elementos: [{ nombre: "Garbanzos tostados", ingredientes: ["Garbanzos cocidos", "Aceite de oliva", "Paprika"], pasos: ["Mezcla los ingredientes y hornea hasta que los garbanzos estén crujientes."] }] },
  };

  const recetas: Record<string, Resultado> = {
    desayuno: { titulo: "Receta fácil para el desayuno", elementos: [{ nombre: "Avena con plátano", ingredientes: ["Avena", "Leche", "Plátano"], pasos: ["Calienta la avena con la leche.", "Corta el plátano.", "Sirve el plátano sobre la avena."] }] },
    comida: { titulo: "Receta fácil para la comida", elementos: [{ nombre: "Bowl de pollo y arroz", ingredientes: ["Pollo cocido", "Arroz cocido", "Verduras"], pasos: ["Calienta el pollo y el arroz.", "Agrega las verduras.", "Mezcla todo en un tazón."] }] },
    cena: { titulo: "Receta fácil para la cena", elementos: [{ nombre: "Quesadillas con verduras", ingredientes: ["Tortillas", "Queso panela", "Verduras picadas"], pasos: ["Rellena las tortillas.", "Calienta en un sartén.", "Sirve cuando el queso esté suave."] }] },
    snack: { titulo: "Receta fácil para snack", elementos: [{ nombre: "Yogurt con fruta y nueces", ingredientes: ["Yogurt natural", "Fruta", "Nueces"], pasos: ["Coloca el yogurt en un tazón.", "Agrega la fruta.", "Termina con las nueces."] }] },
  };

  const opcionesSecundarias: Record<Necesidad, { valor: string; texto: string }[]> = {
    menu: [
      { valor: "balanceado", texto: "Balanceado" }, { valor: "ligero", texto: "Ligero" },
      { valor: "proteina", texto: "Alto en proteína" }, { valor: "vegetariano", texto: "Vegetariano" },
    ],
    antojo: [
      { valor: "dulce", texto: "Algo dulce" }, { valor: "salado", texto: "Algo salado" },
      { valor: "fresco", texto: "Algo fresco" }, { valor: "crujiente", texto: "Algo crujiente" },
    ],
    receta: [
      { valor: "desayuno", texto: "Desayuno" }, { valor: "comida", texto: "Comida" },
      { valor: "cena", texto: "Cena" }, { valor: "snack", texto: "Snack" },
    ],
  };

  function cambiarNecesidad(nuevaNecesidad: Necesidad | "") {
    setNecesidad(nuevaNecesidad);
    setOpcion("");
    setResultado(null);
    setMensaje("");
  }

  function generarSugerencia() {
    if (!necesidad || !opcion) {
      setMensaje("Completa las opciones para recibir una sugerencia.");
      setResultado(null);
      return;
    }

    if (necesidad === "menu") setResultado(menus[opcion]);
    if (necesidad === "antojo") setResultado(antojos[opcion]);
    if (necesidad === "receta") setResultado(recetas[opcion]);
    setMensaje("");
  }

  const estiloSelector = "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100";

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Alimentación</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">Nutrición</h2>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">Elige qué necesitas para recibir una sugerencia sencilla.</p>

      <div className="mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-800">
          ¿Qué necesitas hoy?
          <select value={necesidad} onChange={(e) => cambiarNecesidad(e.target.value as Necesidad | "")} className={estiloSelector}>
            <option value="">Selecciona una opción</option>
            <option value="menu">Menú para el día</option>
            <option value="antojo">Tengo un antojo</option>
            <option value="receta">Receta fácil</option>
          </select>
        </label>

        {necesidad && (
          <label className="text-sm font-semibold text-slate-800">
            Elige una opción
            <select value={opcion} onChange={(e) => { setOpcion(e.target.value); setResultado(null); setMensaje(""); }} className={estiloSelector}>
              <option value="">Selecciona una opción</option>
              {opcionesSecundarias[necesidad].map((item) => <option key={item.valor} value={item.valor}>{item.texto}</option>)}
            </select>
          </label>
        )}
      </div>

      <button type="button" onClick={generarSugerencia} className="mt-5 w-full rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto">
        Generar sugerencia
      </button>
      {mensaje && <p role="alert" className="mt-3 text-sm font-medium text-red-600">{mensaje}</p>}

      {resultado && (
        <div className="mt-8">
          <h3 className="text-lg font-bold text-slate-950">{resultado.titulo}</h3>
          <div className={`mt-4 grid gap-4 ${resultado.elementos.length > 1 ? "sm:grid-cols-3" : "max-w-2xl"}`}>
            {resultado.elementos.map((elemento) => (
              <article key={elemento.tipo ?? elemento.nombre} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                {elemento.tipo && <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">{elemento.tipo}</p>}
                <h4 className="mt-1 font-bold leading-6 text-slate-950">{elemento.nombre}</h4>
                {elemento.ingredientes && <div className="mt-4"><h5 className="text-sm font-semibold text-slate-800">Ingredientes</h5><ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600">{elemento.ingredientes.map((ingrediente) => <li key={ingrediente}>{ingrediente}</li>)}</ul></div>}
                {elemento.pasos && <div className="mt-4"><h5 className="text-sm font-semibold text-slate-800">Preparación</h5><ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-slate-600">{elemento.pasos.map((paso) => <li key={paso}>{paso}</li>)}</ol></div>}
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
