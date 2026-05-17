import Header from "./Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="px-4 sm:px-8 md:px-16 lg:px-20 py-8">
        <div className="min-h-[85vh] rounded-3xl bg-white/10 backdrop-blur-sm shadow-xl p-6 sm:p-10">
          <Outlet />
        </div>
      </main>

    </div>
  );
}

export default RootLayout;
