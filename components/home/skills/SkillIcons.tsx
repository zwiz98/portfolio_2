import { skills } from '@/constants';
import Magnetic from '../../shared/Magnetic';
import Icon from '../../shared/Icon';
import { useState } from 'react';

export default function SkillIcons() {
  const featuredSkills = skills.filter((skill) => skill.isFeatured);

  const [isMouseOver, setIsMouseOver] = useState('');

  return (
    <section className="flex flex-wrap translate-x-[-12px] pt-[18px]">
      {featuredSkills.map((skill) => (
        <div
          onMouseEnter={() => setIsMouseOver(skill.title)}
          onMouseLeave={() => setIsMouseOver('')}
          key={skill.id}
        >
          <div className="hidden md:block">
            <Magnetic>
              <Icon
                icon={skill.icon}
                name={skill.title}
                link={skill.link}
                isMouseOver={isMouseOver}
              />
            </Magnetic>
          </div>
          <div className="md:hidden p-[12px] relative">
            <Icon icon={skill.icon} name={skill.title} link={skill.link} />
          </div>
        </div>
      ))}
    </section>
  );
}
