import { workExperience } from "../config/workExperience";
import { education } from "../config/education";
import { courses } from "../config/courses";
import { additionalInfo } from "../config/additionalInfo";

export default function MainComponent() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen max-w-screen-lg mx-auto justify-start items-start p-4 md:p-10 gap-4 md:gap-15 border my-10 bg-slate-800/40 border-slate-600">
      <div>
        <h3 className="text-xl md:text-2xl font-bold">
          Personlig Informasjon:{" "}
        </h3>
      </div>

      <div>
        <p>
          <span className="font-bold">Navn: </span>
          <span>Richard Bøge</span>
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
      <div>
        <h3 className="text-xl md:text-2xl font-bold">Nøkkelkompetanser: </h3>
      </div>
      <div>
        <div>
          <p className="font-bold text-white">
            Serviceinnstilt, punktlig, allsidig, lojal, arbeidsmoral
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold">Arbeidserfaring: </h3>
      </div>
      <div className="col-span-1 md:col-span-2">
        <div className="space-y-4  ">
          {workExperience.map((job, index) => (
            <div key={index} className="border-b border-gray-200 pb-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                <h4 className="font-bold text-lg md:text-xl">{job.position}</h4>
                <span className="text-sm text-white">{job.years}</span>
              </div>
              <p className="font-semibold text-white">
                {job.company}, {job.location}
              </p>
              <p className="text-sm md:text-md text-white">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold">Utdanning: </h3>
      </div>
      <div className="col-span-1 md:col-span-2">
        <div className="space-y-4  ">
          {education.map((edu, index) => (
            <div key={index} className="border-b border-gray-200 pb-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                <h4 className="font-bold text-lg md:text-xl">{edu.program}</h4>
                <span className="text-sm text-white">{edu.years}</span>
              </div>
              <p className="font-semibold text-white">
                {edu.school}
                {edu.location && `, ${edu.location}`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold">Kurs: </h3>
      </div>
      <div className="col-span-1 md:col-span-2">
        <div className="space-y-4  ">
          {courses.map((course, index) => (
            <div key={index} className="border-b border-gray-200 pb-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                <h4 className="font-bold text-lg md:text-xl">
                  {course.courseTitle}
                </h4>
                <span className="text-sm text-white">{course.year}</span>
              </div>
              <p className="font-semibold text-white">
                {course.institution}, {course.location}
              </p>
              <p className="text-sm md:text-md text-white">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold">Data: </h3>
      </div>
      <div>
        <p className="text-white text-sm md:text-base">
          {additionalInfo.data.join(", ")}
        </p>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold">Språk: </h3>
      </div>
      <div>
        <p className="text-white text-sm md:text-base">
          {additionalInfo.languages.join(", ")}
        </p>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold">Interesser: </h3>
      </div>
      <div>
        <p className="text-white text-sm md:text-base">
          {additionalInfo.interests.join(", ")}
        </p>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold">Referanser: </h3>
      </div>
      <div>
        <p className="text-white text-sm md:text-base">
          {additionalInfo.references}
        </p>
      </div>
      <div></div>
    </section>
  );
}
