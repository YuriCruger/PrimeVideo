import { useRef, useState } from "react";
import { Check, MoreVertical, Play, Plus, VolumeX } from "lucide-react";
import { fetchData } from "../../App";
import { useQuery } from "react-query";
import { DataType, ItemType } from "../../type/dataType";
import { useAppDispatch } from "../../app/hooks";
import { setCardSelect } from "../../features/cardSlice";
import { Link } from "react-router-dom";

export function MovieCard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [playVideo, setPlayVideo] = useState<number | null>(null);
  const { data } = useQuery<DataType[]>("repos", fetchData, {
    staleTime: 1000 * 60, // 1 minute
  });
  const hoverTimeRef = useRef<number | null>(null);
  const movieTimerRef = useRef<number | null>(null);
  const dispatch = useAppDispatch();

  function handleMouseEnter(index: number) {
    hoverTimeRef.current = setTimeout(() => {
      setHoveredCard(index);
    }, 200);

    movieTimerRef.current = setTimeout(() => {
      setPlayVideo(index);
    }, 3000);
  }

  function handleMouseLeave() {
    setTimeout(() => {
      setHoveredCard(null);
      setPlayVideo(null);
    }, 200);

    if (hoverTimeRef.current !== null) {
      clearTimeout(hoverTimeRef.current);
      hoverTimeRef.current = null;
    }
    if (movieTimerRef.current !== null) {
      clearTimeout(movieTimerRef.current);
      movieTimerRef.current = null;
    }
  }

  function openDetail(item: ItemType) {
    dispatch(setCardSelect(item));
  }

  return (
    <div className="mt-20 px-20 h-96">
      <h2 className="text-white text-xl font-bold mb-5">
        Continuar Assistindo
      </h2>
      <div className="flex gap-6">
        {data?.map((itemGroup) =>
          itemGroup.map((item, index) => (
            <div key={item.title} className="relative w-full flex">
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="absolute left-0 rounded-md overflow-hidden transition delay-200 duration-300 ease-in-out hover:scale-110"
              >
                <Link to={"/detail"}>
                  <div
                    onClick={() => openDetail(item)}
                    className="relative cursor-pointer"
                  >
                    {playVideo !== index ? (
                      <img src={item.image} alt={item.title} />
                    ) : (
                      <div className="bg-black py-8 relative">
                        <video
                          autoPlay
                          muted
                          poster={item.image}
                          src={item.video}
                        />
                        <VolumeX className="absolute bottom-10 right-3 text-grayButton" />
                      </div>
                    )}

                    <div className="bg-gray-300 h-2 w-72 absolute left-6 bottom-1 rounded-lg">
                      <div
                        className={`h-2 bg-blue-500 rounded-xl w-${item.watch}`}
                      ></div>
                    </div>
                  </div>
                </Link>
                {hoveredCard === index && (
                  <div className="bg-black py-4 px-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Check
                        size={20}
                        className="bg-blue-500 rounded-full px-[2px]"
                      />
                      <span className="font-bold text-white">Prime</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 group cursor-pointer">
                        <Play
                          size={50}
                          className="bg-white rounded-full p-2 pl-3 hover:scale-125 hover:opacity-90 transition duration-200 easy-in-out group-hover:scale-125 group-hover:opacity-90"
                        />
                        <span className="font-bold text-white text-xl ">
                          Retomar
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Plus
                          size={45}
                          className="bg-grayButton rounded-full p-2 cursor-pointer text-white hover:bg-white hover:text-black hover:scale-110 transition duration-200 easy-in-out"
                        />
                        <MoreVertical
                          size={45}
                          className="bg-grayButton rounded-full p-2 cursor-pointer text-white hover:bg-white hover:text-black hover:scale-110 transition duration-200 easy-in-out"
                        />
                      </div>
                    </div>

                    <div>
                      <h2 className="font-bold text-white text-xl">
                        {item.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-3 text-gray-500 font-bold">
                      <p>{item.year}</p>
                      <p>{item.duration}</p>
                      <div className="bg-white p-[2px]">
                        <div className="bg-orange-500 rounded-sm text-white p-1">
                          {item.rating}
                        </div>
                      </div>
                    </div>

                    <div className="font-bold text-white text-lg">
                      <p>{item.indications}</p>
                    </div>

                    <div className="font-bold text-gray-500">
                      <p>{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
