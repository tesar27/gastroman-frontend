import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? "bg-emerald-500/20 text-emerald-300" : "text-slate-300 hover:bg-white/10"}`;

const AdminLayout = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const onLogout = () => {
    authService.signOut();
    navigate("/admin/auth");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:grid-cols-[240px_1fr] md:p-6">
        <aside className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur md:sticky md:top-6 md:h-[calc(100vh-3rem)]">
          <Link to="/" className="block text-xl font-bold text-emerald-300">
            Gastroman
          </Link>
          <p className="mt-1 text-xs text-slate-400">
            Restaurant Partner Admin
          </p>

          <nav className="mt-6 space-y-1">
            <NavLink to="/admin/restaurants" className={navLinkClass}>
              Restaurants
            </NavLink>
            <NavLink to="/admin/restaurants/new" className={navLinkClass}>
              Add Restaurant
            </NavLink>
          </nav>

          <div className="mt-8 rounded-xl border border-white/10 bg-slate-900/60 p-3">
            <p className="text-xs font-medium text-slate-400">Signed in as</p>
            <p className="truncate text-sm font-semibold text-slate-100">
              {user?.email ?? "admin@example.com"}
            </p>
            <button
              type="button"
              onClick={onLogout}
              className="mt-3 w-full rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-400"
            >
              Log out
            </button>
          </div>
        </aside>

        <main className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
