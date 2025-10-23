/**
 * Simple API helper for JSONPlaceholder posts with page/limit/q support.
 * JSONPlaceholder doesn't provide robust search/pagination headers,
 * so this function performs client-side filtering where needed.
 */

export async function fetchPosts({ page = 1, limit = 8, q = "" } = {}) {
  // For JSONPlaceholder we can request a page & limit, optionally filter client-side by q.
  const params = new URLSearchParams({
    _page: page,
    _limit: limit,
  });

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?${params.toString()}`);
  if (!res.ok) throw new Error("Failed fetching posts");
  const posts = await res.json();

  if (!q) return posts;

  const qLower = q.toLowerCase();
  return posts.filter((p) => p.title.toLowerCase().includes(qLower) || p.body.toLowerCase().includes(qLower));
}
