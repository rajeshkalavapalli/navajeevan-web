import React from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiImage, FiDownload, FiShield } from 'react-icons/fi';
import { FaGavel, FaCertificate, FaBook } from 'react-icons/fa';
import { PageHero, Reveal } from '../components/ui';
import heroImg from '../assets/images/humanrights.jpeg';

import registrationCert from '../assets/legal/Navajeevan Certificate of registration.pdf';
import panCard from '../assets/legal/Navajeevan - PAN.jpg';
import cert12A from '../assets/legal/12A_Navajeevan.pdf';
import cert80G from '../assets/legal/80 G -AAATN6182G_Form 10AB Approval Order_1074682918(1)_19032025.pdf';
import csrCert from '../assets/legal/CSR Certificate.PDF';
import fcraRenewal from '../assets/legal/20231110 FCRA Renewal-Certificate.pdf';
import fcraOld from '../assets/legal/NJ FCRA RC.pdf';
import fc2122 from '../assets/legal/FC Return 2021-22.pdf';
import fc2223 from '../assets/legal/FC Returns 2022 -23.pdf';
import fc2324 from '../assets/legal/FC Returns 2023 - 24.pdf';
import managingCommittee from '../assets/legal/Managing Committee.pdf';

const legalDocumentsData = [
  {
    category: "Registration & Recognition",
    icon: FaCertificate,
    description: "Official documents related to the registration and legal recognition of Navajeevan Organisation.",
    documents: [
      { title: "Registration Certificate (Societies Act)", year: 1995, link: registrationCert },
      { title: "PAN Card", year: 1996, link: panCard, image: true },
      { title: "12A Certificate", year: 2008, link: cert12A },
      { title: "80G Certificate", year: 2008, link: cert80G },
      { title: "CSR Certificate", year: 2017, link: csrCert },
    ],
  },
  {
    category: "FCRA (Foreign Contribution Regulation Act)",
    icon: FaGavel,
    description: "Documents pertaining to our compliance with the Foreign Contribution Regulation Act.",
    documents: [
      { title: "FCRA Registration Certificate", year: 2023, link: fcraRenewal },
      { title: "Old FCRA Registration Certificate", year: 2010, link: fcraOld },
      { title: "FCRA Returns (Form FC-4) 2021-22", year: 2022, link: fc2122 },
      { title: "FCRA Returns (Form FC-4) 2022-23", year: 2023, link: fc2223 },
      { title: "FCRA Returns (Form FC-4) 2023-24", year: 2024, link: fc2324 },
    ],
  },
  {
    category: "Governance",
    icon: FaBook,
    description: "Internal governing documents that guide the operations of Navajeevan Organisation.",
    documents: [
      { title: "Managing Committee Details", year: null, link: managingCommittee },
      { title: "Memorandum of Association", year: 1995, link: null },
      { title: "Rules and Regulations (Bylaws)", year: 1995, link: null },
    ],
  },
];

const LegalStatutoryDocuments = () => (
  <>
    <PageHero
      eyebrow="Transparency"
      title={<>Legal & statutory <em className="italic text-marigold-300">documents.</em></>}
      intro="Upholding the highest standards of transparency and compliance, we provide open access to our key legal and statutory documents."
      image={heroImg}
    />

    <section className="section bg-ivory">
      <div className="container-x space-y-16">
        {legalDocumentsData.map((category) => (
          <Reveal key={category.category} className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
            <div>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-xl text-marigold-300">
                <category.icon />
              </span>
              <h2 className="display-md mt-6 text-balance">{category.category}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{category.description}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {category.documents.map((doc) => {
                const Icon = doc.image ? FiImage : FiFileText;
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-lg text-brand-600">
                      <Icon />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold leading-snug text-ink-900">{doc.title}</span>
                      <span className="text-xs text-muted">
                        {doc.year ? `${doc.year} · ` : ''}{doc.link ? (doc.image ? 'Image' : 'PDF') : 'Available on request'}
                      </span>
                    </span>
                    {doc.link && <FiDownload className="shrink-0 text-muted transition group-hover:text-ink-900" />}
                  </>
                );
                return doc.link ? (
                  <a
                    key={doc.title}
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group card card-hover flex items-center gap-4 p-4"
                  >
                    {content}
                  </a>
                ) : (
                  <Link key={doc.title} to="/contact-us" className="group flex items-center gap-4 rounded-3xl border border-dashed border-line p-4 transition hover:border-ink-900/30">
                    {content}
                  </Link>
                );
              })}
            </div>
          </Reveal>
        ))}

        <Reveal className="flex items-start gap-4 rounded-3xl bg-ink-900 p-6 text-white sm:items-center sm:p-8">
          <FiShield className="mt-1 shrink-0 text-2xl text-marigold-300 sm:mt-0" />
          <p className="text-sm text-white/75">
            Navajeevan Organisation is registered under the Societies Act and holds valid 12A, 80G, CSR-1 and FCRA
            registrations. Donations from Indian taxpayers qualify for deductions under Section 80G.
          </p>
        </Reveal>
      </div>
    </section>
  </>
);

export default LegalStatutoryDocuments;
