"use client";

import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import Container from "../shared/container";
import CustomButton from "../shared/custom-button";
import Heading from "../shared/heading";
import SmolText from "../shared/smol-text";
import SubHeading from "../shared/sub-heading";
import { cn } from "cn";

interface QuestionProps {
  question: string;
  answer: string;
}

const questions: QuestionProps[] = [
  {
    question: "What exactly does this platform do?",
    answer:
      "Our platform lets you design, deploy, and manage AI-powered agentic workflows that can combine both automated (AI) and manual steps. These workflows connect to your existing tools (like Slack, Notion, or Google Sheets) and use AI agents to complete tasks.",
  },
  {
    question: "How do I get started with creating my first workflow?",
    answer:
      "Start by using our drag-and-drop interface to design your workflow. Connect the tools you already use, define the steps (both AI and manual), and test everything in our sandbox environment before deploying. No coding required.",
  },
  {
    question: "What tools and services can I integrate?",
    answer:
      "We support hundreds of integrations including Slack, Notion, Google Workspace, Salesforce, GitHub, Zapier, and many more. You can also connect custom APIs and databases through our flexible connector system.",
  },
  {
    question: "Is my data secure when using AI agents?",
    answer:
      "Yes, we take security seriously. All data is encrypted in transit and at rest, we're SOC 2 compliant, and you maintain full control over what data your agents can access. Agents only interact with the specific tools and data you explicitly authorize.",
  },
  {
    question: "Can I test workflows before they go live?",
    answer:
      "Absolutely. Our sandbox environment lets you preview and debug workflow logic safely before deployment. You can test different scenarios, validate agent behavior, and ensure everything works as expected without affecting your live systems.",
  },
  {
    question: "What's the difference between automated and manual steps?",
    answer:
      "Automated steps are handled entirely by AI agents (like data analysis, content generation, or API calls), while manual steps require human input or approval. You can mix both types to create workflows that leverage AI efficiency while maintaining human oversight where needed.",
  },
];

const FAQs = () => {
  return (
    <section className="mt-20 pt-8">
      <Container>
        <SmolText text="FAQs" className="text-backy" />
        <Heading className="text-center">Frequently asked questions</Heading>
        <SubHeading className="text-center">
          Everything you need to know about building and scaling AI-powered
          workflows with Verseo.
        </SubHeading>

        <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:flex-row">
          <CustomButton
            text="Read docs"
            variant="white"
            className="w-full sm:flex-1"
          />
          <CustomButton
            text="Contact us"
            variant="orange"
            className="w-full sm:flex-1"
          />
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
          {questions.map((question) => (
            <Question key={question.question} {...question} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQs;

const Question = ({ question, answer }: QuestionProps) => {
  const [open, setOpen] = useState(false);
  const answerId = useId();

  return (
    <div className="border-b border-neutral-200 last:border-b-0 dark:border-neutral-800">
      <button
        type="button"
        onClick={() => setOpen((currentOpen) => !currentOpen)}
        aria-expanded={open}
        aria-controls={answerId}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-backy dark:hover:bg-neutral-900 sm:px-8"
      >
        <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-100">
          {question}
        </h3>
        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-sm bg-backy text-white transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden="true"
        >
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>

      <motion.div
        id={answerId}
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-sm leading-6 text-neutral-500 sm:px-8 dark:text-neutral-400">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};
