import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import type { ReactElement } from "react";
import AdminLayout from "../components/layout/AdminLayout";
import { authService } from "../services/authService";
import LandingPage from "../pages/LandingPage";
import AdminAuthPage from "../pages/auth/AdminAuthPage";
import RestaurantsPage from "../pages/admin/RestaurantsPage";
import RestaurantFormPage from "../pages/admin/RestaurantFormPage";

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/admin/auth" replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/auth" element={<AdminAuthPage />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/admin/restaurants" replace />} />
          <Route path="restaurants" element={<RestaurantsPage />} />
          <Route path="restaurants/new" element={<RestaurantFormPage />} />
          <Route
            path="restaurants/:restaurantId/edit"
            element={<RestaurantFormPage />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
