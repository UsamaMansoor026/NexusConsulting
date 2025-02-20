import React from "react";
import SectionHeading from "./SectionHeading";
import { teamMembers } from "../assets";

const Team = () => {
  return (
    <section className="global-padding">
      <SectionHeading
        primary={false}
        subHeading="Our Team"
        heading="Our Team Members"
      />

      {/* Team Members */}
      <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-9">
        {teamMembers?.length > 0 &&
          teamMembers.map((member) => (
            <article key={member.id}>
              {/* Profile Image */}
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full duration-500 hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="py-4 pl-10 font-roboto">
                <h3 className="text-2xl md:text-lg lg:text-2xl text-primary">
                  {member.name}
                </h3>
                <p className="text-pinkish-400 text-sm capitalize font-extralight pl-[50px] relative before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:bg-pinkish-400 before:w-[40px] before:h-[2px]">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Team;
