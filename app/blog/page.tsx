"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

const sans = { fontFamily: "'IBM Plex Sans', sans-serif" } as const;
const mono = { fontFamily: "'IBM Plex Mono', monospace" } as const;

const css = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:wght@300;400;500&display=swap');

  .blog-root {
    background: #F7F7F5;
    min-height: 100vh;
  }

  /* HEADER */
  .header-title {
    font-size: 28px;
    font-weight: 500;
    color: #1C1C1A;
    letter-spacing: -0.02em;
  }

  /* FILTERS */
  .filter-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #A8A8A5;
    transition: color 200ms;
  }
  .filter-btn:hover { color: #1C1C1A; }
  .filter-btn.active { color: #1C1C1A; }

  /* FEATURED */
  .featured {
    background: white;
    border: 1px solid #E5E4E0;
    overflow: hidden;
    margin-bottom: 48px;
    transition: border-color 200ms;
  }
  .featured:hover { border-color: #A8A8A5; }

  .featured-content {
    padding: 28px;
  }

  .featured-title {
    font-size: 30px;
    font-weight: 500;
    line-height: 1.3;
    margin: 12px 0;
    color: #1C1C1A;
  }

  /* GRID POST */
  .post {
    background: white;
    border: 1px solid #E5E4E0;
    overflow: hidden;
    transition: border-color 200ms, transform 200ms;
    cursor: pointer;
  }

  .post:hover {
    border-color: #A8A8A5;
    transform: translateY(-2px);
  }

  .post-content {
    padding: 18px;
  }

  .post-title {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    margin: 10px 0;
    color: #1C1C1A;
  }

  .post-excerpt {
    font-size: 13px;
    line-height: 1.7;
    color: #6B6B68;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 12px;
  }

  .tag {
    font-size: 10px;
    border: 1px solid #E5E4E0;
    padding: 2px 8px;
    color: #A8A8A5;
    background: white;
  }

  .meta {
    font-size: 11px;
    color: #A8A8A5;
  }

  /* GRID */
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  @media (max-width: 1024px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 640px) {
    .grid { grid-template-columns: 1fr; }
    .featured-title { font-size: 22px; }
  }

  /* IMAGE WRAPPER */
  .img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .featured-img {
    width: 100%;
    height: 420px;
    object-fit: cover;
  }
`;

type Category = "all" | "engineering" | "research";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: Exclude<Category, "all">;
  tags: string[];
  image: string;
  featured?: boolean;
}

const posts: Post[] = [
  {
    id: 1,
    title: "TOTP MFA with Spring Boot (Minimal Implementation)",
    excerpt:
      "A lightweight way to add time-based OTP authentication without heavy security frameworks.",
    date: "2025-03-18",
    readTime: "10 min",
    category: "engineering",
    tags: ["security"],
    image: "/totp.png",
    featured: true,
  },
  {
    id: 2,
    title: "Geospatial Feature Extraction from Aerial Imagery",
    excerpt:
      "Coordinate transforms, and deep feature maps for remote sensing pipelines.",
    date: "2025-02-27",
    readTime: "5 min",
    category: "engineering",
    tags: ["gis", "computer vision"],
    image: "/featureextraction.png",
  },
  {
    id: 3,
    title: "Minimal Grafana Supervision Dashboard with Docker Compose",
    excerpt:
      "Setting up a lightweight observability stack using Grafana and Docker Compose for system monitoring, logs visualization, and basic metrics dashboards.",
    date: "2025-02-27",
    readTime: "5 min",
    category: "engineering",
    tags: ["grafana", "docker", "monitoring"],
    image: "/grafana.png",
  },
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "research", label: "Research" },
  { id: "engineering", label: "Engineering" },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/* FEATURED */
function Featured({ post }: { post: Post }) {
  return (
    <div className="featured">
      <Image
        src={post.image}
        alt={post.title}
        width={1200}
        height={600}
        className="featured-img"
      />

      <div className="featured-content">
        <div className="meta" style={mono}>
          Featured · {formatDate(post.date)} · {post.readTime}
        </div>

        <h2 className="featured-title" style={sans}>
          {post.title}
        </h2>

        <p className="meta" style={{ ...sans, fontSize: 13, lineHeight: 1.8 }}>
          {post.excerpt}
        </p>
      </div>
    </div>
  );
}

/* POST CARD */
function PostCard({ post }: { post: Post }) {
  return (
    <div className="post">
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="img"
      />

      <div className="post-content">
        <div className="meta" style={mono}>
          {formatDate(post.date)} · {post.readTime}
        </div>

        <h3 className="post-title" style={sans}>
          {post.title}
        </h3>

        <p className="post-excerpt" style={sans}>
          {post.excerpt}
        </p>

        <div className="flex gap-2 flex-wrap">
          {post.tags.map((t) => (
            <span key={t} className="tag" style={mono}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* PAGE */
export default function BlogPage() {
  const [category, setCategory] = useState<Category>("all");

  const featured = posts.find((p) => p.featured);

  const filtered = useMemo(() => {
    return posts.filter((p) => category === "all" || p.category === category);
  }, [category]);

  return (
    <>
      <style>{css}</style>

      <div className="blog-root" style={sans}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
          {/* HEADER */}
          <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
            <div>
              <div className="meta" style={mono}>
                Writing
              </div>
              <h1 className="header-title">Blog</h1>
            </div>
          </div>

          {/* FILTERS */}
          <div className="flex gap-4 mb-10 flex-wrap">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`filter-btn ${category === c.id ? "active" : ""}`}
                style={mono}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* FEATURED */}
          {category === "all" && featured && <Featured post={featured} />}

          {/* GRID */}
          <div className="grid">
            {filtered
              .filter((p) => !p.featured)
              .map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
