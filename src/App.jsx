import React, { useEffect, useState } from "react";
import TaskManager from "./components/TaskManager";
import Button from "./components/Button";
import { useTheme } from "./context/ThemeContext";
import { fetchPosts } from "./utils/api";

/**
 * App.jsx — integrates TaskManager, API data, and theme toggle
 * Enhanced to make dark mode visually distinct and animated.
 */

export default function App() {
  const [count, setCount] = useState(0);
  const { theme, toggle } = useTheme();

  // --- API state (JSONPlaceholder posts example) ---
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch posts whenever page or q changes
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    fetchPosts({ page, limit, q })
      .then((res) => {
        if (mounted) {
          setPosts(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.message || "Failed to load posts");
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [page, limit, q]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-500">
      {/* Header / Navbar */}
      <header className="bg-white dark:bg-gray-800 shadow transition-colors duration-500">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">PLP Task Manager</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              React + JSX + Tailwind — Week 3 Assignment
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              onClick={toggle}
              className="transition-colors duration-300"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"} mode
            </Button>

            <div className="inline-flex items-center rounded-md overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
              <button
                className="px-3 py-2 bg-red-500 text-white hover:bg-red-600 transition-colors"
                onClick={() => setCount((c) => c - 1)}
                aria-label="decrement"
              >
                -
              </button>
              <div className="px-4 py-2">{count}</div>
              <button
                className="px-3 py-2 bg-green-500 text-white hover:bg-green-600 transition-colors"
                onClick={() => setCount((c) => c + 1)}
                aria-label="increment"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 w-full flex-1 transition-colors duration-500">
        {/* TaskManager card */}
        <section className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 mb-8 transition-colors duration-500">
          <TaskManager />
        </section>

        {/* API Data card */}
        <section className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 transition-colors duration-500">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">API Data (Posts)</h2>
            <div className="flex items-center gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search posts (title/body)"
                className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 transition-colors duration-300"
              />
              <Button variant="primary" onClick={() => setPage(1)}>
                Search
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : error ? (
            <div className="text-red-500">Error: {error}</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.length === 0 ? (
                  <div className="text-gray-500 dark:text-gray-400">
                    No posts found
                  </div>
                ) : (
                  posts.map((p) => (
                    <article
                      key={p.id}
                      className="p-4 border border-gray-300 dark:border-gray-700 rounded-md hover:shadow-md transition-all duration-300 bg-gray-50 dark:bg-gray-700"
                    >
                      <h3 className="font-semibold mb-2">{p.title}</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {p.body}
                      </p>
                    </article>
                  ))
                )}
              </div>

              <div className="flex items-center justify-between mt-6">
                <Button
                  variant="secondary"
                  onClick={() => setPage((s) => Math.max(1, s - 1))}
                >
                  Prev
                </Button>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Page {page}
                </div>
                <Button variant="primary" onClick={() => setPage((s) => s + 1)}>
                  Next
                </Button>
              </div>
            </>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow mt-auto transition-colors duration-500">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

