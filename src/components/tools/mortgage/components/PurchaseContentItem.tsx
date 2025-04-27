import { FC } from "react";

interface IPurchase {
  title: string;
  value: string;
}

export const PurchaseContentItem: FC<IPurchase> = ({ title, value }) => {
  return (
    <div className="purchase_content_item">
      <p className="item_text">{title}</p>
      <p className="item_text">{value}</p>
    </div>
  );
};
