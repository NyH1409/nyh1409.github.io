"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <div className="w-full flex justify-center bg-zinc-100 dark:bg-zinc-950 py-10">
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className="flex flex-col items-center gap-8"
      >
        {Array.from({ length: numPages }, (_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-lg overflow-hidden
                       border border-zinc-200 dark:border-zinc-800
                       transition hover:shadow-2xl"
          >
            <Page
              pageNumber={i + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className="max-w-full"
            />
          </div>
        ))}
      </Document>
    </div>
  );
}
