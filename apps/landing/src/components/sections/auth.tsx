"use client";

import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import FlipButtonText from "../shared/flip-button-text";
import CustomButton from "../shared/custom-button";

const socialButton = "";

const field = "";

const label = "mb-2 block text-sm font-medium text-neutral-900";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.27-2.09 3.57-5.17 3.57-8.81Z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.07.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.1A12 12 0 0 0 12 24Z"
    />
    <path
      fill="#FBBC05"
      d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56v-3.1H1.27a12 12 0 0 0 0 10.76l4-3.1Z"
    />
    <path
      fill="#EA4335"
      d="M12 4.76c1.76 0 3.34.61 4.59 1.8l3.43-3.43C17.95 1.19 15.23 0 12 0A12 12 0 0 0 1.27 6.62l4 3.1C6.22 6.87 8.87 4.76 12 4.76Z"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="size-5"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-white p-3 text-neutral-900 md:p-6">
      <section className="mx-auto flex min-h-[calc(100vh-1.5rem)] w-full gap-6 lg:min-h-[calc(100vh-3rem)]">
        <div className="flex w-full items-center justify-center px-4 py-12 lg:w-2/5">
          <div className="w-full max-w-[25rem] ">
            <div className="text-center">
              <h1 className="text-3xl font tracking-tight text-neutral-900 font-inter">
                Sign Up Account
              </h1>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <button
                type="button"
                className="flex h-14 w-full items-center justify-center gap-2.5 rounded-xl border border-neutral-200 bg-white text-md font-inter tracking-tight font-medium text-neutral-900 transition-colors hover:bg-neutral-50 hover:border-neutral-300"
              >
                <GoogleIcon />
                Sign up with Google
              </button>
              <button
                type="button"
                className={
                  "flex h-14 w-full items-center justify-center gap-2.5 rounded-xl border border-neutral-200 bg-white text-md font-inter tracking-tight text-neutral-900 transition-colors hover:bg-neutral-50 hover:border-neutral-300"
                }
              >
                <GithubIcon />
                Sign up with Github
              </button>
            </div>

            <div className="my-8 flex items-center gap-4 text-xs text-neutral-400">
              <span className="h-px flex-1 bg-neutral-200" />
              Or
              <span className="h-px flex-1 bg-neutral-200" />
            </div>

            <form className="space-y-5">
              <div>
                <input
                  className={
                    "h-14 w-full rounded-xl bg-neutral-100 px-4 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:bg-white focus:ring-2 focus:ring-backy/30"
                  }
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Username"
                  required
                />
              </div>

              <div>
                <input
                  className={
                    "h-14 w-full rounded-xl bg-neutral-100 px-4 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:bg-white focus:ring-2 focus:ring-backy/30"
                  }
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <div className="relative">
                  <input
                    className={`h-14 w-full rounded-xl bg-neutral-100 px-4 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:bg-white focus:ring-2 focus:ring-backy/30 pr-12`}
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Password"
                    minLength={8}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 transition-colors hover:text-neutral-900"
                  >
                    {showPassword ? (
                      <Eye className="size-5" />
                    ) : (
                      <EyeOff className="size-5" />
                    )}
                  </button>
                </div>
                <p className="mt-3 text-sm text-neutral-500">
                  By signing up you agree to our{" "}
                  <span className="text-black hover:underline cursor-pointer">
                    Terms of Service.
                  </span>
                </p>
              </div>

              <CustomButton
                text="Sign Up"
                variant="orange"
                className="group mt-2 h-14 w-full border-orange-500 text-md tracking-wider"
                icon={
                  <ArrowRight className="size-5 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                }
              />
            </form>

            <p className="mt-6 text-center text-sm text-neutral-500">
              Already have an account?{" "}
              <a
                className="font-semibold text-neutral-900 hover:underline"
                href="#login"
              >
                Log in
              </a>
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
          {/*<Image
            src={"/auth.jpg"}
            alt="Auth page"
            height={"100"}
            width={"100"}
            className="absolute inset-0 h-full w-full object-cover"
          />*/}

          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-white/5" />
        </div>
      </section>
    </main>
  );
};

export default AuthPage;
