import React from "react";


const Layout = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-2 lg:p-4">

      <h1 className="lg:text-7xl sm:text-5xl text-4xl">URL Shortener</h1>
      {children}
    </main>
  );
};

export default Layout;