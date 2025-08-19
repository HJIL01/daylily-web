export default async function githubLogin() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/github-app`,
    {
      method: "GET",
    },
  );

  if (!res.ok) {
    throw new Error("Github Login HTTP ERROR!");
  }

  return res.json();
}
