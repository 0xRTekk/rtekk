import { styles } from '../styles';
import { github, linkedin, mail } from '../assets';

const Socials = () => {
  return (
    <div className={`flex gap-5 p-6`}>
      <img src={github} alt="github icon on social bar" className='w-10 h-10'/>
      <img src={linkedin} alt="linkedin icon on social bar" className='w-10 h-10'/>
      <img src={mail} alt="mail icon on social bar" className='w-10 h-10'/>
    </div>
  );
};

export default Socials;
