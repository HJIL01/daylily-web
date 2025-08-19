"use client";

import registerGitHubApp from "@/api/registerGitHubApp";
import clsx from "clsx";

export default function RegisterGithubAppBtn() {
  const handleRedirect = async () => {
    const {
      data: { manifest, state },
    } = await registerGitHubApp();

    const form = document.createElement("form");
    form.method = "POST";
    form.action = `https://github.com/settings/apps/new?state=${state}`;

    const newManifest = {
      ...manifest,
      request_oauth_on_install: false,
      setup_url: "https://daylily-web.vercel.app",
    };

    console.log(newManifest);

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "manifest";
    input.value = JSON.stringify(newManifest);

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <button
      onClick={handleRedirect}
      className={clsx(
        "w-full",
        "flex items-center justify-center gap-5",
        "border-daylily-black rounded-lg border",
        "px-20 py-5",
        "font-bold",
        "cursor-pointer",
        "animate-fade-in-login-btn opacity-0",
        "text-base max-md:text-sm max-sm:text-xs",
      )}
    >
      <span className="whitespace-nowrap">+ Register Github App</span>
    </button>
  );
}
