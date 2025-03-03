import { useState, useEffect, useRef } from "react";
import commit1 from "../assets/commit1.webp";
import commit2 from "../assets/commit2.webp";
import commit3 from "../assets/commit3.webp";

const commitments = [
  { id: 1, title: "QUALITY & CARE", description: "Most of the jewelry is 14k gold filled, sterling silver, or rose gold filled. The best jewelry is always well-cared for. Knowing the best ways to maintain your jewelry can keep your precious pieces looking great for life.", image: commit1 },
  { id: 2, title: "GIVING BACK", description: "1% of all of our profits are donated to the ATC foundation to combat deforestation. We do our part by using non-harmful, compostable packaging materials. All of our ingredients are naturally sourced and biodegradable.", image: commit2 },
  { id: 3, title: "COMMUNITY ORIENTED", description: "We partner with various organizations in our areas that support creative endeavours for underrepresented communities and arts & crafts programs for youth and children. We want to help people pursue their creativity!.", image: commit3 },
];

export default function CommitmentSection() {
  const [activeCommitment, setActiveCommitment] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
            setActiveCommitment(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-6 md:px-16 mt-10 ">
      {/* Display "Our Commitment" section first */}
      <div className="mx-auto mb-15">
        <p className="text-xs uppercase text-gray-500 font-semibold ">
          OUR COMMITMENT
        </p>
        <h2 className="text-3xl md:text-4xl font-bold uppercase mt-2 ">
          "We partner with high quality jewellers who only use recycled gold,
          AAA-grade gemstones, and ethically sourced diamonds."
        </h2>
        <p className="mt-2 text-lg text-gray-600 font-medium">— Founders</p>
      </div>

      {/* Left and Right sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* Left Side - Commitments */}
        <div className="flex flex-col  justify-start">
          <div className="mt-5 space-y-10 relative">
            {/* Vertical Line */}
            <div className="absolute w-0.5 h-full bg-gray-300  md:mb-10"></div>

            {commitments.map((commitment, index) => (
              <div
                key={commitment.id}
                ref={(el) => {
                  if (el) sectionsRef.current[index] = el;
                }}
                className={`relative pl-8 transition-opacity duration-100 ${
                  activeCommitment === index ? "text-black font-bold" : "text-gray-400"
                }`}
              >
                {/* Square Indicator */}
                <div
                  className={`absolute left-[-12px] w-5 h-5  ${
                    activeCommitment === index ? "bg-black" : "bg-gray-400"
                  }`}
                ></div>

                <p className="text-xs font-semibold uppercase text-gray-500 mb-4">
                  COMMITMENT #{commitment.id}
                </p>
                <h3 className="text-4xl font-bold mb-5">{commitment.title}</h3>
                <p className="mt-1 text-gray-600 font-md">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image (Matches Left Side Height) */}
        <div className="relative w-full flex justify-center items-center">
          <img
            src={commitments[activeCommitment]?.image}
            alt="Commitment"
            className="w-full h-auto md:h-[100vh] object-cover transition-transform duration-700 "
          />
        </div>
      </div>
    </div>
  );
}
