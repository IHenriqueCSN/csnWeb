import Image from 'next/image';

const Header = () => {
    return (
      <header className="relative h-[50vh] md:h-[60vh] overflow-hidden pt-20 md:pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header-bg.jpg"
            alt="Header Background"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
  
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4 sm:px-6">
          <h1 className="mb-2 md:mb-4 text-4xl md:text-5xl font-bold drop-shadow-lg px-2">
            Welcome to <span className="text-blue-400 block md:inline">CSN Technology™</span>
          </h1>
          <p className="text-base md:text-xl max-w-[90%] md:max-w-2xl font-medium mt-2">
            We have solutions that make your competitors ugly-cry in shame.
            <span className="hidden sm:inline"> Now with 200% less confusing animations!</span>
          </p>
          <button className="mt-6 md:mt-8 rounded-full bg-blue-600 px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-bold transition hover:bg-blue-700 hover:scale-105">
            CTA Button Goes Here
          </button>
        </div>
      </header>
    )
}

export default Header;