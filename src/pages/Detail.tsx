import { useAppSelector } from "../app/hooks";

export function Detail() {
  const cardSelect = useAppSelector((state) => state.card.value);
  console.log(cardSelect);

  return (
    <div className="text-white w-full h-full">
      <div className="h-">
        <video
          className="h-full"
          autoPlay
          muted
          poster={cardSelect?.image}
          src={cardSelect?.video}
        />
      </div>
    </div>
  );
}

{
  /* <div className="flex gap-6 items-center justify-center mt-4 w-full">
        <p>{cardSelect?.title}</p>
        <p>Detalhes</p>
      </div> */
}
