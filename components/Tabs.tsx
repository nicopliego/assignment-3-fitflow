export type TabId = "rutina" | "nutricion" | "agua" | "progreso";

type TabsProps = {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
};

const tabs: { id: TabId; label: string }[] = [
  { id: "rutina", label: "Rutina" },
  { id: "nutricion", label: "Nutrición" },
  { id: "agua", label: "Agua" },
  { id: "progreso", label: "Progreso" },
];

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  return (
    <nav
      aria-label="Secciones de FitFlow"
      className="border-b border-slate-200 p-2 sm:p-3"
    >
      <div role="tablist" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className={`rounded-xl px-3 py-3 text-sm font-semibold transition-colors sm:text-base ${
                isActive
                  ? "bg-emerald-600 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
