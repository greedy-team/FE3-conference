import { useLocation, Link } from 'react-router-dom';
import greedyIcon from '../../assets/icons/Greedy Icon.svg';
import githubIcon from '../../assets/icons/Github Icon.svg';
import discordIcon from '../../assets/icons/Discord Icon.svg';
import instagramIcon from '../../assets/icons/Instagram Icon.svg';
import FooterSection from './FooterSection';

export default function Footer({ navigationItems }) {
  const location = useLocation();

  const socials = [
    { name: 'Github', icon: githubIcon, link:'https://github.com/greedy-team' },
    { name: 'Discord', icon: discordIcon, link:'https://discord.gg/tkJ8QZbn6k' },
    { name: 'Instagram', icon: instagramIcon, link:'https://www.instagram.com/sejong_greedy/' },
  ];

  if (location.pathname === '/MenuPage') {
    return (
      <div className="fixed w-full bottom-0 flex flex-row">
        {socials.map(({ name, link }) => (
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-xl text-gray-400 m-4">
            {name}
          </a>
        ))}
      </div>
    )
  }
  return (
    <div className="w-full py-4 px-8 sm:p-8 border-t flex justify-between lg:justify-start items-start gap-4 flex-wrap mb-15">
      <FooterSection className="lg:block w-full">
        <div className="inline-flex justify-center items-center gap-6">
          <img className="w-12 h-12" src={greedyIcon} />
          <div className="w-20 h-5 text-black text-[20px] font-semibold font-['Inter'] leading-6">Greedy</div>
        </div>
      </FooterSection>

      <FooterSection label="Navigation">
        {navigationItems.map(({ id, label, path }) => (
          <Link key={id} to={path}>
            <div key={label} className="w-24 h-6 relative justify-center items-center gap-2.5">
              <div className="text-[18px] sm:text-[15px] text-black font-normal font-['Inter'] leading-6">{label}</div>
            </div>
          </Link>
        ))}
      </FooterSection>

      <FooterSection label="Contacts">
        {socials.map(({ name, icon, link }) => (
          <div key={name} className="w-24 h-6 relative justify-center items-center gap-2.5">
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2">
              <img className="w-5 h-5" src={icon} alt={name} />
              <div className="text-[18px] sm:text-[15px] text-black font-normal font-['Inter'] leading-6">{name}</div>
            </a>
          </div>
        ))}
     </FooterSection>

    </div>
  )
}