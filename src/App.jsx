import { useState } from "react";
import LoanForm from "./Components/LoanForm";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto border rounded-4 col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 ms-m-5 mt-5 h-75 p-5">
        <LoanForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
