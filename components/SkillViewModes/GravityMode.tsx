"use client";

import Gravity, { MatterBody } from "@/components/fancy/physics/gravity";

import { useEffect, useState } from "react";
const skills = [
  {
    name: "C++",
    icon: "https://skillicons.dev/icons?i=cpp",
  },
  {
    name: "C#",
    icon: "https://skillicons.dev/icons?i=cs",
  },
  { name: "C", icon: "https://skillicons.dev/icons?i=c" },

  {
    name: "Python",
    icon: "https://skillicons.dev/icons?i=python",
  },
  {
    name: "PHP",
    icon: "https://skillicons.dev/icons?i=php",
  },
  {
    name: "JavaScript",
    icon: "https://skillicons.dev/icons?i=js",
  },
  {
    name: "TypeScript",
    icon: "https://skillicons.dev/icons?i=ts",
  },

  {
    name: "ASP.NET Core",
    icon: "https://skillicons.dev/icons?i=dotnet",
  },
  {
    name: "React",
    icon: "https://skillicons.dev/icons?i=react",
  },
  {
    name: "Next.js",
    icon: "https://skillicons.dev/icons?i=nextjs",
  },
  {
    name: "Node.js",
    icon: "https://skillicons.dev/icons?i=nodejs",
  },
  {
    name: "Express.js",
    icon: "https://skillicons.dev/icons?i=express",
  },

  {
    name: "MongoDB",
    icon: "https://skillicons.dev/icons?i=mongodb",
  },
  {
    name: "MySQL",
    icon: "https://skillicons.dev/icons?i=mysql",
  },
  {
    name: "PostgreSQL",
    icon: "https://skillicons.dev/icons?i=postgres",
  },

  {
    name: "Git",
    icon: "https://skillicons.dev/icons?i=git",
  },
  {
    name: "GitHub",
    icon: "https://skillicons.dev/icons?i=github",
  },
  {
    name: "Postman",
    icon: "https://skillicons.dev/icons?i=postman",
  },
  {
    name: "Azure",
    icon: "https://skillicons.dev/icons?i=azure",
  },
  {
    name: "VS Code",
    icon: "https://skillicons.dev/icons?i=vscode",
  },
];

export default function GravityMode() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex h-72 w-full flex-col items-center border-3 border-pink-400 rounded-2xl bg-radial-[at_top_right] from-pink-400/20">
      <h2 className="pointer-events-none pt-24 text-xl text-white">
        tools and framerworks I use.
      </h2>

      {mounted && (
        <Gravity gravity={{ x: 0, y: 1 }} className="h-full w-full">
          {skills.map((skill) => {
            const randomX = Math.random() * 60 + 20;
            const randomY = Math.random() * 20 + 5;
            const bodyType = Math.random() > 0.7 ? "rectangle" : "circle";

            return (
              <MatterBody
                key={skill.name}
                matterBodyOptions={{
                  friction: 0.5,
                  restitution: 0.2,
                }}
                bodyType={bodyType}
                x={`${randomX}%`}
                y={`${randomY}%`}
              >
                <div
                  className={`p-4 ${
                    bodyType === "circle" ? "rounded-full" : "rounded-md"
                  } bg-white border border-border shadow-md`}
                  title={skill.name}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    width={24}
                    height={24}
                  />
                </div>
              </MatterBody>
            );
          })}
        </Gravity>
      )}
    </div>
  );
}
