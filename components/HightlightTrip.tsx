import CardGrid1 from "./CardGrid1"
import HighlightCardGrid from "./HighlightCardGrid"

const HighlightTrip = () => {
    return (
        <section className="2xl:max-container relative lg:mb-10 xl:mb-20 flex justify-start ">
            <div className="padding-container w-full pb-24 flex flex-col gap-5">
                <h2 className="bold-40 lg:bold-54">Trip Highlights</h2>
                <HighlightCardGrid />
            </div>

        </section>
    )
}

export default HighlightTrip