import axios from "axios";
import { DataType } from "./type/dataType";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

export const fetchData = async (): Promise<DataType[]> => {
  const { data } = await axios.get(
    "https://api.npoint.io/2cd9c022193e7fa2777f"
  );
  return Object.values(data) as DataType[];
};

function App() {
  return (
    <div className="bg-bluePrime min-h-screen w-full flex flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
