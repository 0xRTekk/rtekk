import { github, linkedin, mail } from '../assets';

const Socials = () => {
  return (
    <div className={`flex gap-10 py-6 mt-6`}>
      <a href="https://github.com/0xRTekk/">
        <img src={github} alt="github icon on social bar" className='w-14 h-14 hover:scale-110 transition ease-in-out cursor-pointer'/>
      </a>
      <a href="www.linkedin.com/in/remi-sulpice">
        <img src={linkedin} alt="linkedin icon on social bar" className='w-14 h-14 hover:scale-110 transition ease-in-out cursor-pointer'/>
      </a>
      <a href="mailto:remi.sulpice@proton.me">
        <img src={mail} alt="mail icon on social bar" className='w-14 h-14 hover:scale-110 transition ease-in-out cursor-pointer'/>
      </a>
    </div>
  );
};

export default Socials;
