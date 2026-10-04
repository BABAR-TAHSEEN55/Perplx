import SmolText from "../shared/smol-text";

const stats = [
  { value: "25+", label: "SaaS brands launched" },
  { value: "100+", label: "Startup Projects" },
  { value: "4+", label: "AI - tools integrated" },
];

const pills = [
  {
    label: "Faster workflow",
    gradient: "from-fuchsia-400 to-purple-300",
    position: "top-[6%] right-[1%]",
    rotate: "rotate-[15deg]",
  },
  {
    label: "B2B Platforms",
    gradient: "from-orange-300 to-amber-200",
    position: "top-[33%] right-[1%]",
    rotate: "-rotate-[15deg]",
  },
  {
    label: "No-Code Tools",
    gradient: "from-sky-400 to-sky-200",
    position: "top-[53%] right-[1%]",
    rotate: "rotate-[15deg]",
  },
  {
    label: "AI - Startups",
    gradient: "from-emerald-300 to-teal-200",
    position: "top-[74%] right-[1%]",
    rotate: "-rotate-[15deg]",
  },
  {
    label: "Lead Gen Tools",
    gradient: "from-orange-400 to-orange-200",
    position: "top-[74%] right-[15%]",
    rotate: "rotate-[15deg]",
  },
  {
    label: "Startup Studios",
    gradient: "from-lime-300 to-green-200",
    position: "top-[80%] right-[30%]",
    rotate: "-rotate-[10deg]",
  },
];

const About = () => {
  return (
    <section className="relative pt-8 overflow-hidden">
      <div className="">
        <SmolText text="About Us" className="mx-0 text-backy" />
        <h4 className="max-w-244 py-6 text-3xl leading-snug">
          We’re a digital design team focused on empowering SaaS startups and
          solo founders with bold, high-converting templates powered by AI. We
          believe in design that moves — fast, flexible, and beautiful. Our goal
          is to give lean teams the tools to launch standout brands without
          wasting time or budget.
        </h4>
        <div className="flex justify-between items-center max-w-2xl pt-8">
          {stats.map((stat) => (
            <NumberStats
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>

      {/* Floating pills (hidden on small screens to avoid overlap) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {pills.map((pill) => (
          <Pill key={pill.label} {...pill} />
        ))}
      </div>
    </section>
  );
};

export default About;

type PillProps = {
  label: string;
  gradient: string;
  position: string;
  rotate: string;
};

const Pill = ({ label, gradient, position, rotate }: PillProps) => {
  return (
    <span
      className={`absolute ${position} ${rotate} inline-flex items-center justify-center
        rounded-full bg-linear-to-br ${gradient}
        px-5 py-2.5 text-lg font-medium text-white whitespace-nowrap
        shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_6px_14px_rgba(0,0,0,0.08)]
        ring-1 ring-white/40 select-none`}
    >
      {label}
    </span>
  );
};

const NumberStats = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-5xl">{value}</p>
      <p className="text-neutral-400 text-md">{label}</p>
    </div>
  );
};
