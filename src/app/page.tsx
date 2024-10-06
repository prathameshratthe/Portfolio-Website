"use client";

import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

import { ReactNode, useEffect, useRef, useState } from "react";
import MessageGroup, { MessageCard } from "@/components/Message";
import clsx from "clsx";

export default function IndexPage() {
  const [aboutMe, setAboutMe] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);

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
                            "I am a 21-year-old Software Engineer from [Nagpur, Maharashtra](https://en.wikipedia.org/wiki/Nagpur). My journey in technology is exciting and full of learning. I enjoy exploring and working on both full-stack development and cybersecurity.",
                    },
                    {
                        key: "about-2",
                        content:
                            "My favorite subjects are [Programming](https://en.wikipedia.org/wiki/Programming), [Operating Systems](https://en.wikipedia.org/wiki/Operating_system), [Computer Networks](https://en.wikipedia.org/wiki/Computer_network), and [Computer Security](https://en.wikipedia.org/wiki/Computer_security). Alongside my studies, I love diving into these fields to improve my skills and understanding.",
                    },
                    {
                        key: "about-3",
                        content:
                            "With a strong foundation in development and security, I am eager to continue learning and growing. I’m passionate about solving problems and making a positive impact in the world of technology. I look forward to seeing where my love for innovation will take me next.",
                    },
                    {
                        key: "digital-profiles",
                        content: "Digital Profiles:",
                    },
                    {
                        key: "profiles-1",
                        content:
                            "+ [Hackerrank](https://www.hackerrank.com/profile/prathameshratthe)\n-----",
                    },
                    {
                        key: "profiles-2",
                        content:
                            "+ [LeetCode](https://leetcode.com/u/prathameshratthe/)\n-----",
                    },
                    {
                        key: "profiles-3",
                        content:
                            "+ [Coding Ninjas](https://www.naukri.com/code360/profile/f98dc84b-cffa-4557-bfb1-9d588de14038)",
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
              content: "what have you done in life?",
            },
          ]}
        />

        <MessageGroup
          messages={[
            {
              key: "project-1",
              content:
                "One of my key projects is a [VulneraTrack](https://github.com/prathameshratthe/VulneraTrack). This web browser extension continuously monitors website safety in real-time and provides users with critical information to enhance their protection against cyber risks.",
            },
            {
              key: "project-2",
              content:
                "Another important project is [SecureMedicos](https://github.com/prathameshratthe/SecureMedicos), an web-application that securely stores sensitive pharmaceutical data on the cloud using homomorphic encryption.",
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
              `,
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
                "I'm a [21-year-old](https://en.wikipedia.org/wiki/February_21) software engineer passionate about both full-stack development and cybersecurity. My passion stems from a deep interest in technology and problem-solving.",
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
            onClick={() => handleProjects()}
            disabled={!!projects}
            variant={"secondary"}
            className={clsx("text-xs", !!projects && "hidden")}
          >
            what-have-i-done
          </Button>
          <Button
            onClick={() => handleContact()}
            disabled={!!contact}
            variant={"secondary"}
            className={clsx("text-xs", !!contact && "hidden")}
          >
            get-in-touch-with-me
          </Button>
        </motion.div>
      </motion.ul>
    </section>
  );
}
