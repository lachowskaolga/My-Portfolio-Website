import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { GithubIcon, LinkedInIcon } from "./social-icons";

export default function Footer() {
  const socialLinks = {
    github: "https://github.com/lachowskaolga",
    linkedin: "https://www.linkedin.com/in/olga-lachowska/",
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">O mnie</h3>
            <p className="text-gray-300 text-[12px]">
              Tworzę nowoczesne, responsywne i wydajne strony internetowe,
              dbając o estetykę, optymalizację i intuicyjność. Specjalizuję się
              w HTML, CSS, JavaScript oraz frameworkach takich jak React, Vue.js
              i Tailwind CSS.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Linki</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="projekty"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projekty
                </a>
              </li>
              <li>
                <a
                  href="omnie"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  O mnie
                </a>
              </li>
              <li>
                <a
                  href="kontakt"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 id="contact" className="text-xl font-bold text-white mb-4">
              Media
            </h3>
            <ul className="flex space-x-4">
              <a href={socialLinks.github}>
                <GithubIcon className="text-gray-300 h-6 w-6 hover:text-white transition-colors" />
              </a>
              <a href={socialLinks.linkedin}>
                <LinkedInIcon className="text-gray-300 h-6 w-6 hover:text-white transition-colors" />
              </a>
              <a href="mailto:olgalachowska.work@gmail.com">
                <EnvelopeIcon className="text-gray-300 h-6 w-6 hover:text-white transition-colors" />
              </a>
            </ul>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} Olga Lachowska. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
