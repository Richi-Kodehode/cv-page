export default function MainComponent() {
  return (
    <div className="flex flex-row gap-70 min-h-screen max-w-screen-lg mx-auto justify-start items-start p-10  ">
      <div>
        <h3 className="text-2xl font-bold">Personlig Informasjon</h3>
      </div>
      <div className="">
        <p>
          <span className="font-bold">Navn: </span>
          <span>Richi Bøge</span>
        </p>
        <p>
          <span className="font-bold">E-post: </span>
          <span>richi.boge@gmail.com</span>
        </p>
        <p>
          <span className="font-bold">Telefon: </span>
          <span>+47 932 91 307</span>
        </p>
      </div>
    </div>
  );
}
