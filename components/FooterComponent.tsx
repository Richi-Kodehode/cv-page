import Link from "next/link";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex justify-around items-center p-10 max-w-screen border-t border-slate-700">
      <h1 className="text-md">{currentYear} © Alle rettigheter reservert</h1>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">Prosjekter: </h3>
        <Link
          className="hover:text-red-700 hover:scale-110 transition-all duration-300"
          href="https://github.com/Richi-Kodehode"
        >
          GitHub Repo
        </Link>
        <Link
          className="hover:text-red-700 hover:scale-110 transition-all duration-300"
          href="https://www.182media.no"
        >
          182 Media AS
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">Kontakt Informasjon</h3>
        <h1>
          <span className="font-bold">Telefon: </span>+47 932 91 307
        </h1>
        <h1>
          <span className="font-bold">E-post: </span>richi.boge@gmail.com
        </h1>
      </div>
    </section>
  );
}
