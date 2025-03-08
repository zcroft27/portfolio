import Snapshot from "./components/Experience/experience-snapshot";
import content from "./content/content";

export default function Page() {
  return (
    <section className="prose">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl lg:text-6xl font-semibold tracking-tighter">
            Hi, I'm Zach.
          </h1>
          <p className="text-2xl lg:text-5xl">
            {`I'm a passionate learner, engineer, and musician.`}
          </p>
        </div>
        <img
          src={content.headshot.src}
          className="w-[750px] lg:w-[600px]"
          alt="Zach's Headshot"
        />
      </div>

      <div className="py-4"></div>

      {/* Centered experience section on mobile */}
      <div className="flex flex-col items-center">
        <div className="text-4xl pb-8 text-center w-full lg:w-[80%] mx-auto lg:text-left">
          Experiences
        </div>

        {/* Flex for snapshots */}
        <div className="flex flex-row gap-4 flex-wrap justify-center">
          {content.experiences.map((exp, index) => (
            <Snapshot
              key={index}
              title={exp.title}
              organization={exp.org}
              imgSrc={exp.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
