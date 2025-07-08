import PackageGrid from "./PackageGrid"

const Packages = () => {
    return (
        <section className="2xl:max-container relative flex flex-col lg:mb-10">
            <div className="padding-container text-center xl:max-w-[800px] max-container w-full pb-24 flexCenter flex-col gap-5">
                <h2 className="bold-40 lg:bold-54">Exciting Packages</h2>
                <p className="regular-16 text-gray-30 text-center xl:max-w-[600px]">Choose between two exciting packages for a truly personalized experience</p>

                <div>
                    <PackageGrid />
                </div>


            </div>


        </section>
    )
}

export default Packages