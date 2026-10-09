"use client";

import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

import { ReactNode, useEffect, useRef, useState } from "react";
import MessageGroup, { MessageCard } from "@/components/Message";
import clsx from "clsx";

export default function IndexPage() {
  const [aboutMe, setAboutMe] = useState(false);
  const [experience, setExperience] = useState(false);
  const [projects, setProjects] = useState(false);
  const [skills, setSkills] = useState(false);
  const [contact, setContact] = useState(false);
  const [resume, setResume] = useState(false);

  const [flow, setFlow] = useState<ReactNode[]>([]);

  const scrollRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [flow]);

  const handleAboutMe = () => {
    setAboutMe(true);
    return setFlow([
      ...flow,
      <>
        <MessageGroup
          user
          messages={[
            {
              key: "about",
              content: "tell me more about yourself",
            },
          ]}
        />

        <MessageGroup
          messages={[
            {
              key: "about-1",
              content:
                "I'm a Gen AI Engineer from [Nagpur, Maharashtra](https://en.wikipedia.org/wiki/Nagpur), currently working at [Tata Consultancy Services](https://www.tcs.com/). I hold a B.Tech in Computer Science (Cyber Security) from [Shri Ramdeobaba College of Engineering and Management](https://rknec.edu/) (2021–2025).",
            },
            {
              key: "about-2",
              content:
                "I specialize in developing and deploying enterprise AI solutions using [Large Language Models](https://en.wikipedia.org/wiki/Large_language_model), Python, FastAPI, AI agents, automation workflows, and cloud-native technologies.",
            },
            {
              key: "about-3",
              content:
                "During college, I served as Secretary and Joint Secretary of the Cybersecurity Students' Executive Council. I also organized AARHANT'23, a week-long cybersecurity awareness event with participation from over 1500 students.",
            },
            {
              key: "about-4",
              content:
                "I'm certified in [Google Project Management](https://www.coursera.org/professional-certificates/google-project-management), [Google IT Support](https://www.coursera.org/professional-certificates/google-it-support), [Zscaler Zero Trust Cloud Associate](https://www.zscaler.com/), and I hold a patent for a Secure Health Data System from the Indian Patent Office.",
            },
            {
              key: "digital-profiles",
              content: "Digital Profiles:",
            },
            {
              key: "profiles-1",
              content:
                "+ [GitHub](https://github.com/prathameshratthe)\n-----",
            },
            {
              key: "profiles-2",
              content:
                "+ [LinkedIn](https://www.linkedin.com/in/prathameshratthe)\n-----",
            },
            {
              key: "profiles-3",
              content:
                "+ [LeetCode](https://leetcode.com/u/prathameshratthe/)",
            },
          ]}
        />
      </>,
    ]);
  };

  const handleExperience = () => {
    setExperience(true);
    return setFlow([
      ...flow,
      <>
        <MessageGroup
          user
          messages={[
            {
              key: "experience",
              content: "where do you work?",
            },
          ]}
        />

        <MessageGroup
          messages={[
            {
              key: "experience-1",
              content:
                "I'm currently working as a **Gen AI Engineer** at [Tata Consultancy Services](https://www.tcs.com/) (Dec 2025 – Present) in Nagpur, Maharashtra.",
            },
            {
              key: "experience-2",
              content:
                "I contribute to the development and deployment of enterprise Generative AI solutions for global clients including [Siemens Energy](https://www.siemens-energy.com/) and [Airbus](https://www.airbus.com/).",
            },
            {
              key: "experience-3",
              content:
                "My work spans AI application development, backend engineering, enterprise integrations, cloud deployments, testing, monitoring, and CI/CD — all within Agile teams building scalable AI solutions.",
            },
          ]}
        />
      </>,
    ]);
  };

  const handleProjects = () => {
    setProjects(true);
    return setFlow([
      ...flow,
      <>
        <MessageGroup
          user
          messages={[
            {
              key: "projects",
              content: "what have you built?",
            },
          ]}
        />

        <MessageGroup
          messages={[
            {
              key: "project-1",
              content:
                "**iR2D.ai Enterprise AI Platform** — An internal TCS product where I contributed to enterprise GenAI solutions using LLMs, Python, FastAPI, REST APIs, prompt engineering, and cloud-native services.",
            },
            {
              key: "project-2",
              content:
                "**Siemens Energy – Enterprise Generative AI Solutions** — Contributed to the development and deployment of AI-driven enterprise applications using LLMs, API integrations, workflow automation, and CI/CD practices.",
            },
            {
              key: "project-3",
              content:
                "**SuccessFactors Custom Forms AI Agent** — Built an AI-powered document automation solution for converting PDF, DOCX, and ZIP forms into fillable PDFs using document parsing, semantic field detection, layout analysis, and automated PDF generation.",
            },
            {
              key: "project-4",
              content:
                "**SAP BTP AI Automation & MCP Integration** — Developed AI automation services on SAP BTP Cloud Foundry with backend APIs, enterprise integrations, MCP connectivity, deployment, and security configurations.",
            },
          ]}
        />
      </>,
    ]);
  };

  const handleSkills = () => {
    setSkills(true);
    return setFlow([
      ...flow,
      <>
        <MessageGroup
          user
          messages={[
            {
              key: "skills",
              content: "what's your tech stack?",
            },
          ]}
        />

        <MessageGroup
          messages={[
            {
              key: "skills-1",
              content:
                "**Generative AI** — Large Language Models, Prompt Engineering, RAG, AI Agents, AI Automation, Document Intelligence, Semantic Search.",
            },
            {
              key: "skills-2",
              content:
                "**Enterprise Platforms** — SAP BTP, SAP SuccessFactors, Cloud Foundry, Model Context Protocol (MCP).",
            },
            {
              key: "skills-3",
              content:
                "**Backend** — Python, FastAPI, REST APIs, API Integration, Microservices.",
            },
            {
              key: "skills-4",
              content:
                "**Frontend** — React, JavaScript, TypeScript.",
            },
            {
              key: "skills-5",
              content:
                "**Cloud & DevOps** — AWS, Docker, CI/CD, Git, GitHub Actions.",
            },
            {
              key: "skills-6",
              content:
                "**Databases** — PostgreSQL, MySQL, Redis.",
            },
            {
              key: "skills-7",
              content:
                "**Security** — JWT, OAuth, AES, RSA Encryption, Secure API Architecture.",
            },
          ]}
        />
      </>,
    ]);
  };

  const handleContact = () => {
    setContact(true);
    return setFlow([
      ...flow,
      <>
        <MessageGroup
          user
          messages={[
            {
              key: "contact",
              content: "how can i reach out to you?",
            },
          ]}
        />

        <MessageGroup
          messages={[
            {
              key: "contact-1",
              content:
                "Interested to know more about me or have a professional opportunity in mind? You can connect with me through the following platforms:",
            },
            {
              key: "contact-2",
              content: `\
+ [LinkedIn](https://www.linkedin.com/in/prathameshratthe)
-----
+ [Email](mailto:prathameshratthe@gmail.com)
-----
+ [GitHub](https://github.com/prathameshratthe)
-----
+ [Phone](tel:+919022456723)
              `,
            },
          ]}
        />
      </>,
    ]);
  };

  const handleResume = () => {
    setResume(true);
    return setFlow([
      ...flow,
      <>
        <MessageGroup
          user
          messages={[
            {
              key: "resume",
              content: "can i see your resume?",
            },
          ]}
        />

        <MessageGroup
          messages={[
            {
              key: "resume-1",
              content:
                "of course! here's my latest resume. feel free to download it and reach out if anything catches your eye.",
            },
            {
              key: "resume-2",
              content:
                "+ [download resume (pdf)](/Prathamesh_Ratthe_Resume_2026.pdf)",
            },
          ]}
        />
      </>,
    ]);
  };

  return (
    <section className="relative px-4 flex flex-col items-center justify-center container max-w-2xl space-y-14 py-10">
      <motion.ul
        transition={{
          staggerChildren: 0.3,
          delayChildren: 0.3,
        }}
        initial="hidden"
        animate="show"
        className="space-y-10"
        ref={scrollRef}
      >
        <MessageGroup
          messages={[
            {
              key: "intro",
              content: "Hey there, I'm Prathamesh Ratthe.",
            },
            {
              key: "short-about-me",
              content:
                "I'm a Gen AI Engineer at [TCS](https://www.tcs.com/), building enterprise AI solutions for global clients like Siemens Energy and Airbus. I'm passionate about [Generative AI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence), backend engineering, and cloud-native technologies.",
            },
            {
              key: "note",
              content:
                "*P.S. Want to know more about me? Click on the buttons below :)*",
            },
          ]}
        />

        {flow.map((m) => m)}

        <motion.div
          transition={{
            delay: 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap justify-end items-end gap-2"
        >
          <Button
            onClick={() => handleAboutMe()}
            disabled={!!aboutMe}
            variant={"secondary"}
            className={clsx("text-xs", !!aboutMe && "hidden")}
          >
            about-me
          </Button>
          <Button
            onClick={() => handleExperience()}
            disabled={!!experience}
            variant={"secondary"}
            className={clsx("text-xs", !!experience && "hidden")}
          >
            work-experience
          </Button>
          <Button
            onClick={() => handleProjects()}
            disabled={!!projects}
            variant={"secondary"}
            className={clsx("text-xs", !!projects && "hidden")}
          >
            my-projects
          </Button>
          <Button
            onClick={() => handleSkills()}
            disabled={!!skills}
            variant={"secondary"}
            className={clsx("text-xs", !!skills && "hidden")}
          >
            tech-stack
          </Button>
          <Button
            onClick={() => handleContact()}
            disabled={!!contact}
            variant={"secondary"}
            className={clsx("text-xs", !!contact && "hidden")}
          >
            get-in-touch
          </Button>
          <Button
            onClick={() => handleResume()}
            disabled={!!resume}
            variant={"secondary"}
            className={clsx("text-xs gap-1.5", !!resume && "hidden")}
          >
            <FileDown className="size-3" />
            download-resume
          </Button>
        </motion.div>
      </motion.ul>
    </section>
  );
}
