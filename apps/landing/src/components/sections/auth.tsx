import { GitFork, UserRound } from "lucide-react";
import Image from "next/image";
import FlipButtonText from "../shared/flip-button-text";

const AuthPage = () => {
  return (
    <main className="min-h-screen bg-[#101012] p-3 text-white md:p-6">
      <section className="mx-auto flex min-h-[calc(100vh-1.5rem)] w-full gap-6 lg:min-h-[calc(100vh-3rem)]">
        <div className="flex w-full items-center justify-center px-4 py-12 lg:w-2/5">
          <div className="w-full max-w-sm">
            <div className="mb-12 flex items-center gap-2.5">
              <Image
                src="/logo.avif"
                alt="Perplx"
                width={30}
                height={30}
                className="rounded-md"
              />
              <span className="text-lg font-semibold tracking-tight">
                Perplx
              </span>
            </div>

            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Your workspace awaits
              </h1>
              <p className="mt-2 text-sm text-neutral-400">
                Sign in or create an account to get started.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <button
                type="button"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/3 text-sm font-medium text-neutral-100 transition-colors hover:bg-white/8"
              >
                <span className="font-semibold text-[#4285f4]">G</span>
                Continue with Google
              </button>
              <button
                type="button"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/3 text-sm font-medium text-neutral-100 transition-colors hover:bg-white/8"
              >
                <GitFork className="size-4" />
                Continue with GitHub
              </button>
              <button
                type="button"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/3 text-sm font-medium text-neutral-100 transition-colors hover:bg-white/8"
              >
                <UserRound className="size-4" />
                Continue with Agent ID
              </button>
            </div>

            <div className="my-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              <span className="h-px flex-1 bg-white/10" />
              or
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <form>
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                className="h-11 w-full rounded-md border border-white/10 bg-white/3 px-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-backy focus:ring-2 focus:ring-backy/20"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                required
              />
              <FlipButtonText
                text="Log in with email"
                variant="orange"
                className="mt-3 h-11 w-full border-orange-500 text-sm"
              />
            </form>

            <p className="mt-6 text-center text-xs leading-relaxed text-neutral-500">
              By continuing, you agree to our{" "}
              <a
                className="underline underline-offset-2 hover:text-neutral-300"
                href="#terms"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                className="underline underline-offset-2 hover:text-neutral-300"
                href="#privacy"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        <div className="relative hidden overflow-hidden rounded-2xl lg:block lg:w-3/5">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/perplx-login-sunset.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-white/5" />
        </div>
      </section>
    </main>
  );
};

export default AuthPage;
