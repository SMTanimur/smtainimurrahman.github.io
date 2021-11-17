import { ImGit } from 'react-icons/im';
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
} from 'react-icons/io5';
import { SiRedux, SiExpress, SiGmail } from 'react-icons/si';


export const email={
  email:"mushfiqurtanim@gmail.com"
}
export const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/MushfiqurRahmanTanim',
    icon: <IoLogoGithub />,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/ogulcaneristi/',
    icon: <IoLogoLinkedin />,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100028946130014',
    icon: <IoLogoFacebook />,
  },

  {
    name: 'Twitter',
    url: 'https://twitter.com/MTanimur',
    icon: <IoLogoTwitter />,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/olcaneristi',
    icon: <IoLogoInstagram />,
  },
];

export const navLinks = [
  {
    name: 'Skills',
    url: '/#skills',
  },
  {
    name: 'Projects',
    url: '/#projects',
  },
  {
    name: 'Contact',
    url: '/#contact',
  },
];

export const skillsList = [
  {
    name: 'HTML5',
    icon: <IoLogoHtml5 fill='#f87b45' />,
  },
  {
    name: 'CSS3',
    icon: <IoLogoCss3 fill='#4d81fa' />,
  },
  {
    name: 'JavaScript',
    icon: <IoLogoJavascript fill='#f7df1e' />,
  },
  {
    name: 'ReactJS',
    icon: <IoLogoReact fill='#61dafb' />,
  },
  {
    name: 'Redux *',
    icon: <SiRedux fill='#764abc' />,
  },
  {
    name: 'NodeJS *',
    icon: <IoLogoNodejs fill='#8cc84b' />,
  },
  {
    name: 'Express *',
    icon: <SiExpress fill='#84b5' />,
  },
  {
    name: 'Git',
    icon: <ImGit fill='#f05133' />,
  },
];
