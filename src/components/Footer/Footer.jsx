import greedyIcon from '../../assets/icons/Greedy Icon.svg';
import githubIcon from '../../assets/icons/Github Icon.svg';
import discordIcon from '../../assets/icons/Discord Icon.svg';
import instagramIcon from '../../assets/icons/Instagram Icon.svg';
import FooterSection from './FooterSection';

export default function Footer() {
  const socials = [
    { name: 'Github', icon: githubIcon, link:'https://github.com/greedy-team' },
    { name: 'Discord', icon: discordIcon, link:'https://discord.gg/tkJ8QZbn6k' },
    { name: 'Instagram', icon: instagramIcon, link:'https://greedy-team.netlify.app/' },
  ];

  return (
    <div className="w-screen p-8 border-t inline-flex justify-start items-start gap-4 flex-wrap overflow-hidden">
      <FooterSection>
        <div className="inline-flex justify-center items-center gap-6">
          <img className="w-12 h-12" src={greedyIcon} />
          <div className="w-20 h-5 text-black text-[20px] font-semibold font-['Inter'] leading-6">Greedy</div>
        </div>
      </FooterSection>

      <FooterSection label="Navigation">
        {['Home', '소개', '추첨', 'About us'].map((label)=>(
          <div key={label} className="w-24 h-6 relative justify-center items-center gap-2.5">
            <div className="text-[18px] text-black font-normal font-['Inter'] leading-6">{label}</div>
          </div>
        ))}
      </FooterSection>

      <FooterSection label="Contacts">
        {socials.map(({ name, icon, link }) => (
          <div key={name} className="w-24 h-6 relative justify-center items-center gap-2.5">
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2">
              <img className="w-5 h-5" src={icon} alt={name} />
              <div className="text-[18px] text-black font-normal font-['Inter'] leading-6">{name}</div>
            </a>
          </div>
        ))}
     </FooterSection>

    </div>
  )
}