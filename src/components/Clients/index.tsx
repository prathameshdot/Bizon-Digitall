"use client";

import Image from "next/image";

const Clients = () => {
  const clients = [
    "/images/about/client1.png",
    "/images/about/client2.png",
    "/images/about/client3.png",
    "/images/about/client4.png",
    "/images/about/client5.png",
    "/images/about/client6.png",
  ];

  // Duplicate clients for seamless loop
  const allClients = [...clients, ...clients];

  return (
    <section className="bg-white py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Trusted by Leading Brands
          </h2>
        </div>

        {/* Scrolling container */}
        <div className="relative">
          <div className="flex animate-scroll">
            {allClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[200px] h-[80px] mx-6 flex items-center justify-center"
              >
                <Image
                  src={client}
                  alt={`Client ${(index % clients.length) + 1}`}
                  width={180}
                  height={60}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;
