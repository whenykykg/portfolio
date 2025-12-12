import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p>Terms & Conditions</p>
                </div>
                <div className="socials">
                    {socialImgs.map((img, i) => (
                        <a
                            className="icon"
                            target="_blank"
                            href={img.url}
                            key={i}
                            rel="noopener noreferrer"
                        >
                            <img src={img.imgPath} alt={`Social media link to ${img.name}`} />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Gian Y. Anday. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;