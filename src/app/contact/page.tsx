import { ContactUs } from "@/components";

export default function Contact() {
  return (
    <div className="contact_container">
      <ContactUs />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163720.5843738355!2d8.6365638!3d50.121212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%2C%20Germany!5e0!3m2!1sen!2sam!4v1729801672036!5m2!1sen!2sam"
        width="600"
        height="450"
        loading="lazy"
        className="google_map"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
