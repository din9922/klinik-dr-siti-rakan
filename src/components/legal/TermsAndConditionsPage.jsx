import React from 'react'
import LegalPageLayout from './LegalPageLayout'

const sections = [
  {
    title: '1. Acceptance of Terms',
    paragraphs: [
      'These Terms & Conditions govern your use of the Klinik Dr Siti dan Rakan Rakan website and related online services. By accessing or using the site, you agree to be bound by these terms.',
    ],
  },
  {
    title: '2. Website Use',
    bullets: [
      'Use the website only for lawful and appropriate purposes.',
      'Do not attempt to disrupt, damage, or gain unauthorised access to the site or its systems.',
      'Do not upload unlawful, harmful, or misleading content through any form or communication channel.',
    ],
  },
  {
    title: '3. Medical Information',
    paragraphs: [
      'The website content is provided for general informational purposes only and should not be treated as a substitute for an in-person medical consultation, diagnosis, or emergency care.',
      'If you have urgent symptoms or a medical emergency, please contact the clinic directly or seek immediate emergency assistance.',
    ],
  },
  {
    title: '4. Appointments and Services',
    paragraphs: [
      'Appointment availability, service descriptions, and operating hours may change from time to time. We may reschedule, decline, or adjust appointments where operational needs, clinical judgment, or patient safety require it.',
    ],
  },
  {
    title: '5. Intellectual Property',
    paragraphs: [
      'All website content, branding, copy, images, graphics, and layout elements remain the property of Klinik Dr Siti dan Rakan Rakan or their respective owners unless stated otherwise. You may not reproduce or distribute site materials without permission.',
    ],
  },
  {
    title: '6. Limitation of Liability',
    paragraphs: [
      'While we aim to keep the site accurate and available, we do not guarantee that the site will always be error-free, uninterrupted, or suitable for every purpose. To the extent permitted by law, the clinic is not liable for indirect losses arising from your use of the website.',
    ],
  },
  {
    title: '7. Changes',
    paragraphs: [
      'We may revise these Terms & Conditions from time to time. The updated version will take effect once published on this page.',
    ],
  },
]

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="Please review these terms before using the website or submitting any enquiry."
      sections={sections}
      seoTitle="Terms & Conditions | Klinik Dr Siti dan Rakan Rakan"
    />
  )
}
