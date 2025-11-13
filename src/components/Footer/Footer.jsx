import { useLocation, Link } from "react-router-dom";
import greedyIcon from "../../assets/icons/Greedy Icon.svg";
import githubIcon from "../../assets/icons/Github Icon.svg";
import discordIcon from "../../assets/icons/Discord Icon.svg";
import instagramIcon from "../../assets/icons/Instagram Icon.svg";
import FooterSection from "./FooterSection";

export default function Footer({ navigationItems }) {
  const location = useLocation();

  const socials = [
    {
      id: "git",
      name: "Github",
      icon: githubIcon,
      link: "https://github.com/greedy-team",
    },
    {
      id: "dis",
      name: "Discord",
      icon: discordIcon,
      link: "https://discord.gg/tkJ8QZbn6k",
    },
    {
      id: "inst",
      name: "Instagram",
      icon: instagramIcon,
      link: "https://www.instagram.com/sejong_greedy/",
    },
  ];

  if (location.pathname === "/MenuPage") {
    return (
      <div className="fixed w-full bottom-0 flex flex-row">
        {socials.map(({ id, name, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xl text-gray-400 m-4"
          >
            {name}
          </a>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-wrap w-full p-4 border-t border-neutral-300 justify-between items-start gap-8 sm:p-8 sm:flex-row sm:justify-start">
      <FooterSection className={"w-full"}>
        <div className="flex items-center gap-2 sm:w-1/4">
          <img className="w-8 h-8" src={greedyIcon} />
          <div className="w-20 h-5 text-black text-xl font-semibold leading-6">
            Greedy
          </div>
        </div>
      </FooterSection>

      <FooterSection label="Navigation">
        {navigationItems.map(({ id, label, path }) => (
          <Link key={id} to={path}>
            <div
              key={label}
              className="w-24 h-6 relative justify-center items-center gap-2.5"
            >
              <div className="text-lg sm:text-base text-black font-normal leading-6">
                {label}
              </div>
            </div>
          </Link>
        ))}
      </FooterSection>

      <FooterSection label="Contacts">
        {socials.map(({ name, icon, link }) => (
          <div
            key={name}
            className="w-24 h-6 relative justify-center items-center gap-2.5"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex gap-2"
            >
              <img className="w-5 h-5" src={icon} alt={name} />
              <div className="text-lg sm:text-base text-black font-normal font-['Inter'] leading-6">
                {name}
              </div>
            </a>
          </div>
        ))}
      </FooterSection>
    </div>
  );
}
