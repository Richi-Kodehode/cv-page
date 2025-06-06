import Link from "next/link";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-around items-center p-10 max-w-screen border-t border-slate-700">
      <h1 className="text-md">{currentYear} © Alle rettigheter reservert</h1>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">Prosjekter: </h3>
        <Link href="https://github.com/Richi-Kodehode">GitHub Repo</Link>
        <Link href="https://www.182media.no">182 Media AS</Link>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">Kontakt Informasjon</h3>
        <h1>Telefon: +47 932 91 307</h1>
        <h1>E-post: richi.boge@gmail.com</h1>
      </div>
    </div>
  );
}
