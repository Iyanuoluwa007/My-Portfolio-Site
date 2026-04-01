import ProjectsClient from "./ProjectsClient";

async function getRepos() {
  const headers = {};
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  try {
    const res = await fetch(
      "https://api.github.com/users/Iyanuoluwa007/repos?per_page=20&sort=updated",
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data || []).filter((x) => !x.fork && !x.archived);
  } catch {
    return [];
  }
}

export default async function Projects() {
  const repos = await getRepos();
  return <ProjectsClient repos={repos} />;
}
