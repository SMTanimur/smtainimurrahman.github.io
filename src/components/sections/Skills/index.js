
import Fade from 'react-reveal/Fade';
import { skillsList } from 'src/helpers';
import SkillCard from './Skillcard';

const Skills = () => {
  return (
    <section className="bg-[#181b27] py-[100px] w-full" id="skills">
      <div className="max-w-5xl container mx-auto">
        <div className="flex justify-center  pb-10 flex-wrap">
          <h3 className="md:text-[2.5rem] sm:text-3xl text-2xl pl-4 text-[#98b4d4]">Skills I've experienced</h3>
          <span className="text-[#adefd1ff] text-sm italic ml-5 mt-2 sm:-mt-3">* currently learning</span>
        </div>
        <Fade bottom>
          <ul className="flex flex-wrap  justify-center">
            {skillsList.map((items, i) => (
              <li key={i} className="py-4 px-6 hover:">
                <SkillCard items={items} />
              </li>
            ))}
          </ul>{' '}
        </Fade>
      </div>
    </section>
  );
};

export default Skills;