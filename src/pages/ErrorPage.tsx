import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError() as Error;
  console.log(error);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-2xl">Oops!</h1>
      <p className="font-semibold">Desculpe, ocorreu um erro inesperado</p>
      <p className="text-red-500">{error.message}</p>
    </div>
  );
}
