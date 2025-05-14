import Button from "@/shared/button/Button";
import React from "react";

const Hero = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 mx-auto">
      {/* left section */}
      <section>
        <h1>Find, book, rent a car—quick and super easy!</h1>
        <p>
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <Button>Explore Cars</Button>
      </section>
      {/* right section */}
      <section>Right</section>
    </div>
  );
};

export default Hero;
