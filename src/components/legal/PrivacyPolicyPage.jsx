import React from 'react'
import LegalPageLayout from './LegalPageLayout'

const sections = [
  {
    title: '1. Scope',
    paragraphs: [
      'This Privacy Policy explains how Klinik Dr Siti dan Rakan Rakan collects, uses, stores, and protects personal data when you use our website, contact us, submit a form, make an appointment enquiry, or communicate with us through our channels.',
      'By using this website or providing personal data to us, you agree to the practices described in this policy.',
    ],
  },
  {
    title: '2. Information We Collect',
    paragraphs: [
      'We may collect information that you voluntarily provide, including your name, phone number, email address, preferred branch, appointment details, and any message you submit through our forms or communication channels.',
      'We may also collect limited technical information such as browser type, device data, IP address, and usage patterns to maintain site performance and security.',
    ],
  },
  {
    title: '3. How We Use Information',
    bullets: [
      'Respond to enquiries and appointment requests.',
      'Provide medical, administrative, and customer support.',
      'Maintain internal records and improve our services.',
      'Send appointment-related reminders, updates, or follow-up information.',
      'Comply with legal, regulatory, and operational obligations.',
    ],
  },
  {
    title: '4. Disclosure of Information',
    paragraphs: [
      'We do not sell personal data. Information may be shared only with staff, authorised service providers, or third parties where needed to operate our services, fulfil your request, protect our systems, or comply with applicable law.',
    ],
  },
  {
    title: '5. Data Retention and Security',
    paragraphs: [
      'We retain personal data only for as long as necessary for the purposes for which it was collected or as required by law. We use reasonable administrative and technical safeguards to protect personal data against unauthorised access, misuse, or loss.',
    ],
  },
  {
    title: '6. Your Rights',
    paragraphs: [
      'Subject to applicable law, you may request access to, correction of, or deletion of your personal data, or withdraw consent where processing is based on consent. You may also contact us for questions about how your data is handled.',
    ],
  },
  {
    title: '7. Contact',
    paragraphs: [
      'For privacy-related enquiries, please contact Klinik Dr Siti dan Rakan Rakan using our website contact form or the contact details published on the site.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="We respect your privacy and are committed to handling your personal data in a clear, secure, and responsible manner."
      sections={sections}
      seoTitle="Privacy Policy | Klinik Dr Siti dan Rakan Rakan"
    />
  )
}
