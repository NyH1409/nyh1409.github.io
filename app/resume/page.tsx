// app/resume/page.tsx
"use client";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/components/pdfviewer"), {
  ssr: false,
  loading: () => (
    <div className="text-zinc-500 text-sm animate-pulse">Chargement...</div>
  ),
});

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-950 p-6">
      <div className="max-w-4xl mx-auto">
        <PDFViewer url="resume.pdf" />
      </div>
    </main>
  );
}
