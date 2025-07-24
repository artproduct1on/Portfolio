"use client";
import { SkillsType } from "@/types";
import s from "./s.module.scss";

function WorkSkills({ skills }: { skills: SkillsType[] }) {

  return (
    <div className={s.skills}>
      {skills.map((i: SkillsType) => (
        <a
          className={s.skillsLink}
          key={i.img}
          href={i.link}
          target="_blank"
          title={i.name}
        >
          <img
            className={s.skillsImg}
            src={i.img}
            loading="lazy"
            alt={i.name}
          />
          {i.name}
        </a>
      ))}
    </div>

  );
};

export default WorkSkills;
