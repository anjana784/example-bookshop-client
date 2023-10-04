import ContentArea from "@/Components/ContentArea";
import { FC } from "react";
import ModuleCard from "@/Components/ModuleCard";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";

const Home: FC = () => {
  return (
    <ContentArea>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full flex justify-around items-center">
          <ModuleCard
            icon={
              <LiaFileInvoiceSolid
                className={
                  "text-themeText text-6xl border-themeText border-solid border-2 rounded-full p-2"
                }
              />
            }
            description="Click hear to get quick quotation
            or
            Search exciting quotations"
            name="Quotation"
            link="quotation"
          />
          <ModuleCard
            icon={
              <PiUsersLight
                className={
                  "text-themeText text-6xl border-themeText border-solid border-2 rounded-full p-2"
                }
              />
            }
            description="Click hear to edit customers
            or
            Search exiting customers"
            name="Customer"
            link="customer"
          />
        </div>
      </div>
    </ContentArea>
  );
};

export default Home;
