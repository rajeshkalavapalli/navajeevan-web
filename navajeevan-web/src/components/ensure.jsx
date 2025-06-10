import head1 from '../assets/images/head1.jpeg';
import head2 from '../assets/images/head2.jpeg';
import head3 from '../assets/images/head3.jpeg';
import head4 from '../assets/images/head4.jpeg';
import head5 from '../assets/images/head5.jpeg';
import head6 from '../assets/images/head6.jpeg';
import head7 from '../assets/images/head7.jpeg';
import head8 from '../assets/images/head8.jpeg';
import head9 from '../assets/images/head9.jpeg';
import head10 from '../assets/images/head10.jpeg';

const enduringCommitments = [
  { src: head1, title: "Education" },
  { src: head2, title: "Health" },
  { src: head3, title: "Housing" },
  { src: head4, title: "Environment" },
  { src: head5, title: "Agriculture" },
  { src: head6, title: "Human Rights Protection" },
  { src: head7, title: "Horticulture" },
  { src: head8, title: "Disaster Mitigation" },
  { src: head9, title: "Livelihoods Promotion" },
  { src: head10, title: "Capacity Building & Governance" },
];

function Ensure() {
  return (
    <section className="bg-[#f4f4f4] py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#222831] mb-3">
          Our Commitment to Enduring Change
        </h2>
        <div className="w-20 h-1 bg-[#76ABAE] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {enduringCommitments.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#76ABAE] shadow-md mb-4">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-center text-sm md:text-base font-medium text-[#31363F]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ensure;
