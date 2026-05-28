// components/PDFViewer.tsx
"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <Document
      file={url}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      className="flex flex-col items-center gap-4"
    >
      {Array.from({ length: numPages }, (_, i) => (
        <div key={i} className="overflow-hidden shadow-2xl">
          <Page
            pageNumber={i + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </div>
      ))}
    </Document>
  );
}
