function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="#e56b6f"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="pt-20 pb-0 mb-16">
      <div className="w-full h-px bg-gray-300 dark:bg-gray-700"></div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-[#e56b6f]">
        <li className="flex items-center">
          <a
            className="dark: text-[#0077B5] transition-all hover:text-neutral-800 dark:hover:text-neutral-100 flex items-center transition-all hover:text-[#e0e1dd] dark:hover:text-[#e0e1dd]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/zcroft27"
          >
            <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-orange.png" width={30}></img>
          </a>
        </li>
        <li className="flex items-center">
          <a
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 flex items-center transition-all hover:text-[#e0e1dd] dark:hover:text-[#e0e1dd]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/zachary-croft/"
          >
            <img src="https://pngimg.com/uploads/linkedIn/small/linkedIn_PNG32.png" width={30}></img>
          </a>
        </li>
        <li className="flex items-center">
          <a
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 flex items-center transition-all hover:text-[#e0e1dd] dark:hover:text-[#e0e1dd]"
            target="_blank"
            href="mailto:croft.z@northeastern.edu"
          >
            <img src="https://www.iconninja.com/files/251/835/636/black-email-icon.png" width={45}></img>
          </a>
        </li>
      </ul>
    </footer>
  )
}
