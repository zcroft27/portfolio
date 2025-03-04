export default function Page() {
  return (
    <section className="prose">
      <div className="flex items-center space-x-8">
        {/* Text column on the left */}
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-6xl font-semibold tracking-tighter">
            Hi, I'm Zach.
          </h1>
          <p className="text-5xl">
            {`I'm a student, developer, and musician.`}
          </p>
        </div>

        {/* Image on the right */}
        <img src="rounded-headshot.png" width={600} alt="Zach's Headshot" />
      </div>

      <div className="py-4"></div>
      <div className="text-4xl">
        Experiences
      </div>
    </section>
  )
}
