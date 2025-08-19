export default async function registerGitHubApp() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/app/manifest`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Test Daylily App",
        description: "A GitHub App for Daylily",
        url: "https://daylily.ataidev.cc",
        public: true,
      }),
    },
  );

  if (!res.ok) {
    throw new Error("Register Github App HTTP ERROR!");
  }

  return res.json();
}
