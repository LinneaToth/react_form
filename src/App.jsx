import LoanForm from "./Components/LoanForm";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="container border rounded-4 col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 ms-m-5 h-75 p-3 p-md-5">
        <LoanForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
