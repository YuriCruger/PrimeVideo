export function Footer() {
  return (
    <footer className="flex flex-col mx-auto text-blueWatch font-semibold mt-auto py-4">
      <div className="mx-auto flex gap-2">
        <span className="text-blueWatch font-bold text-xl">Prime</span>
        <span className="text-white font-bold text-xl">Video</span>
      </div>
      <div className="flex items-center gap-4">
        <p>Termos e aviso de privacidade </p>
        <p>Enviar feedback</p>
        <p>Ajuda</p>
        <p className="text-blueHover">
          © 1996-2023, Amazon.com, Inc. ou suas afiliadas
        </p>
      </div>
    </footer>
  );
}
