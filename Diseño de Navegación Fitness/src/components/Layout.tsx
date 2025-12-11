import { Outlet, Link, useLocation } from "react-router";
import { Dumbbell, Home, Calendar, TrendingUp, Apple, User } from "lucide-react";
import { Button } from "./ui/button";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Inicio", icon: Home },
    { path: "/workouts", label: "Rutinas", icon: Dumbbell },
    { path: "/nutrition", label: "Nutrición", icon: Apple },
    { path: "/progress", label: "Progreso", icon: TrendingUp },
    { path: "/schedule", label: "Horario", icon: Calendar },
    { path: "/profile", label: "Perfil", icon: User },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-lg">
                <Dumbbell className="size-6 text-white" />
              </div>
              <div>
                <h1 className="text-slate-900">FitPro</h1>
                <p className="text-sm text-slate-600">Tu entrenador personal</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="gap-2 whitespace-nowrap"
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-slate-600">
          <p>© 2025 FitPro - Alcanza tus metas fitness</p>
        </div>
      </footer>
    </div>
  );
}
