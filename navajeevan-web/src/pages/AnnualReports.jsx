import React from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiDownload, FiArrowUpRight } from 'react-icons/fi';
import { PageHero, Reveal } from '../components/ui';
import heroImg from '../assets/images/capacity.jpeg';

import ar2324 from '../assets/reports/ANNUAL_REPORT_2023-24.pdf';
import ar2223 from '../assets/reports/ANNUAL_REPORT_2022-23.pdf';
import ar2122 from '../assets/reports/ANNUAL _REPORT_2021-22.pdf';
import au2324 from '../assets/reports/Audit_report_2023 -2024.pdf';
import au2223 from '../assets/reports/Audit_Report_2022-23.pdf';
import au2122 from '../assets/reports/Audit_report_2021-2022.pdf';
import au2021 from '../assets/reports/Audit_Report_2020-2021.pdf';

const documentsByYear = [
  {
    year: '2023–24',
    annualReport: { title: "Annual Report", link: ar2324, filename: "Navajeevan_Annual_Report_2023-24.pdf" },
    auditedAccount: { title: "Audited Accounts", link: au2324, filename: "Navajeevan_Audit_Report_2023-24.pdf" },
  },
  {
    year: '2022–23',
    annualReport: { title: "Annual Report", link: ar2223, filename: "Navajeevan_Annual_Report_2022-23.pdf" },
    auditedAccount: { title: "Audited Accounts", link: au2223, filename: "Navajeevan_Audit_Report_2022-23.pdf" },
  },
  {
    year: '2021–22',
    annualReport: { title: "Annual Report", link: ar2122, filename: "Navajeevan_Annual_Report_2021-22.pdf" },
    auditedAccount: { title: "Audited Accounts", link: au2122, filename: "Navajeevan_Audit_Report_2021-22.pdf" },
  },
  {
    year: '2020–21',
    annualReport: null,
    auditedAccount: { title: "Audited Accounts", link: au2021, filename: "Navajeevan_Audit_Report_2020-21.pdf" },
  },
];

const DocLink = ({ doc }) => (
  <a
    href={doc.link}
    download={doc.filename}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 rounded-2xl border border-line bg-ivory p-4 transition hover:border-ink-900/30 hover:bg-white"
  >
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-lg text-brand-600 shadow-soft">
      <FiFileText />
    </span>
    <span className="flex-1">
      <span className="block text-sm font-bold text-ink-900">{doc.title}</span>
      <span className="text-xs text-muted">PDF · Download</span>
    </span>
    <FiDownload className="text-muted transition group-hover:translate-y-0.5 group-hover:text-ink-900" />
  </a>
);

const AnnualReports = () => (
  <>
    <PageHero
      eyebrow="Accountability"
      title={<>Annual reports & <em className="italic text-marigold-300">audited accounts.</em></>}
      intro="Explore our impact and financial integrity. Every rupee entrusted to us is reported, audited and made public."
      image={heroImg}
    />

    <section className="section bg-ivory">
      <div className="container-x">
        <div className="grid gap-5 md:grid-cols-2">
          {documentsByYear.map((data, i) => (
            <Reveal key={data.year} delay={(i % 2) * 0.08} className="card p-6 sm:p-8">
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-4xl font-light text-ink-900 sm:text-5xl">{data.year}</h2>
                {i === 0 && <span className="rounded-full bg-marigold-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-marigold-600">Latest</span>}
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-muted">Financial year</p>
              <div className="mt-6 space-y-3">
                {data.annualReport && <DocLink doc={data.annualReport} />}
                {data.auditedAccount && <DocLink doc={data.auditedAccount} />}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-4 rounded-3xl bg-sand p-6 sm:flex-row sm:items-center sm:p-8">
          <p className="text-sm text-ink-800">Looking for statutory registrations such as 12A, 80G or FCRA?</p>
          <Link to="/who-we-are/legal-documents" className="btn-outline shrink-0">Legal documents <FiArrowUpRight /></Link>
        </Reveal>
      </div>
    </section>
  </>
);

export default AnnualReports;
