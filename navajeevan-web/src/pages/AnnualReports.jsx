// src/pages/AnnualReports.jsx

import React, { useState } from 'react';
import { Colors } from '../utils/Colors.js';
import { FaFilePdf, FaDownload, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Added Chevron icons

// Consolidated and organized data by year
// IMPORTANT: Ensure your PDF files are located in the 'public/assets/reports/' directory.
// For example, for "ANNUAL_REPORT_2023-24.pdf", the file should be at public/assets/reports/ANNUAL_REPORT_2023-24.pdf
const documentsByYear = [
  {
    year: 2024,
    annualReport: { title: "Annual Report 2023-24", link: "/assets/reports/ANNUAL_REPORT_2023-24.pdf" },
    auditedAccount: { title: "Audited Accounts 2023-24", link: "/assets/reports/Audit_Report_2023-2024.pdf" },
  },
  {
    year: 2023,
    annualReport: { title: "Annual Report 2022-23", link: "/assets/reports/ANNUAL_REPORT_2022-23.pdf" },
    auditedAccount: { title: "Audited Accounts 2022-23", link: "/assets/reports/Audit_Report_2022-2023.pdf" },
  },
  {
    year: 2022,
    annualReport: { title: "Annual Report 2021-22", link: "/assets/reports/ANNUAL_REPORT_2021-22.pdf" },
    auditedAccount: { title: "Audited Accounts 2021-22", link: "/assets/reports/Audit_Report_2021-2022.pdf" },
  },
  { // Added 2021 as it was commented out in your provided code, maintaining structure
    year: 2021,
    annualReport: { title: "Annual Report 2020-21", link: "/assets/reports/ANNUAL_REPORT_2020-21.pdf" },
    auditedAccount: { title: "Audited Accounts 2020-21", link: "/assets/reports/Audit_Report_2020-2021.pdf" },
  },
  // Add more years/documents as needed, ensuring 'link' points to public/assets/reports/
];

const AnnualReports = () => {
  const [openYear, setOpenYear] = useState(null); // State to manage which year's accordion is open

  const toggleAccordion = (year) => {
    setOpenYear(openYear === year ? null : year); // Toggle open/close
  };

  return (
    <section className={`bg-[${Colors.LightSectionBg}] py-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        {/* --- Main Page Header --- */}
        <h2 className={`text-4xl md:text-5xl font-extrabold text-[${Colors.PrimaryDarkGreen}] text-center mb-4 leading-tight`}>
          Annual Reports & Audited Accounts
        </h2>
        <p className={`text-lg text-center mb-12 max-w-2xl mx-auto opacity-90 text-[${Colors.BodyTextDark}]`}>
          Transparency and accountability are core to Navajeevan Organisation. Explore our annual reports and audited financial statements to understand our impact and financial stewardship.
        </p>
        <div className={`w-32 h-0.5 bg-[${Colors.AccentOrange}] mx-auto mb-16`}></div>

        {/* --- Documents by Year Section --- */}
        <div className="space-y-6">
          {documentsByYear.length === 0 ? (
            <p className={`text-center text-xl opacity-70 mt-8 text-[${Colors.BodyTextDark}]`}>
              No reports available at the moment. Please check back soon!
            </p>
          ) : (
            documentsByYear.map((data, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden 
                           transition-all duration-300 ease-in-out hover:shadow-xl`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(data.year)}
                  className={`flex justify-between items-center w-full p-6 text-left 
                             bg-gradient-to-r from-[${Colors.PrimaryDarkGreen}] to-[${Colors.ForestGreen}] text-white 
                             font-bold text-2xl md:text-3xl rounded-t-xl
                             hover:from-[${Colors.ForestGreen}] hover:to-[${Colors.AccentOrange}] 
                             transition-all duration-300 ease-in-out`}
                >
                  <span>{data.year}</span>
                  {openYear === data.year ? <FaChevronUp className="ml-4" /> : <FaChevronDown className="ml-4" />}
                </button>

                {/* Accordion Content */}
                {openYear === data.year && (
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50">
                    {/* Annual Report Card */}
                    {data.annualReport && (
                      <a 
                        href={data.annualReport.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`flex items-center p-4 rounded-lg border border-gray-200 bg-white 
                                   shadow-sm hover:shadow-md transform hover:scale-[1.02] 
                                   transition-all duration-300 ease-in-out cursor-pointer group`}
                        download // This attribute prompts a download
                      >
                        <FaFilePdf className={`text-3xl text-[${Colors.Terracotta}] mr-4 flex-shrink-0`} />
                        <div className="flex-grow">
                          <h4 className={`text-lg font-semibold text-[${Colors.BodyTextDark}] leading-tight`}>{data.annualReport.title}</h4>
                          <p className="text-sm text-gray-500">View/Download PDF</p>
                        </div>
                        <FaDownload className={`text-xl text-[${Colors.PrimaryDarkGreen}] group-hover:text-[${Colors.AccentOrange}] transition-colors duration-200`} />
                      </a>
                    )}

                    {/* Audited Accounts Card */}
                    {data.auditedAccount && (
                      <a 
                        href={data.auditedAccount.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`flex items-center p-4 rounded-lg border border-gray-200 bg-white 
                                   shadow-sm hover:shadow-md transform hover:scale-[1.02] 
                                   transition-all duration-300 ease-in-out cursor-pointer group`}
                        download // This attribute prompts a download
                      >
                        <FaFilePdf className={`text-3xl text-[${Colors.Terracotta}] mr-4 flex-shrink-0`} />
                        <div className="flex-grow">
                          <h4 className={`text-lg font-semibold text-[${Colors.BodyTextDark}] leading-tight`}>{data.auditedAccount.title}</h4>
                          <p className="text-sm text-gray-500">View/Download PDF</p>
                        </div>
                        <FaDownload className={`text-xl text-[${Colors.PrimaryDarkGreen}] group-hover:text-[${Colors.AccentOrange}] transition-colors duration-200`} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default AnnualReports;
