import Link from 'next/link';	

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
          <Link href="/" />
      </div>
  );
}