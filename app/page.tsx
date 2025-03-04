export default function Page() {
  return (
    <section className="prose">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl lg:text-6xl font-semibold tracking-tighter">
            Hi, I'm Zach.
          </h1>
          <p className="text-2xl lg:text-5xl">
            {`I'm a student, developer, and musician.`}
          </p>
        </div>
        <img src="rounded-headshot.png" className="w-[750px] lg:w-[600px]" alt="Zach's Headshot" />
      </div>

      <div className="py-4"></div>
      <div className="text-4xl">
        Experiences
      </div>
    </section>
  )
}
