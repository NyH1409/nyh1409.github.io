"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

const sans = { fontFamily: "'IBM Plex Sans', sans-serif" } as const;
const mono = { fontFamily: "'IBM Plex Mono', monospace" } as const;

type Category = "all" | "engineering" | "research";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  category: Exclude<Category, "all">;
  tags: string[];
  image: string;
  featured?: boolean;
  link: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "TOTP MFA with Spring Boot",
    excerpt:
      "A lightweight way to add time-based OTP authentication without heavy security frameworks.",
    content:
      "This lightweight authentication service built with Spring Boot demonstrates how to implement robust security without heavy frameworks. It features stateless JWT authentication (access/refresh tokens) combined with server-side validated TOTP multi-factor authentication (compatible with Google Authenticator). Utilizing Redis for transient, TTL-expired challenge storage and PostgreSQL for user persistence, the project offers a complete end-to-end flow from user registration to secure profile access. Built with an API-first approach via OpenAPI Generator and including a Thymeleaf-rendered UI, the entire ecosystem is containerized with Docker Compose for a seamless, single-command local development setup.",
    date: "2025-03-18",
    readTime: "10 min",
    category: "engineering",
    tags: ["security"],
    image: "/totp.png",
    featured: true,
    link: "https://github.com/nvagno/authentify",
  },
  {
    id: 2,
    title: "Geospatial Feature Extraction from Aerial Imagery",
    excerpt:
      "Coordinate transforms, and deep feature maps for remote sensing pipelines.",
    content:
      "Exploring the depths of geographical information systems. This project dives into coordinate transformations, matrix operations, and how deep learning feature maps extract meaningful data from satellite and aerial photography for modern remote sensing pipelines.",
    date: "2025-02-27",
    readTime: "5 min",
    category: "engineering",
    tags: ["gis", "computer vision"],
    image: "/featureextraction.png",
    link: "",
  },
  {
    id: 3,
    title: "Minimal Grafana Supervision Dashboard with Docker Compose",
    excerpt:
      "Setting up a lightweight observability stack using Grafana and Docker Compose for system monitoring, logs visualization, and basic metrics dashboards.",
    content:
      "Observability shouldn't require an enterprise suite. Here is how to configure a lightweight, reproducible stack with Prometheus, Grafana, and Loki using Docker Compose. Perfect for home labs, side projects, or MVP monitoring setups.",
    date: "2025-02-27",
    readTime: "5 min",
    category: "engineering",
    tags: ["grafana", "docker", "monitoring"],
    image: "/grafana.png",
    link: "",
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

/* FEATURED POST COMPONENT */
function Featured({
  post,
  onSelect,
}: {
  post: Post;
  onSelect: (id: number) => void;
}) {
  return (
    <div
      onClick={() => onSelect(post.id)}
      className="bg-white border border-[#E5E4E0] overflow-hidden mb-12 hover:border-[#A8A8A5] transition-colors duration-200 cursor-pointer"
    >
      <div className="relative w-full h-[420px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-7">
        <div className="text-[11px] text-[#A8A8A5]" style={mono}>
          Featured · {formatDate(post.date)} · {post.readTime}
        </div>

        <h2
          className="text-[22px] sm:text-[30px] font-medium leading-tight my-3 text-[#1C1C1A]"
          style={sans}
        >
          {post.title}
        </h2>

        <p className="text-[13px] text-[#A8A8A5] leading-relaxed" style={sans}>
          {post.excerpt}
        </p>
      </div>
    </div>
  );
}

/* POST CARD COMPONENT */
function PostCard({
  post,
  onSelect,
}: {
  post: Post;
  onSelect: (id: number) => void;
}) {
  return (
    <div
      onClick={() => onSelect(post.id)}
      className="bg-white border border-[#E5E4E0] overflow-hidden transition-all duration-200 cursor-pointer hover:border-[#A8A8A5] hover:-translate-y-0.5"
    >
      <div className="relative w-full h-[200px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-[18px]">
        <div className="text-[11px] text-[#A8A8A5]" style={mono}>
          {formatDate(post.date)} · {post.readTime}
        </div>

        <h3
          className="text-base font-medium leading-snug my-2.5 text-[#1C1C1A]"
          style={sans}
        >
          {post.title}
        </h3>

        <p
          className="text-13px text-[#6B6B68] leading-relaxed mb-3 line-clamp-3"
          style={sans}
        >
          {post.excerpt}
        </p>

        <div className="flex gap-2 flex-wrap">
          {post.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] border border-[#E5E4E0] px-2 py-0.5 text-[#A8A8A5] bg-white"
              style={mono}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* FULL PAGE POST COMPONENT */
function FullPostView({ post, onBack }: { post: Post; onBack: () => void }) {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 md:py-20">
      <button
        onClick={onBack}
        className="text-[11px] uppercase tracking-widest text-[#A8A8A5] hover:text-[#1C1C1A] transition-colors duration-200 mb-8 flex items-center gap-2"
        style={mono}
      >
        ← Back
      </button>

      <div className="text-[11px] text-[#A8A8A5] mb-4" style={mono}>
        {post.category.toUpperCase()} · {formatDate(post.date)} ·{" "}
        {post.readTime}
      </div>

      <h1
        className="text-3xl md:text-5xl font-medium tracking-tight text-[#1C1C1A] mb-8"
        style={sans}
      >
        {post.title}
      </h1>

      <div className="relative w-full h-[250px] md:h-[450px] mb-10 border border-[#E5E4E0]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex gap-2 mb-10 flex-wrap">
        {post.tags.map((t) => (
          <span
            key={t}
            className="text-[10px] border border-[#E5E4E0] px-2 py-0.5 text-[#A8A8A5]"
            style={mono}
          >
            #{t}
          </span>
        ))}
      </div>

      <div
        className="text-base md:text-md text-[#1C1C1A] leading-relaxed space-y-6 whitespace-pre-line"
        style={sans}
      >
        {post.content || post.excerpt}
      </div>
      <div className="mt-5">
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#6B6B68] hover:text-[#1C1C1A] border border-[#E5E4E0] hover:border-[#A8A8A5] px-3 py-1.5 bg-white transition-all duration-200"
          style={mono}
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
}

/* MAIN PAGE */
export default function ProjectPage() {
  const [category, setCategory] = useState<Category>("all");
  const [activePostId, setActivePostId] = useState<number | null>(null);

  const featured = posts.find((p) => p.featured);

  const filtered = useMemo(() => {
    return posts.filter((p) => category === "all" || p.category === category);
  }, [category]);

  const currentPost = useMemo(() => {
    if (activePostId === null) return null;
    return posts.find((p) => p.id === activePostId) || null;
  }, [activePostId]);

  return (
    <div className="bg-[#F7F7F5] min-h-100vh text-[#1C1C1A]" style={sans}>
      {currentPost ? (
        <FullPostView post={currentPost} onBack={() => setActivePostId(null)} />
      ) : (
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
          {/* HEADER */}
          <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
            <div>
              <div className="text-[11px] text-[#A8A8A5]" style={mono}>
                Writing
              </div>
              <h1 className="text-[28px] font-medium text-[#1C1C1A] tracking-tight">
                Projects
              </h1>
            </div>
          </div>

          {/* FILTERS */}
          <div className="flex gap-4 mb-10 flex-wrap">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`text-[11px] tracking-widest uppercase transition-colors duration-200 ${
                  category === c.id
                    ? "text-[#1C1C1A]"
                    : "text-[#A8A8A5] hover:text-[#1C1C1A]"
                }`}
                style={mono}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* FEATURED */}
          {category === "all" && featured && (
            <Featured post={featured} onSelect={setActivePostId} />
          )}

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {filtered
              .filter((p) => !p.featured)
              .map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onSelect={setActivePostId}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
