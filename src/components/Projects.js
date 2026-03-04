// 🚀 Server-side fetch with hidden token
async function getRepos() {
  const headers = {};
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    "https://api.github.com/users/Iyanuoluwa007/repos?per_page=12&sort=updated",
    { headers, next: { revalidate: 3600 } } // cache for 1 hour
  );

  if (!res.ok) {
    console.error("GitHub fetch error:", res.statusText);
    return [];
  }

  const data = await res.json();
  return (data || []).filter((x) => !x.fork && !x.archived);
}

import ProjectsClient from "./ProjectsClient";

export default async function Projects() {
  const repos = await getRepos();

  return <ProjectsClient repos={repos} />;
}
