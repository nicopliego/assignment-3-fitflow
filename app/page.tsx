"use client";

import { useState } from "react";
import Agua from "@/components/Agua";
import Nutricion from "@/components/Nutricion";
import Progreso from "@/components/Progreso";
import Rutina from "@/components/Rutina";
import Tabs, { type TabId } from "@/components/Tabs";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("rutina");

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-4xl">
        <header className="mb-8 text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
            Bienestar a tu ritmo
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            FitFlow
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Organiza una rutina sencilla, mejora tus hábitos y registra tu
            progreso desde un solo lugar.
          </p>
        </header>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

          <div
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="p-6 sm:p-10"
          >
            {activeTab === "rutina" && <Rutina />}
            {activeTab === "nutricion" && <Nutricion />}
            {activeTab === "agua" && <Agua />}
            {activeTab === "progreso" && <Progreso />}
          </div>
        </section>

        <footer className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-slate-500">
          FitFlow es un proyecto educativo. Sus resultados no sustituyen la
          asesoría de profesionales de la salud, nutrición o entrenamiento.
        </footer>
      </div>
    </main>
  );
}
