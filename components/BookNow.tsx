import Button from "./Button";

export default function BookNow() {
    return (
        <section className="bg-gradient-to-b from-[#fff] to-[#FFE4B5] py-16 px-4 text-center 2xl:max-container relative flex flex-col lg:mb-10">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Book Your Spot Now</h2>
                <p className="regular-20 md:text-xl mb-8 max-w-2xl mx-auto">
                    Don't Miss Out! Reserve Your Spot Now to journey through Turkey's industrial powerhouses and discover new business opportunities
                </p>

                <div className="flex justify-center">
                    <Button
                        link="/booking-form"
                        title="Book Now"
                        variant="btn_dark"
                    />
                </div>
            </div>
        </section>
    );
}