export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-8 text-3xl lg:text-7xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <img src="https://pngimg.com/d/rock_music_PNG32.png" width={200} alt="Rock Music Icon" />
      <p className="mt-16 text-2xl">Oops! Looks like you've hit a wrong note.</p>
    </section>
  )
}
