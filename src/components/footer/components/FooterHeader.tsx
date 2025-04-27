import Image from "next/image";
import Link from "next/link";

import { FOOTER } from "@/constants/footer";
import { PATHNAMES } from "@/constants/global";

import logo from "../../../../public/footer/footerLogo.svg";
import whatsAppIcon from "../../../../public/footer/whatsapp.svg";
import phoneIcon from "../../../../public/footer/phone.svg";

export const FooterHeader = () => {
  return (
    <div className="footer_header">
      <div className="logo_container">
        <Link href={PATHNAMES.HOME}>
          <Image src={logo} width={279} height={35} alt="Logo" />
        </Link>
        <p className="logo_text">{FOOTER.LOGO_TEXT}</p>
      </div>
      <div className="footer_contact_us">
        <div className="contact_info_section">
          <Image src={whatsAppIcon} width={32} height={32} alt="WhatsApp" />
          <div className="contact_information">
            <p className="contact_name">{FOOTER.CHAT_WITH_US}</p>
            <a href="#" className="contact_link">
              {FOOTER.VIA_WHATSAPP}
            </a>
          </div>
        </div>
        <div className="contact_info_section">
          <Image src={phoneIcon} width={32} height={32} alt="Phone" />
          <div className="contact_information">
            <p className="contact_name">{FOOTER.CALL_US}</p>
            <a href={`tel:${FOOTER.PHONE_NUMBER}`} className="contact_link">
              {FOOTER.PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
