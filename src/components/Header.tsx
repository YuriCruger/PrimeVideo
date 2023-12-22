import { ChevronDown, Search, X } from "lucide-react";
import primeLogo from "../../media/Logo-min.png";
import avatar from "../../media/adult-1.png";
import { useEffect, useRef, useState } from "react";

const inicio = ["Todos", "Filmes", "Series", "Esportes"];
const loja = ["Todos", "Alugar ou Comprar", "Canais"];
const generos = [
  "Ação e aventura",
  "Anime",
  "Comédia",
  "Documentário",
  "Drama",
  "Fantasia",
  "Terror",
  "Infantis",
  "Suspense e mistério",
  "Romance",
  "Ficção científica",
];
const destaque = [
  "Especial de Natal",
  "Esportes",
  "Vozes negras",
  "LGBTQIAP+",
  "Lançamentos Direto do Cinema",
];
const myarea = ["Todos", "Sua lista", "Aluguéis"];

export function Header() {
  const [searchBar, setSearchBar] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchBarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setSearchBar(false);
      }
    };

    inputRef.current?.focus();

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBar]);

  return (
    <header className="bg-bluePrime sticky top-2 mb-2 h-14 w-[1100px] mx-auto flex items-center font-semibold text-lg text-grayText pl-5 rounded-md z-50">
      <div>
        <img
          src={primeLogo}
          alt="Prime Video Logo"
          className="w-32 mr-20 cursor-pointer"
        />
      </div>

      <nav className="flex items-center">
        <div className="relative flex items-center px-4 h-14 group hover:bg-blueHover">
          <span className="group-hover:text-white">Início</span>
          <ChevronDown
            size={20}
            className="transform duration-300 ease-in-out rotate-0 group-hover:rotate-180 group-hover:text-white"
          />
          <ul className="bg-blueHover absolute z-50 top-14 left-0 w-full rounded-b-md shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
            {inicio.map((item) => (
              <li
                key={item}
                className="flex items-center p-2 h-14 hover:bg-white hover:text-bluePrime duration-200 ease-in-out"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center px-4 h-14 group hover:bg-blueHover">
          <span className="group-hover:text-white">Loja</span>
          <ChevronDown
            size={20}
            className="transform duration-300 ease-in-out rotate-0 group-hover:rotate-180 group-hover:text-white"
          />
          <ul className="bg-blueHover absolute z-50 top-14 left-0 max-w-max rounded-b-md shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 flex flex-col transition-all duration-300 ease-in-out">
            {loja.map((item) => (
              <li
                key={item}
                className="flex items-center p-2 h-14 hover:bg-white hover:text-bluePrime duration-200 ease-in-out whitespace-nowrap"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center px-4 h-14 hover:bg-blueHover">
          TV ao vivo
        </div>

        <div className="flex items-center px-4 h-14 group hover:bg-blueHover">
          <span className="group-hover:text-white">Categorias</span>
          <ChevronDown
            size={20}
            className="transform duration-300 ease-in-out rotate-0 group-hover:rotate-180 group-hover:text-white"
          />

          <div className="bg-blueHover absolute z-50 top-14 left-0 w-full rounded-b-md shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 flex justify-between px-32 py-5 transition-all duration-300 ease-in-out">
            <div>
              <h2 className="text-white mb-4">Gêneros</h2>
              <ul className="grid grid-cols-2">
                {generos.map((item) => (
                  <li
                    key={item}
                    className="flex items-center cursor-pointer rounded-md py-2 pl-2 pr-16 h-14 hover:bg-white hover:text-bluePrime duration-200 ease-in-out"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-white mb-4">Coleções em destaque</h2>
              <ul>
                {destaque.map((item) => (
                  <li
                    key={item}
                    className="flex items-center cursor-pointer rounded-md py-2 pl-2 pr-16 h-14 hover:bg-white hover:text-bluePrime duration-200 ease-in-out"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative flex items-center px-4 h-14 group hover:bg-blueHover">
          <span className="group-hover:text-white">Minha área</span>
          <ChevronDown
            size={20}
            className="transform duration-300 ease-in-out rotate-0 group-hover:rotate-180 group-hover:text-white"
          />
          <ul className="bg-blueHover absolute z-50 top-14 left-0 w-full rounded-b-md shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 flex flex-col transition-all duration-300 ease-in-out">
            {myarea.map((item) => (
              <li
                key={item}
                className="flex items-center p-2 h-14 hover:bg-white hover:text-bluePrime duration-200 ease-in-out whitespace-nowrap"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="ml-auto flex items-center gap-6">
        <div
          onClick={() => setSearchBar((prev) => !prev)}
          ref={searchBarRef}
          className={`cursor-pointer hover:bg-blueHover px-4 h-14 flex items-center ${
            searchBar && "bg-blueHover"
          }`}
        >
          {searchBar ? <X size={28} /> : <Search id="outside" size={28} />}

          {searchBar && (
            <div className="bg-blueHover cursor-auto absolute top-14 left-0 w-full rounded-b-md shadow-lg p-4">
              <div className="flex items-center gap-3 rounded-md border-2 border-white p-4">
                <Search id="inside" size={28} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Busca"
                  className="bg-transparent focus:outline-none w-full text-white z-40"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                />
                {inputValue && (
                  <span className="text-white cursor-pointer">Limpar</span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-5 cursor-pointer hover:bg-blueHover px-4 h-14">
          <span>Yuri Cruger</span>
          <img src={avatar} alt="avatar adult" className="w-10" />
        </div>
      </div>
    </header>
  );
}
