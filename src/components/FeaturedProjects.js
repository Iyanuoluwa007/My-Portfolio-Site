import FeaturedProjectsClient from "./FeaturedProjectsClient";

const EXCLUDE = ["My-Portfolio-Site", "Iyanuoluwa007"];

async function getRepos() {
  const headers = {};
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  try {
    const res = await fetch(
      "https://api.github.com/users/Iyanuoluwa007/repos?per_page=30&sort=pushed",
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data || [])
      .filter((r) => !r.fork && !r.archived && !EXCLUDE.includes(r.name))
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
      .slice(0, 10)
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description || null,
        language: r.language || null,
        stars: r.stargazers_count,
        url: r.html_url,
        pushedAt: r.pushed_at,
        createdAt: r.created_at,
        topics: r.topics || [],
      }));
  } catch {
    return [];
  }
}

export default async function FeaturedProjects() {
  const repos = await getRepos();
  return <FeaturedProjectsClient repos={repos} />;
}
