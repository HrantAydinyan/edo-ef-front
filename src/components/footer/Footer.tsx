import { FOOTER_SERVICES } from "@/constants/footer";
import { FooterHeader } from "./components";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="footer_container">
      <FooterHeader />
      <div className="footer_line"></div>
      <div className="footer_body">
        {FOOTER_SERVICES.map((service) => (
          <div key={service.id} className="service_container">
            <h3 className="service_title">{service.title}</h3>
            <ul className="service_elements_field">
              {service.elements.map((element) => (
                <li key={element.id} className="service_element">
                  <Link href={element.pathname} className="service_link">
                    {element.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer_line"></div>
    </div>
  );
};
