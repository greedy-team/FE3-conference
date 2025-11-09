import { Link } from 'react-router-dom';
import greedyIcon from '../../assets/icons/Greedy Icon.svg';
import githubIcon from '../../assets/icons/Github Icon.svg';
import discordIcon from '../../assets/icons/Discord Icon.svg';
import instagramIcon from '../../assets/icons/Instagram Icon.svg';
import FooterSection from './FooterSection';

export default function Footer() {
  const navigationItems = [
    { id: 'nav-home', label: 'Home', path: '/' },
    { id: 'nav-intro', label: '소개', path: '/IntroductionPage' },
    { id: 'nav-lottery', label: '추첨', path: '/LotteryPage' },
    { id: 'nav-about', label: 'About us', path: 'https://greedy-team.netlify.app/' },
  ];

  const socials = [
    { name: 'Github', icon: githubIcon, link:'https://github.com/greedy-team' },
    { name: 'Discord', icon: discordIcon, link:'https://discord.gg/tkJ8QZbn6k' },
    { name: 'Instagram', icon: instagramIcon, link:'https://greedy-team.netlify.app/' },
  ];

  return (
    <div className="w-full py-4 px-8 sm:p-8 border-t flex justify-start items-start gap-4 flex-wrap overflow-hidden">
      <FooterSection className="hidden lg:block w-full">
        <div className="inline-flex justify-center items-center gap-6">
          <img className="w-12 h-12" src={greedyIcon} />
          <div className="w-20 h-5 text-black text-[20px] font-semibold font-['Inter'] leading-6">Greedy</div>
        </div>
        <div className="h-[10px]"/>
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