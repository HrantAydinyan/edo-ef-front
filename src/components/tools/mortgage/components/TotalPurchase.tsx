import { IRightSide } from "@/types/tools";
import { FieldValues } from "react-hook-form";
import { PurchaseContentItem } from "./PurchaseContentItem";

export const TotalPurchase = <T extends FieldValues>({
  watch,
  selectedOption,
}: IRightSide<T>) => {
  const estateAgentFees =
    (Number(watch().purchasePrice) * Number(watch().estateAgentFees)) / 100;
  const notaryFee =
    (Number(watch().purchasePrice) * Number(watch().notaryFee)) / 100;
  const purchaseTax =
    (Number(watch().purchasePrice) * Number(watch().propertyLocation)) / 100;

  const subtotal = estateAgentFees + notaryFee + purchaseTax;
  const total = Number(watch().purchasePrice) + subtotal;

  const downPayment = Number(watch().downPayment);
  const loanAmount = Number(watch().purchasePrice) - downPayment;
  const totalDownAmount = downPayment + subtotal;

  return (
    <div className="total_purchase">
      <div className="total_purchase_title">
        <h3 className="total_purchase_title_text">
          Total purchase costs explained
        </h3>
      </div>
      <div className="total_purchase_content">
        <PurchaseContentItem
          title="Purchase Price"
          value={`€${watch().purchasePrice}`}
        />
        <PurchaseContentItem
          title={`+ Estate agent fees (based on ${watch().estateAgentFees}%)`}
          value={`€${estateAgentFees}`}
        />
        <PurchaseContentItem
          title={`+ Notary fees (based on ${watch().notaryFee}%)`}
          value={`€${notaryFee}`}
        />
        <PurchaseContentItem
          title={`+ Purchase tax (${selectedOption.city} ${
            watch().propertyLocation
          }%)`}
          value={`€${purchaseTax}`}
        />
        <PurchaseContentItem
          title={`= Subtotal purchase fees`}
          value={`€${subtotal}`}
        />
        <PurchaseContentItem title={`Total costs`} value={`€${total}`} />
        <PurchaseContentItem
          title={`- Down payment on purchase price`}
          value={`€${downPayment}`}
        />
        <PurchaseContentItem title={`- Purchase fees`} value={`€${subtotal}`} />
        <PurchaseContentItem title={`Loan amount`} value={`€${loanAmount}`} />
        <PurchaseContentItem
          title={`Total down payment`}
          value={`€${totalDownAmount}`}
        />
      </div>
    </div>
  );
};
