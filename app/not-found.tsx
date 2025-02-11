export default function NotFound() {
  return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-orange-900 text-white text-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold">🚧 Página em Construção 🚧</h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg">
              Estamos trabalhando para trazer uma experiência ainda melhor para você. 
              Em breve, esta página estará disponível com todas as informações necessárias.
          </p>
          <p className="mt-3 text-base md:text-lg">
              Enquanto isso, você pode retornar à página inicial.
          </p>
          <a 
              href="/" 
              className="mt-6 inline-block rounded-md bg-red-700 px-6 py-3 text-lg font-semibold transition hover:bg-red-800"
          >
              Voltar para a Página Inicial
          </a>
      </div>
  );
}