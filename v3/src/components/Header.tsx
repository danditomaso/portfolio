import { siteSettings } from "@/data/siteSettings";
import { Button } from "./index";

export default function Header() {
  return (
    <header className="h-full relative bg-gradient-to-br from-[#14a5b8]  via-[#2714b8] to-[#52141f]">
      <div className="top-0 left-0 absolute h-">
        <img src="./assets/danlogo.svg" width="64px" height="64px" className="bg-gray-800 w-16 h-16" alt="" />
      </div>
      <div className="flex flex-col place-content-center items-center min-h-full">
        <h1 className="text-6xl md:text-6xl sm:text-5xl xs:text-4xl font-light text-white uppercase">{siteSettings.siteName}</h1>
        <h2 className="xl:text-7xl lg:text-6xl md:text-6xl xs:text-4xl font-serif font-light light:text-black dark:text-white">{siteSettings.description}</h2>
        <Button type="button" title="Get In Touch" />
        {/* <svg
          className="animate-bounce w-9 h-9 text-white absolute bottom-6"
          fill="#fffe"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg> */}
        <div className="w-24 h-24 absolute bottom-6">
          <svg x="0px" y="0px" viewBox="0 0 100 125" fill="#fff">
            <path d="M46,63h8c7.7,0,14-6.3,14-14V23c0-7.7-6.3-14-14-14h-8c-7.7,0-14,6.3-14,14v26C32,56.7,38.3,63,46,63z M36,23  c0-5.5,4.5-10,10-10h8c5.5,0,10,4.5,10,10v26c0,5.5-4.5,10-10,10h-8c-5.5,0-10-4.5-10-10V23z" />
            <path d="M50,30c1.1,0,2-0.9,2-2v-6c0-1.1-0.9-2-2-2s-2,0.9-2,2v6C48,29.1,48.9,30,50,30z" />
            <path
              className="animate-bounce"
              d="M50,69c-1.1,0-2,0.9-2,2v13.2l-1.6-1.6c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l5,5l0,0c0.1,0.1,0.2,0.2,0.3,0.2  c0,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0,0.2,0.1c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0  c0.1,0,0.1,0,0.2-0.1c0.1,0,0.1,0,0.2-0.1c0.1,0,0.1-0.1,0.2-0.1c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.2l0,0l5-5  c0.8-0.8,0.8-2,0-2.8s-2-0.8-2.8,0L52,84.2V71C52,69.9,51.1,69,50,69z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
