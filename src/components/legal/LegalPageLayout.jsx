import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

function renderParagraphs(paragraphs) {
  return paragraphs.map((paragraph, index) => (
    <p key={index} className="text-sm md:text-base leading-7 text-neutral-600">
      {paragraph}
    </p>
  ))
}

export default function LegalPageLayout({
  title,
  subtitle,
  sections,
  seoTitle,
}) {
  useEffect(() => {
    document.title = seoTitle || `${title} | Klinik Dr Siti dan Rakan Rakan`
  }, [seoTitle, title])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-10 md:py-16">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700"
            >
              Back to Home
            </Link>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
            <div className="p-6 md:p-10 border-b border-neutral-100 bg-neutral-50/60">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500 mb-3">
                Legal Information
              </p>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
                {title}
              </h1>
              <p className="mt-4 text-sm md:text-base leading-7 text-neutral-600 max-w-3xl">
                {subtitle}
              </p>
              <p className="mt-4 text-xs md:text-sm font-semibold text-neutral-500">
                Last Updated: May 2026
              </p>
            </div>

            <div className="p-6 md:p-10 space-y-10">
              {sections.map((section) => (
                <section key={section.title} className="space-y-4">
                  <h2 className="text-lg md:text-2xl font-semibold text-neutral-900">
                    {section.title}
                  </h2>

                  {section.paragraphs && renderParagraphs(section.paragraphs)}

                  {section.bullets && (
                    <ul className="space-y-3 pl-5 list-disc text-sm md:text-base leading-7 text-neutral-600">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
