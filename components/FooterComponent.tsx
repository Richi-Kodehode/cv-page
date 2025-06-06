import Link from "next/link";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex flex-col md:flex-row justify-around items-center md:items-center p-4 md:p-10 max-w-screen border-t border-white/50 gap-6 md:gap-0">
      <h1 className="text-sm md:text-md order-3 md:order-1 text-center">
        {currentYear} © Alle rettigheter reservert
      </h1>
      <div className="flex flex-col gap-2 order-1 md:order-2 text-center md:text-left">
        <h3 className="font-bold text-base md:text-lg w-50">Prosjekter: </h3>
        <Link
          className="hover:scale-105 transition-all  duration-300 text-sm md:text-base"
          href="https://github.com/Richi-Kodehode"
        >
          GitHub Repo
        </Link>
        <Link
          className="hover:scale-105 transition-all duration-300 text-sm md:text-base"
          href="https://www.182media.no"
        >
          182 Media AS
        </Link>
      </div>
      <div className="flex flex-col gap-2 order-2 md:order-3 text-center md:text-left">
        <h3 className="font-bold text-base md:text-lg">Kontakt Informasjon</h3>
        <h1 className="text-sm md:text-base">
          <span className="font-bold">Telefon: </span>+47 932 91 307
        </h1>
        <h1 className="text-sm md:text-base">
          <span className="font-bold">E-post: </span>richi.boge@gmail.com
        </h1>
      </div>
    </section>
  );
}
