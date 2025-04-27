import { CONTACT_ADDRESSES } from "@/constants/contactUs";
import { AddressList } from "./AddressList";
import { ContactUsForm } from "./ContactUsForm";

export const ContactUs = () => {
  return (
    <div className="contact_us_section">
      <div className="contact_us_left_side">
        <div className="contact_us_header">
          <h1 className="contact_title">Contact Info</h1>
          <p className="contact_description">
            Lorem ipsum dolor sit amet consectetur. Urna ut sed nisl nibh
            placerat a purus. Suspendisse at nam ante donec feugiat ante libero.
            Felis dui hac arcu massa aenean
          </p>
        </div>
        <div className="contact_addresses">
          {CONTACT_ADDRESSES.map((element) => (
            <AddressList
              key={element.id}
              country={element.country}
              email={element.email}
              phone={element.phone}
              address={element.address}
            />
          ))}
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
};
