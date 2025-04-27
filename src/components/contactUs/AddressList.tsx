import { FC } from "react";

interface IAddressList {
  country: string;
  email: string;
  phone: string;
  address: string;
}

export const AddressList: FC<IAddressList> = ({
  country,
  email,
  phone,
  address,
}) => {
  return (
    <div className="contact_us_address">
      <div className="country">{country}</div>
      <div className="address-info">
        <p className="address">{address}</p>
        <a href={`tel:${phone}`} className="address">
          {phone}
        </a>
        <a href={`mailto:${email}`} className="address">
          {email}
        </a>
      </div>
    </div>
  );
};
