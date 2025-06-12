import React, { useEffect, useRef, useState } from 'react';
import { Colors } from '../utils/Colors.js'; // Ensure .js extension and no leading space
import {
  thematicProgramsData,
  targetAudiencesData,
  ongoingProjectsData,
  completedProjectsData,
} from '../data/ourworkData'; // Ensure no leading space and correct casing

const OurWorkPage = () => {
  // State for scroll-in animations for thematic program cards
  const [thematicCardsInView, setThematicCardsInView] = useState({});
  // Refs for individual thematic program cards
  const thematicSectionRefs = useRef({});

  // States for main section heading animations
  const [audienceInView, setAudienceInView] = useState(false);
  const [ongoingProjectsInView, setOngoingProjectsInView] = useState(false);
  const [completedProjectsInView, setCompletedProjectsInView] = useState(false);

  // Refs for main section headings
  const audienceRef = useRef(null);
  const ongoingProjectsRef = useRef(null);
  const completedProjectsRef = useRef(null);

  // State for "Show More" functionality in various sections
  const [showAllInterventions, setShowAllInterventions] = useState(false);
  const [showAllAudiences, setShowAllAudiences] = useState(false);
  const [showAllOngoing, setShowAllOngoing] = useState(false);
  const [showAllCompleted, setShowAllCompleted] = useState(false);

  // Number of items to show initially for each section
  const initialInterventionsToShow = 6; // Display 6 thematic programs by default
  const initialAudiencesToShow = 8;     // Display 8 audience groups by default
  const initialProjectsToShow = 6;      // Display 6 projects by default

  useEffect(() => {
    // Console log the number of thematic programs loaded for debugging
    console.log("Number of Thematic Programs loaded:", thematicProgramsData.length);

    // Array to store all IntersectionObserver instances for proper cleanup
    const observers = [];

    // --- Setup IntersectionObserver for main section headings (Who We Serve, Ongoing, Completed Projects) ---
    const setupObserver = (ref, setState) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setState(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    setupObserver(audienceRef, setAudienceInView);
    setupObserver(ongoingProjectsRef, setOngoingProjectsInView);
    setupObserver(completedProjectsRef, setCompletedProjectsInView);

    // --- Setup IntersectionObserver for individual thematic program cards ---
    thematicProgramsData.forEach((program, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setThematicCardsInView((prev) => ({ ...prev, [index]: true }));
            observer.disconnect();
          }
        },
        { root: null, rootMargin: '0px', threshold: 0.1 }
      );
      if (thematicSectionRefs.current[index]) {
        observer.observe(thematicSectionRefs.current[index]);
        observers.push(observer);
      }
    });

    // --- Cleanup function for all observers ---
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Determine which thematic programs to display based on "Show More" state
  const displayedThematicPrograms = showAllInterventions
    ? thematicProgramsData
    : thematicProgramsData.slice(0, initialInterventionsToShow);

  // Determine which audience groups to display based on "Show More" state
  const displayedTargetAudiences = showAllAudiences
    ? targetAudiencesData
    : targetAudiencesData.slice(0, initialAudiencesToShow);

  // Determine which ongoing projects to display based on "Show More" state
  const displayedOngoingProjects = showAllOngoing
    ? ongoingProjectsData
    : ongoingProjectsData.slice(0, initialProjectsToShow);

  // Determine which completed projects to display based on "Show More" state
  const displayedCompletedProjects = showAllCompleted
    ? completedProjectsData
    : completedProjectsData.slice(0, initialProjectsToShow);

  return (
    <section className={`bg-[${Colors.LightSectionBg}] py-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        {/* --- Main Page Header --- */}
        <h2 className={`text-4xl md:text-5xl font-extrabold text-[${Colors.PrimaryDarkGreen}] text-center mb-4 leading-tight`}>
          Our Work
        </h2>
        <p className={`text-lg text-center mb-12 max-w-2xl mx-auto opacity-90 text-[${Colors.BodyTextDark}]`}>
          Navajeevan Organisation is committed to driving sustainable change and empowering marginalized communities across various critical sectors. Our diverse programs are designed to address immediate needs while fostering long-term resilience and dignity.
        </p>
        <div className={`w-32 h-0.5 bg-[${Colors.AccentOrange}] mx-auto mb-10`}></div>

        {/* --- Section 1: Our Core Intervention Areas (Thematic Programs Grid with Show More/Less) --- */}
        <h3 className={`text-3xl md:text-4xl font-bold text-[${Colors.PrimaryDarkGreen}] text-center mb-12`}>
          Our Core Intervention Areas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"> {/* Adjusted margin for button */}
          {displayedThematicPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                ref={(el) => (thematicSectionRefs.current[index] = el)}
                className={`flex flex-col p-6 rounded-lg shadow-lg
                          bg-gradient-to-br from-[${Colors.CreamyWhite}] to-[${Colors.LightGray}] border border-transparent
                          hover:border-[${Colors.AccentOrange}] hover:shadow-xl
                          transform hover:scale-[1.01] transition-all duration-500 ease-out cursor-default
                          ${thematicCardsInView[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="mb-4 text-center">
                  {IconComponent && <IconComponent size={40} className={`text-[${Colors.AccentOrange}]`} />}
                </div>
                <h3 className={`text-2xl font-bold text-[${Colors.Terracotta}] mb-2 text-center`}>
                  {program.title}
                </h3>
                {program.summary && (
                  <p className={`text-base text-center text-[${Colors.Gray700}] mb-4 italic`}>
                    {program.summary}
                  </p>
                )}
                <ul className={`list-none text-sm text-[${Colors.BodyTextDark}] space-y-2 flex-grow`}>
                  {program.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`text-[${Colors.AccentOrange}] mr-2 text-xl leading-none`}>&bull;</span>
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        {thematicProgramsData.length > initialInterventionsToShow && (
          <div className="text-center mb-24">
            <button
              onClick={() => setShowAllInterventions(!showAllInterventions)}
              className={`px-8 py-3 rounded-full text-lg font-semibold bg-[${Colors.PrimaryDarkGreen}] text-[${Colors.CreamyWhite}]
                               hover:bg-[${Colors.AccentOrange}] transition-colors duration-300`}
            >
              {showAllInterventions ? 'Show Less' : 'View All Intervention Areas'}
            </button>
          </div>
        )}
        {thematicProgramsData.length <= initialInterventionsToShow && (
          <div className="mb-24"></div>
        )}


        {/* --- Section 2: Who We Serve / Our Target Audience (Responsive Grid with Show More/Less) --- */}
        <h3
          ref={audienceRef}
          className={`text-3xl md:text-4xl font-bold text-[${Colors.PrimaryDarkGreen}] text-center mb-12 transition-all duration-1000 ease-out ${audienceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Who We Serve
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 mb-8 justify-items-center"> {/* Adjusted margin for button */}
          {displayedTargetAudiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-5 rounded-full aspect-square w-32 sm:w-40 md:w-48 lg:w-52
                           bg-gradient-to-tr from-[${Colors.StoneBeige}] to-[${Colors.CreamyWhite}] shadow-lg text-center
                           border border-transparent hover:border-[${Colors.AccentOrange}]
                           transform hover:scale-[1.08] transition-all duration-300 ease-out cursor-default`}
              >
                <div className={`text-[${Colors.PrimaryDarkGreen}] mb-2`}>
                  {IconComponent && <IconComponent size={48} className={`text-[${Colors.PrimaryDarkGreen}]`} />}
                </div>
                <p className={`text-sm md:text-base font-semibold text-[${Colors.BodyTextDark}] leading-tight`}>{audience.name}</p>
              </div>
            );
          })}
        </div>
        {targetAudiencesData.length > initialAudiencesToShow && (
          <div className="text-center mb-24">
            <button
              onClick={() => setShowAllAudiences(!showAllAudiences)}
              className={`px-8 py-3 rounded-full text-lg font-semibold bg-[${Colors.PrimaryDarkGreen}] text-[${Colors.CreamyWhite}]
                               hover:bg-[${Colors.AccentOrange}] transition-colors duration-300`}
            >
              {showAllAudiences ? 'Show Less' : 'View All Target Audiences'}
            </button>
          </div>
        )}
        {targetAudiencesData.length <= initialAudiencesToShow && (
          <div className="mb-24"></div>
        )}

        {/* --- Section 3: Our Ongoing Projects (with Show More/Less) --- */}
        <h3
          ref={ongoingProjectsRef}
          className={`text-3xl md:text-4xl font-bold text-[${Colors.PrimaryDarkGreen}] text-center mb-12 transition-all duration-1000 ease-out ${ongoingProjectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Our Ongoing Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedOngoingProjects.map((project, index) => (
            <a href={project.link} key={index} className="block group">
              <div className={`flex flex-col p-6 rounded-lg shadow-md bg-white border border-transparent
                               group-hover:border-[${Colors.AccentOrange}] group-hover:shadow-xl
                               transform group-hover:scale-[1.02] transition-all duration-300 ease-out`}>
                <h4 className={`text-xl font-bold text-[${Colors.Terracotta}] mb-2 group-hover:text-[${Colors.PrimaryDarkGreen}]`}>
                  {project.name}
                </h4>
                <p className={`text-sm text-[${Colors.BodyTextDark}] mb-1`}>
                  <span className="font-semibold">Beneficiaries:</span> {project.beneficiaries}
                </p>
                <p className={`text-sm text-[${Colors.BodyTextDark}] mb-3`}>
                  <span className="font-semibold">Supported By:</span> {project.supportedBy}
                </p>
                <span className={`mt-auto text-[${Colors.AccentOrange}] group-hover:underline text-sm font-medium`}>
                  Learn More &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
        {ongoingProjectsData.length > initialProjectsToShow && (
          <div className="text-center mb-24">
            <button
              onClick={() => setShowAllOngoing(!showAllOngoing)}
              className={`px-8 py-3 rounded-full text-lg font-semibold bg-[${Colors.PrimaryDarkGreen}] text-[${Colors.CreamyWhite}]
                               hover:bg-[${Colors.AccentOrange}] transition-colors duration-300`}
            >
              {showAllOngoing ? 'Show Less' : 'View All Ongoing Projects'}
            </button>
          </div>
        )}
        {ongoingProjectsData.length <= initialProjectsToShow && (
          <div className="mb-24"></div>
        )}

        {/* --- Section 4: Our Completed Projects (with Show More/Less) --- */}
        <h3
          ref={completedProjectsRef}
          className={`text-3xl md:text-4xl font-bold text-[${Colors.PrimaryDarkGreen}] text-center mb-12 transition-all duration-1000 ease-out ${completedProjectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Our Completed Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedCompletedProjects.map((project, index) => (
            <a href={project.link} key={index} className="block group">
              <div className={`flex flex-col p-6 rounded-lg shadow-md bg-white border border-transparent
                               group-hover:border-[${Colors.AccentOrange}] group-hover:shadow-xl
                               transform group-hover:scale-[1.02] transition-all duration-300 ease-out`}>
                <h4 className={`text-xl font-bold text-[${Colors.Terracotta}] mb-2 group-hover:text-[${Colors.PrimaryDarkGreen}]`}>
                  {project.name}
                </h4>
                <p className={`text-sm text-[${Colors.BodyTextDark}] mb-1`}>
                  <span className="font-semibold">Beneficiaries:</span> {project.beneficiaries}
                </p>
                <p className={`text-sm text-[${Colors.BodyTextDark}] mb-1`}>
                  <span className="font-semibold">Supported By:</span> {project.supportedBy}
                </p>
                {project.period && (
                  <p className={`text-sm text-[${Colors.BodyTextDark}] mb-3`}>
                    <span className="font-semibold">Period:</span> {project.period}
                  </p>
                )}
                <span className={`mt-auto text-[${Colors.AccentOrange}] group-hover:underline text-sm font-medium`}>
                  Learn More &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
        {completedProjectsData.length > initialProjectsToShow && (
          <div className="text-center mb-16">
            <button
              onClick={() => setShowAllCompleted(!showAllCompleted)}
              className={`px-8 py-3 rounded-full text-lg font-semibold bg-[${Colors.PrimaryDarkGreen}] text-[${Colors.CreamyWhite}]
                               hover:bg-[${Colors.AccentOrange}] transition-colors duration-300`}
            >
              {showAllCompleted ? 'Show Less' : 'View All Completed Projects'}
            </button>
          </div>
        )}
        {completedProjectsData.length <= initialProjectsToShow && (
          <div className="mb-16"></div>
        )}
      </div>
    </section>
  );
};

export default OurWorkPage;
