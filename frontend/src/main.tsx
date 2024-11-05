// import { StrictMode, useEffect } from "react";
// import { createRoot } from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import { useAuthStore } from "./stores/authUser";
// import { Loader } from "lucide-react";
// import router from "./Router";
// import "./index.css";

// function App() {
//   const { user, isCheckingAuth, authCheck } = useAuthStore();

//   useEffect(() => {
//     authCheck();
//   }, [authCheck]);

//   if (isCheckingAuth) {
//     return (
//       <div className="h-screen">
//         <div className="flex justify-center items-center bg-black h-full">
//           <Loader className="animate-spin text-red-600 size-10" />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <RouterProvider router={router} />
//       <Toaster />
//     </>
//   );
// }

// export default App;

// // Renderizar el componente App en el index principal
// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Router.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
