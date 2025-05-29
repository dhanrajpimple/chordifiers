import React from "react";

const InsightsSection = () => {
  return (
    <div>
      {/* Banner */}
      <div className="w-full bg-[#f0e924] py-10 px-4 flex justify-center items-center">
        <p className="text-black text-center text-[1.8rem] md:text-4xl  sm:text-[1.2rem] font-[500] font-['Plus_Jakarta_Sans'] m-0">
          Where every note resonates with passion
        </p>
      </div>

      {/* Insights Section */}
      <div className="bg-white text-center font-serif px-[220px] py-[50px] max-xl:px-[100px] max-lg:px-[40px] max-md:px-4">
        <div className="flex flex-wrap items-center justify-between gap-10 max-md:flex-col">
          {/* Left Section */}
          <div className="text-left max-md:text-center flex-1 min-w-[280px]">
            <h1 className="text-[42px] max-md:text-[32px] max-sm:text-[24px] text-[#111] leading-tight font-light mb-5">
              Discover <br /> our <br /> key insights
            </h1>
            <p className="text-[18px] max-md:text-[16px] max-sm:text-[14px] text-[#555] leading-relaxed mb-6">
              Diving into the metrics behind our success: a detailed <br />
              look at the key factors driving our achievements in the <br />
              music industry.
            </p>
            <button
              className="bg-[#F0E81B] text-black font-bold text-[16px] max-sm:text-[14px] py-3 px-6 max-sm:py-2 max-sm:px-5 rounded-full"
              onClick={() => window.scrollTo(0, 0)}
            >
              More Info
            </button>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-5 flex-1 items-center max-w-[339px] mx-auto">
            {/* Card 1 - Black */}
            <div className="w-full bg-black text-white rounded-lg p-6 max-sm:p-5 text-left">
              <div className="text-[36px] max-md:text-[28px] max-sm:text-[24px] font-bold">12K</div>
              <div className="text-[18px] max-md:text-[16px] max-sm:text-[14px] font-bold mt-2">
                Music Management Service
              </div>
              <p className="text-[14px] max-md:text-[13px] max-sm:text-[12px] mt-2 leading-snug">
                Explore a wide range of effective and impactful <br />
                promotional options.
              </p>
            </div>

            {/* Card 2 - Yellow */}
            <div className="w-full bg-[#F0E81B] text-[#111] rounded-lg p-6 max-sm:p-5 text-left">
              <div className="text-[36px] max-md:text-[28px] max-sm:text-[24px] font-bold">72%</div>
              <div className="text-[18px] max-md:text-[16px] max-sm:text-[14px] font-bold mt-2">
                More Opportunities
              </div>
              <p className="text-[14px] max-md:text-[13px] max-sm:text-[12px] mt-2 leading-snug">
                Elevate your music career with an influx of new <br />
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
