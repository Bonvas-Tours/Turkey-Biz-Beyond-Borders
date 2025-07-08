// components/JoinUs.tsx
const JoinUs = () => {
  return (
    <section className="2xl:max-container relative flex flex-col pt-20 lg:mb-10 lg:pt-20" id="explore-more">
      <div className="padding-container text-center xl:max-w-[800px] max-container w-full pb-24 flexCenter flex-col gap-5">
        <h2 className="bold-40 lg:bold-54">Join Our Premier Business Exploration Tour</h2>
        <p className="regular-16 text-gray-30 text-center xl:max-w-[600px]">
          Journey through Turkey's industrial powerhouses and discover new business opportunities.
          From manufacturing facilities to international trade fairs, this is your gateway to
          expanding into European and Asian markets via Turkey's strategic trade corridors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-bold text-lg mb-2">Limited Group Size</h3>
            <p className="text-sm text-gray-600">Only 25 participants for personalized experience</p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-bold text-lg mb-2">6 Days, 5 Nights</h3>
            <p className="text-sm text-gray-600">September 9-15, 2025</p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-bold text-lg mb-2">All-Inclusive</h3>
            <p className="text-sm text-gray-600">Flights, accommodation, tours, and business access</p>
          </div>
        </div>

        <div className="md:max-w-[1200px] bg-black p-5 rounded-2xl overflow-hidden mt-8">
          <iframe
            className="sm:w-[560px] w-full"
            height="315"
            src="https://www.youtube.com/embed/2vqvBzb0xJY?si=oZlCb4b73Bpn6vQ9"
            title="Turkey Business Tour Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default JoinUs