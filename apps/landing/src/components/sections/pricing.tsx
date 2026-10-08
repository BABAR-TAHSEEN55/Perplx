"use client";
import { useState } from "react";
import Heading from "../shared/heading";
import SmolText from "../shared/smol-text";
import SubHeading from "../shared/sub-heading";
import FlipButtonText from "../shared/flip-button-text";

const pricingTiers = [
  {
    heading: "Growth",
    sub: "Early Stage teams",
    monthlyCost: 8,
    buttonText: "Start building",
    points: [
      "Up to 5 active agents",
      "50 simulation runs",
      "Visual builder access",
      "GitHub + Zapier integration",
      "Basic support",
      "1 team workspace",
      "Workflow APIs",
      "Community Slack access",
    ],
    unavailablePoints: [
      "1 team workspace",
      "Workflow APIs",
      "Community Slack access",
    ],
  },
  {
    heading: "Scale",
    sub: "Growing teams",
    monthlyCost: 16,
    buttonText: "Start for free",
    featured: true,
    background: true,
    points: [
      "Up to 25 active agents",
      "150 simulation runs",
      "Visual builder access",
      "GitHub + Zapier integration",
      "Priority support",
      "3 team workspaces",
      "Workflow APIs",
      "Priority Slack access",
    ],
    unavailablePoints: ["Workflow APIs", "Priority Slack access"],
  },
  {
    heading: "Enterprise",
    sub: "Large organizations",
    monthlyCost: null,
    buttonText: "Contact us",
    points: [
      "Unlimited active agents",
      "Unlimited simulation runs",
      "Visual builder access",
      "GitHub + Zapier integration",
      "Priority support",
      "Unlimited team workspaces",
      "Workflow APIs",
      "Priority Slack access",
    ],
    unavailablePoints: [],
  },
];

const Pricing = () => {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section className="mt-20 pt-8">
      <SmolText text="Pricing" className="text-backy" />
      <Heading className="text-center">Simple and Feasible Pricing</Heading>
      <SubHeading className="text-center">
        Whether you’re creating content daily or scaling it across a team,
        Verseo adapts to your workflow.
      </SubHeading>

      <div className="mx-auto mt-8 max-w-md rounded-md bg-neutral-100/10 p-2 dark:bg-gray-950">
        <div
          className="grid grid-cols-2 gap-2 rounded-md bg-[repeating-linear-gradient(315deg,rgba(115,115,115,0.15)_0,rgba(115,115,115,0.15)_0.5px,transparent_1px,transparent_5px)] p-1"
          role="group"
          aria-label="Billing interval"
        >
          <button
            type="button"
            onClick={() => setBillingInterval("monthly")}
            aria-pressed={billingInterval === "monthly"}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors sm:px-8 ${
              billingInterval === "monthly"
                ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-800 dark:text-white dark:shadow-black/30"
                : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingInterval("yearly")}
            aria-pressed={billingInterval === "yearly"}
            className={`flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors sm:px-8 ${
              billingInterval === "yearly"
                ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-800 dark:text-white dark:shadow-black/30"
                : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
            }`}
          >
            Yearly
            <span className="rounded-full bg-backy/10 px-2 py-1 text-xs text-backy">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <PricingPlanCard
            key={tier.heading}
            {...tier}
            billingInterval={billingInterval}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;

const PricingPlanCard = ({
  heading,
  sub,
  monthlyCost,
  buttonText,
  featured,
  points,
  unavailablePoints,
  billingInterval,
}: (typeof pricingTiers)[number] & {
  billingInterval: "monthly" | "yearly";
}) => {
  const cost =
    monthlyCost === null
      ? "Custom"
      : `$${
          billingInterval === "yearly"
            ? Math.round(monthlyCost * 12 * 0.8)
            : monthlyCost
        }`;

  return (
    <div
      className={`flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-950 ${
        featured ? "bg-[url('/card-image.avif')] bg-cover bg-center" : ""
      }`}
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
          {heading}
        </h3>
        <p className="tracking-tight text-neutral-400">{sub}</p>
      </div>

      <h4 className="mt-6 text-2xl font-light text-neutral-800 dark:text-neutral-100">
        {cost === "Custom" ? (
          cost
        ) : (
          <>
            <span className="font-semibold">{cost}</span>{" "}
            <span className="text-xs text-neutral-400">
              /seat/{billingInterval === "yearly" ? "year" : "month"}
            </span>
          </>
        )}
      </h4>

      <p className="w-full rounded-xl py-5 text-sm font-light tracking-tight text-neutral-500 text-balance">
        Perfect for individuals getting started with AI-powered productivity. No
        credit card required.
      </p>

      <div className="mt-3 flex flex-col gap-4 pt-8">
        {points.map((point) => {
          const isUnavailable = unavailablePoints.includes(point);

          return (
            <div key={point} className="flex items-center gap-3">
              {!isUnavailable && <div className="size-3 shrink-0 bg-backy" />}
              <p
                className={`text-sm ${
                  isUnavailable
                    ? "pl-6 text-gray-500 dark:text-neutral-600"
                    : "text-neutral-700 dark:text-neutral-300"
                }`}
              >
                {point}
              </p>
            </div>
          );
        })}
      </div>

      <FlipButtonText
        text={buttonText}
        variant={featured ? "orange" : "white"}
        className="mt-8 w-full"
      />
    </div>
  );
};
