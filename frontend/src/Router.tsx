// import { createBrowserRouter } from "react-router-dom";
// import Layout from "./components/layout";
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/SignUpPage";
// import { action as signUpAction } from "./actions/signup-action";

// import NotFoundPage from "./pages/404";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "login",
//         element: <LoginPage />,
//       },
//       {
//         path: "signup",
//         element: <SignUpPage />,
//         action: signUpAction,
//       },
//       {
//         path: "*",
//         element: <NotFoundPage />,
//       },
//     ],
//   },
// ]);

// export default router;

//--------------------------------

// import { Navigate, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/SignUpPage";
// import { Toaster } from "react-hot-toast";
// import { useAuthStore } from "./stores/authUser";
// import { useEffect } from "react";
// import { Loader } from "lucide-react";
// import NotFoundPage from "./pages/404";
// import LayoutLoggedOut from "./layouts/layoutLoggedOut";
// import LayoutLoggedIn from "./layouts/layoutLoggedIn";
// import Dashboard from "./pages/Dashboard";
// import EmployeesPage from "./pages/EmployeesPage";
// import { useUserStore } from "./stores/userStore";

// function App() {
//   const { user, isCheckingAuth, authCheck } = useAuthStore();
//   const { fetchUsers, isLoadingUsers } = useUserStore();

//   useEffect(() => {
//     authCheck();
//     fetchUsers();
//   }, [authCheck, fetchUsers]);

//   if (isCheckingAuth || isLoadingUsers) {
//     return (
//       <div className="h-screen">
//         <div className="flex justify-center items-center bg-background h-full">
//           <Loader className="animate-spin text-blue-500 size-10" />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Routes>
//         <Route
//           path="/"
//           element={!user ? <LayoutLoggedOut /> : <LayoutLoggedIn />}
//         >
//           <Route index element={!user ? <HomePage /> : <Dashboard />} />
//           <Route
//             path="/login"
//             element={!user ? <LoginPage /> : <Navigate to={"/"} />}
//           />
//           <Route
//             path="/signup"
//             element={!user ? <SignUpPage /> : <Navigate to={"/"} />}
//           />
//           <Route
//             path="/employees"
//             element={user ? <EmployeesPage /> : <Navigate to={"/"} />}
//           />
//           <Route path="/*" element={<NotFoundPage />} />
//         </Route>
//       </Routes>

//       <Toaster />
//     </>
//   );
// }

// export default App;

// import { createBrowserRouter } from "react-router-dom";
// import Layout from "./components/layout";
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/SignUpPage";
// import { action as signUpAction } from "./actions/signup-action";

// import NotFoundPage from "./pages/404";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "login",
//         element: <LoginPage />,
//       },
//       {
//         path: "signup",
//         element: <SignUpPage />,
//         action: signUpAction,
//       },
//       {
//         path: "*",
//         element: <NotFoundPage />,
//       },
//     ],
//   },
// ]);

// export default router;

import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./stores/authUser";
import { useEffect } from "react";
import NotFoundPage from "./pages/404";
import LayoutLoggedOut from "./layouts/layoutLoggedOut";
import LayoutLoggedIn from "./layouts/layoutLoggedIn";
import Dashboard from "./pages/Dashboard";
import EmployeesPage from "./pages/EmployeesPage";
import { useUserStore } from "./stores/userStore";
import { Loader } from "lucide-react";
import AllUsersPage from "./pages/AllUsersPage";
import ManagerPage from "./pages/ManagerPage";
import Evaluations from "./pages/Evaluations";
import Evaluate from "./pages/Evaluate";
import EditPage from "./pages/EditPage";

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  const { fetchUsers, isLoadingUsers } = useUserStore();

  useEffect(() => {
    authCheck();
    fetchUsers();
  }, [authCheck, fetchUsers]);

  if (isCheckingAuth || isLoadingUsers) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-background h-full">
          <Loader className="animate-spin text-blue-500 size-10" />
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            !user /* && !(isCheckingAuth || isLoadingUsers)  */ ? (
              <LayoutLoggedOut />
            ) : (
              <LayoutLoggedIn />
            )
          }
        >
          <Route index element={!user ? <HomePage /> : <Dashboard />} />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to={"/"} />}
          />

          <Route
            path="/signup"
            element={!user ? <SignUpPage /> : <Navigate to={"/"} />}
          />

          <Route
            path="/all-users"
            element={user ? <AllUsersPage /> : <Navigate to={"/"} />}
          />

          <Route
            path="/managers"
            element={user ? <ManagerPage /> : <Navigate to={"/"} />}
          />

          <Route
            path="/employees"
            element={user ? <EmployeesPage /> : <Navigate to={"/"} />}
          />

          <Route
            path="/evaluations/:id"
            element={user ? <Evaluations /> : <Navigate to={"/"} />}
          />

          <Route
            path="/evaluate/:id"
            element={user ? <Evaluate /> : <Navigate to={"/"} />}
          />

          <Route
            path="/edit/:id"
            element={user ? <EditPage /> : <Navigate to={"/"} />}
          />

          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
