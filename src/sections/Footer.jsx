import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a href="/">Thanks for Visiting Me</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a key={img.url} className="icon" target="_blank" href={img.url}>
              <img src={img.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Aritra Karan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
