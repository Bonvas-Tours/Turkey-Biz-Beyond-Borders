import Button from "./Button"
import CardGrid1 from "./CardGrid1"

const WhyTrip = () => {
  return (
    <section className="2xl:max-container relative lg:mb-10 xl:mb-20 flex justify-start ">
      <div className="padding-container w-full pb-24 flex flex-col gap-5 items-center">
        <h2 className="bold-40 lg:bold-54">Why You Shouldn't Miss This Trip</h2>
        <CardGrid1 />

        <div className="w-fit text-center">
          <Button
            link='/booking-form'
            title="Book Now"
            variant="btn_dark"
          />
        </div>

      </div>

    </section>
  )
}

export default WhyTrip