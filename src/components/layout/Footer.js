import React from "react";
import Logo from "../Logo";
import configConstants from "../../config/constants";

const { COMPANY_LINKS, COMPANY_SOCIALS, COMPANY_DOCS } = configConstants;

const Footer = () => {
    return (
        <footer className="footer-container">
            <Logo type="footer" />
            <section className="footer-wrapper">
                <section className="footer-links">
                    {COMPANY_LINKS.map(({ links, name }) => (
                        <ul key={name}>
                            <li>
                                <h4>{name}</h4>
                            </li>
                            {links.map(({ link, name }) => (
                                <li key={name} className="links">
                                    <a href={link}>{name}</a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </section>

                <section className="footer-socials">
                    <h4>{COMPANY_DOCS.email}</h4>
                    <div className="footer-socials-container">
                        {COMPANY_SOCIALS.map(({ link, name }) => (
                            <span key={name} className="footer-social-links">
                                <a href={link}>{name}</a>
                            </span>
                        ))}
                    </div>
                </section>
            </section>
        </footer>
    );
};

export default Footer;
