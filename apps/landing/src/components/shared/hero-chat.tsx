"use client";
import {
  Sparkles,
  PenLine,
  Megaphone,
  RefreshCw,
  AlignLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import SVGICON from "./svg";
import { useState } from "react";
import { cn } from "cn";

const tools = [
  { label: "AI Writer", Icon: PenLine, color: "text-blue-500" },
  { label: "Brand Voice", Icon: Megaphone, color: "text-orange-500" },
  { label: "Rewrite", Icon: RefreshCw, color: "text-green-500" },
  { label: "Summarize", Icon: AlignLeft, color: "text-purple-500" },
];

const HeroChat = () => {
  const [selected, setSelected] = useState(tools[0]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto w-full max-w-2xl rounded-2xl bg-neutral-100 p-2 font-inter  shadow-md"
    >
      <div
        className="
									shadow-[0_13.33px_20px_-10px_rgba(0,0,0,0.03),0_26.67px_26.67px_-16.67px_rgba(0,0,0,0.03),0_46.67px_46.67px_-16.67px_rgba(0,0,0,0.02),0_73.33px_46.67px_-16.67px_rgba(0,0,0,0.03),0_0_36.67px_0_rgba(0,0,0,0.02)]
							"
      >
        {/* Prompt */}
        <motion.div
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="flex items-start gap-2.5 rounded-t-xl rounded-b-md border border-[rgb(237,237,237)] bg-white px-3 py-6"
        >
          {/*<Sparkles
											aria-hidden="true"
											className="mt-1 size-4 shrink-0 text-neutral-900"
									/>*/}

          <div className="flex items-center gap-3">
            <SVGICON
              aria-hidden="true"
              className="size-4 shrink-0 text-[#FFA03B]"
            />

            <input
              aria-label="Writing prompt"
              placeholder="What do you want to write today?"
              className="min-w-full flex-1 bg-transparent text-md leading-[1.2] text-neutral-900 outline-none placeholder:text-neutral-500"
            />
          </div>
        </motion.div>

        {/*className={cn(`
																	flex shrink-0 items-center gap-2 rounded
																	px-2 py-1 text-sm leading-[1.2]
															`), selected.label === label ?  : null}
													>*/}
        <div className="flex items-center justify-between gap-3 rounded-t-md rounded-b-xl border border-[rgb(237,237,237)] bg-white px-3 py-3">
          <div className="flex min-w-0 items-center gap-0.5 overflow-x-auto rounded-[5px] bg-[rgb(246,246,246)] p-0.5">
            {tools.map((item) => (
              <motion.button
                key={item.label}
                type="button"
                onClick={() => setSelected(item)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded px-2 py-1 text-sm leading-[1.2]",
                  selected.label === item.label
                    ? "bg-white text-neutral-900 ring-1 ring-inset ring-[rgb(237,237,237)]"
                    : "text-neutral-500 hover:bg-white",
                )}
              >
                <item.Icon
                  aria-hidden="true"
                  className={`size-4 ${item.color}`}
                />
                {item.label}
              </motion.button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Start voice input"
            className="flex size-7 shrink-0 items-center justify-center rounded-[5px] bg- p-1.5 border-orange-600 bg-linear-to-b from-[#FFA03B] to-[#F97216] text-white hover:from-orange-400 hover:to-[#FFA03B]"
          >
            <span aria-hidden="true" className="flex h-4 items-center gap-1">
              {[5, 11, 16, 11, 5].map((height, index) => (
                <motion.span
                  key={index}
                  className="w-[1.2px] rounded-full bg-white"
                  animate={{ height }}
                  whileHover={{
                    height: [height, 16, height],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: index * 0.08,
                  }}
                  style={{
                    opacity: index === 2 ? 1 : height === 11 ? 0.8 : 0.7,
                  }}
                />
              ))}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroChat;
