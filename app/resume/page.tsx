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
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <PDFViewer url="resume.pdf" />
    </main>
  );
}
