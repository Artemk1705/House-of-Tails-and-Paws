import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import trans from "./media/trans.png";
import small from "./media/small.png";
import daycare from "./media/daycare.png";
import big from "./media/Subtract.png";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    // Функция для установки начального положения карточек
    const setCardsPosition = () => {
      if (window.innerWidth < 1050) {
        // Для планшетов: распределение карточек в две стопки
        gsap.set(".serv_card", {
          y: (i) => (i % 2 === 0 ? -100 : 100),
          opacity: 0,
          scale: 0.5,
        });
      } else {
        gsap.set(".serv_card", {
          x: (i) => -150 - i * 250,
          rotation: (i) => -5 + i * 2,
          transformOrigin: "center center",
        });
      }
    };

    setCardsPosition();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card_block",
        start: "top 90%",
        end: "bottom center",
        scrub: 1,
      },
    });

    if (window.innerWidth < 1050) {
      tl.to(".serv_card", {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1,
      });
    } else {
      tl.to(".serv_card_4", { x: 100, rotation: 0, duration: 1 }, 0)
        .to(".serv_card_3", { x: 50, rotation: 0, duration: 1 }, 0.2)
        .to(".serv_card_2", { x: -50, rotation: 0, duration: 1 }, 0.4)
        .to(".serv_card_1", { x: -100, rotation: 0, duration: 1 }, 0.6);
    }

    const handleResize = () => {
      setCardsPosition();
      tl.invalidate().restart();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div>
      <h2 className="serv_block_title">We can help you with</h2>
      <div className="card_block">
        <div className="serv_card serv_card_1">
          <img src={daycare} alt="Day care" className="service_picture" />
          <div className="serv_text_block">
            <h3 className="serv_title">Doggy daycare full day</h3>
            <p className="serv_par">
              {" "}
              Treat your furry friend to a day of adventure and socialization in
              our full-day doggy daycare. Limited to no more than 3 pets per day
              to ensure personalized attention and care, our service provides a
              safe and fun environment for your pet to play, relax, and meet new
              friends. All for just $40 a day. Your pet's happiness and safety
              are our top priorities.
            </p>
          </div>
        </div>
        <div className="serv_card serv_card_2">
          <img src={trans} alt="Transportation" className="service_picture" />
          <div className="serv_text_block">
            <h3 className="serv_title">Transportation</h3>
            <p className="serv_par">
              Offering convenient and safe transportation for your pets to and
              from various locations upon request. Whether it's a trip to the
              vet, a grooming appointment, or any other outing, our reliable
              transport service ensures your pet travels in comfort and safety.
              Contact us to discuss your transportation needs and how we can
              help.
            </p>
          </div>
        </div>
        <div className="serv_card serv_card_3">
          <img src={small} alt="Boarding" className="service_picture" />
          <div className="serv_text_block">
            <h3 className="serv_title">Boarding small dogs</h3>
            <p className="serv_par">
              {" "}
              Our boarding service for small dogs (up to 20 lbs) provides a cozy
              and caring environment for your pet while you're away. With 24/7
              care, plenty of playtime, and comfortable sleeping arrangements,
              we make sure your pet feels at home. Our rates start at $50 per
              night, offering both short-term and long-term stays.
            </p>
          </div>
        </div>
        <div className="serv_card serv_card_4">
          <img src={big} alt="Boarding big dogs" className="service_picture" />
          <div className="serv_text_block">
            <h3 className="serv_title">Boarding big dogs</h3>
            <p className="serv_par">
              {" "}
              Specializing in boarding for big dogs (more than 20 lbs), our
              facility is equipped to handle your large furry friends with the
              care and space they need. From spacious outdoor play areas to
              individual care plans, we provide a comfortable and stimulating
              environment. Pricing ranges from $60 to $75 per night, tailored to
              meet the specific needs of your pet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
