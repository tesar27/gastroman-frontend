import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? "bg-emerald-100 text-emerald-700" : "text-slate-600 hover:bg-slate-100"}`;

const AdminLayout = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const onLogout = () => {
    authService.signOut();
    navigate("/admin/auth");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:grid-cols-[240px_1fr] md:p-6">
        <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:h-[calc(100vh-3rem)] md:sticky md:top-6">
          <Link to="/" className="block text-xl font-bold text-emerald-600">
            Gastroman
          </Link>
          <p className="mt-1 text-xs text-slate-500">
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

          <div className="mt-8 rounded-xl bg-slate-100 p-3">
            <p className="text-xs font-medium text-slate-500">Signed in as</p>
            <p className="truncate text-sm font-semibold text-slate-800">
              {user?.email ?? "admin@example.com"}
            </p>
            <button
              type="button"
              onClick={onLogout}
              className="mt-3 w-full rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-white hover:bg-slate-900"
            >
              Log out
            </button>
          </div>
        </aside>

        <main className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
