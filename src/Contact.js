import insta from "./media/Instagram.png";
import facebook from "./media/Facebook.png";
import emai from "./media/email.png";
import phone from "./media/phone.png";
import Workmap from "./media/map (1).png";

export default function Contact() {
  return (
    <div>
      <h2 className="contact_block_title">Contact</h2>
      <div className="contact_block">
        <div className="icons_container">
          <a href="https://www.instagram.com/houseoftailsandpaws?igsh=ZDE1MWVjZGVmZQ==">
            <img src={insta} alt="Instagram" className="icon" />
          </a>
          <a href="">
            <img src={facebook} alt="Facebook" className="icon" />
          </a>
          <a href="mailto:houseoftailsandpaws@gmail.com">
            <img src={emai} alt="Mail" className="icon" />
          </a>
          <a href="tel:+17609125979">
            <img src={phone} alt="Phone number" className="icon" />
          </a>
        </div>
        <div className="map_container">
          <h2 className="map_title">Where we work</h2>
          <img src={Workmap} alt="Map" className="map_pic" />
        </div>
      </div>
    </div>
  );
}
