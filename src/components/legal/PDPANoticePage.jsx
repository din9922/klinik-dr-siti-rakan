import React from 'react'
import LegalPageLayout from './LegalPageLayout'

const sections = [
  {
    title: '1. Personal Data Notice',
    paragraphs: [
      'This PDPA Notice explains how Klinik Dr Siti dan Rakan Rakan collects and processes personal data in connection with website enquiries, appointment requests, patient communication, and related administrative activities.',
    ],
  },
  {
    title: '2. Types of Data Collected',
    bullets: [
      'Identity and contact details such as name, phone number, and email address.',
      'Appointment or branch preferences and message content.',
      'Any information you choose to provide to us through forms, phone calls, WhatsApp, or other contact methods.',
      'Limited technical data used for site security and analytics.',
    ],
  },
  {
    title: '3. Purposes of Processing',
    bullets: [
      'To respond to your enquiry and manage appointment coordination.',
      'To provide medical and administrative services.',
      'To maintain internal records and improve patient communication.',
      'To comply with applicable laws, regulations, and record-keeping obligations.',
    ],
  },
  {
    title: '4. Consent',
    paragraphs: [
      'Where required, we rely on your consent to process personal data. You may withdraw consent at any time, subject to legal or operational limitations. Withdrawal of consent may affect our ability to respond to your request or provide certain services.',
    ],
  },
  {
    title: '5. Access, Correction, and Questions',
    paragraphs: [
      'You may request access to your personal data or ask us to correct inaccuracies. You may also contact us if you have questions about how your data is handled or if you wish to make a data-related request.',
    ],
  },
  {
    title: '6. Data Sharing and Transfer',
    paragraphs: [
      'We may share data with authorised staff, service providers, or authorities where necessary for service delivery, legal compliance, or protection of clinic operations. Any such sharing is limited to what is reasonably required.',
    ],
  },
  {
    title: '7. Contact',
    paragraphs: [
      'For PDPA-related requests or enquiries, please contact the clinic through the website contact form or the contact details published on the site.',
    ],
  },
]

export default function PDPANoticePage() {
  return (
    <LegalPageLayout
      title="PDPA Notice"
      subtitle="We process personal data in line with the Personal Data Protection Act and our clinic operations."
      sections={sections}
      seoTitle="PDPA Notice | Klinik Dr Siti dan Rakan Rakan"
    />
  )
}
