import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import AppLayout from "./layout/AppLayout";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import PageNotFound from "./pages/error/NotFound/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking.jsx";
import Checkin from "./pages/Checkin.jsx";
import ProtectedRoute from "./ui/ProtectedRoute.jsx";
import AdminLayout from "./layout/AdminLayout.jsx";
import { AuthProvider } from "./features/authentication/AuthContext.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "me",
        element: <Account />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "bookings/:id",
        element: <Booking />,
      },
      {
        path: "checkin/:id",
        element: <Checkin />,
      },
      {
        path: "cabins",
        element: <Cabins />,
      },
      {
        path: "settings",
        element: <Settings readOnly />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["ADMIN"]}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" replace />,
      },
      {
        path: "me",
        element: <Account />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "cabins",
        element: <Cabins />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "bookings/:id",
        element: <Booking />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
          <RouterProvider router={router} />
        </AuthProvider>
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
