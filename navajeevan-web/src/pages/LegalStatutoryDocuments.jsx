// src/pages/LegalStatutoryDocuments.jsx

import React from 'react';
import { Colors } from '../utils/Colors.js';
import { FaFilePdf, FaDownload, FaGavel, FaCertificate, FaBook } from 'react-icons/fa'; // Icons for PDF, Download, Gavel, Certificate, Book

// Placeholder data for Legal and Statutory Documents
// IMPORTANT: Ensure your PDF files are located in the 'public/assets/legal/' directory.
// For example, for "Registration_Certificate.pdf", the file should be at public/assets/legal/Registration_Certificate.pdf
const legalDocumentsData = [
  {
    category: "Registration & Recognition",
    icon: FaCertificate,
    description: "Official documents related to the registration and legal recognition of Navajeevan Organisation.",
    documents: [
      // Updated to match filenames from image_7a1f1a.png
      { title: "Registration Certificate (Societies Act)", year: 1995, link: "/assets/legal/Navajeevan Certificate of registration.pdf" },
      { title: "PAN Card", year: 1996, link: "/assets/legal/Navajeevan - PAN.JPG" }, // Note: This is a JPG
      { title: "12A Certificate", year: 2008, link: "/assets/legal/12A_Navajeevan.pdf" },
      { title: "80G Certificate", year: 2008, link: "/assets/legal/80 G - AAATN6182G_Form 10AB Approval....pdf" },
      { title: "CSR Certificate", year: 2017, link: "/assets/legal/CSR Certificate.pdf" }, // New document found
      // NITI Aayog Registration removed as it was not in your provided file list.
    ],
  },
  {
    category: "FCRA (Foreign Contribution Regulation Act)",
    icon: FaGavel,
    description: "Documents pertaining to our compliance with the Foreign Contribution Regulation Act.",
    documents: [
      // Updated to match filenames from image_7a1f1a.png
      { title: "FCRA Registration Certificate", year: 2023, link: "/assets/legal/20231110 FCRA Renewal-Certificate.pdf" },
      { title: "Old FCRA Registration Certificate", year: 2010, link: "/assets/legal/NJ FCRA RC.pdf" }, // Included based on file name
      { title: "FCRA Returns (Form FC-4) 2021-22", year: 2022, link: "/assets/legal/FC Returns 2021-22.pdf" },
      { title: "FCRA Returns (Form FC-4) 2022-23", year: 2023, link: "/assets/legal/FC Returns 2022-23.pdf" },
      { title: "FCRA Returns (Form FC-4) 2023-24", year: 2024, link: "/assets/legal/FC Returns 2023 - 24.pdf" },
    ],
  },
  {
    category: "Organizational Bylaws & Policies",
    icon: FaBook,
    description: "Internal governing documents and policies that guide the operations of Navajeevan Organisation.",
    documents: [
      // Updated based on available file, remaining are placeholders for now.
      { title: "Managing Committee Details", year: null, link: "/assets/legal/Managing Committee.pdf" }, // New document found
      { title: "Memorandum of Association", year: 1995, link: "/assets/legal/Memorandum_of_Association.pdf" }, // Placeholder
      { title: "Rules and Regulations (Bylaws)", year: 1995, link: "/assets/legal/Rules_and_Regulations.pdf" }, // Placeholder
      // Add more policies like HR policy, Child Protection Policy etc.
    ],
  },
  // Add more categories as needed
];

const LegalStatutoryDocuments = () => {
  return (
    <section className={`bg-[${Colors.LightSectionBg}] py-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        {/* --- Main Page Header --- */}
        <h2 className={`text-4xl md:text-5xl font-extrabold text-[${Colors.PrimaryDarkGreen}] text-center mb-4 leading-tight`}>
          Legal & Statutory Documents
        </h2>
        <p className={`text-lg text-center mb-12 max-w-2xl mx-auto opacity-90 text-[${Colors.BodyTextDark}]`}>
          Upholding the highest standards of transparency and compliance, we provide access to our key legal and statutory documents.
        </p>
        <div className={`w-32 h-0.5 bg-[${Colors.AccentOrange}] mx-auto mb-16`}></div>

        {/* --- Document Categories Section --- */}
        <div className="space-y-12"> {/* Increased space between categories */}
          {legalDocumentsData.length === 0 ? (
            <p className={`text-center text-xl opacity-70 mt-8 text-[${Colors.BodyTextDark}]`}>
              No legal documents available at the moment. Please check back soon!
            </p>
          ) : (
            legalDocumentsData.map((categoryData, catIndex) => (
              <div 
                key={catIndex} 
                className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8`}
              >
                <div className="flex items-center mb-6">
                  {categoryData.icon && <categoryData.icon className={`text-5xl text-[${Colors.Terracotta}] mr-4 flex-shrink-0`} />}
                  <div>
                    <h3 className={`text-3xl font-bold text-[${Colors.PrimaryDarkGreen}] mb-2 leading-tight`}>
                      {categoryData.category}
                    </h3>
                    <p className={`text-base text-[${Colors.BodyTextDark}] opacity-80`}>
                      {categoryData.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryData.documents.map((doc, docIndex) => (
                    <a 
                      key={docIndex} 
                      href={doc.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`flex items-center p-4 rounded-lg border border-gray-200 bg-gray-50 
                                 shadow-sm hover:shadow-md transform hover:scale-[1.02] 
                                 transition-all duration-300 ease-in-out cursor-pointer group`}
                      download // This attribute prompts a download
                    >
                      {/* Check file extension to conditionally render FaFilePdf or handle other types */}
                      {doc.link.toLowerCase().endsWith('.jpg') || doc.link.toLowerCase().endsWith('.jpeg') || doc.link.toLowerCase().endsWith('.png') ? (
                          <img src={doc.link} alt={doc.title} className="w-8 h-8 mr-3 object-contain flex-shrink-0" />
                      ) : (
                          <FaFilePdf className={`text-2xl text-[${Colors.ForestGreen}] mr-3 flex-shrink-0`} />
                      )}
                      
                      <div className="flex-grow">
                        <h4 className={`text-md font-semibold text-[${Colors.BodyTextDark}] leading-tight`}>{doc.title}</h4>
                        {doc.year && <p className="text-xs text-gray-500">Year: {doc.year}</p>}
                      </div>
                      <FaDownload className={`text-lg text-[${Colors.AccentOrange}] group-hover:text-[${Colors.PrimaryDarkGreen}] transition-colors duration-200 ml-2`} />
                    </a>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default LegalStatutoryDocuments;
