import Picture from "./media/picture (1).png";
import Checkpic from "./media/logo.png";

export default function About() {
  return (
    <div>
      <div></div>
      <div className="about_container">
        <div className="about_picture_container">
          <img src={Picture} alt="Picture" className="about_picture" />
        </div>
        <div className="about_text_container">
          <h2 className="about_block_title">About me and our company</h2>
          <p className="about_par">
            Our company, located in the heart of Las Vegas, takes pride in
            providing high-quality pet care services for over 10 years. We
            specialize in a personalized approach for each pet, offering a full
            range of services from day care to extended stays.
          </p>
          <p className="about_par">
            Thanks to our professionalism and attention to detail, over 95% of
            our clients return to us. We are proud to be recognized as one of
            the most recommended pet care companies in Las Vegas.
          </p>
          <div className="about_check_container">
            <ul className="check_block">
              <li className="check">
                {" "}
                <img src={Checkpic} alt="Check" className="check_picture" />
                <p>10+ years of pet care.</p>
              </li>
              <li className="check">
                <img src={Checkpic} alt="Check" className="check_picture" />
                <p>Personalized approach to each pet.</p>
              </li>
              <li className="check">
                <img src={Checkpic} alt="Check" className="check_picture" />
                <p>95% of clients become regulars.</p>
              </li>
              <li className="check">
                <img src={Checkpic} alt="Check" className="check_picture" />
                <p>Conveniently located in Las Vegas.</p>
              </li>
              <li className="check">
                <img src={Checkpic} alt="Check" className="check_picture" />
                <p>Among the city's best recommendations.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
