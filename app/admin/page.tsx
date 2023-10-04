import ContentArea from "@/Components/ContentArea";
import ModuleCard from "@/Components/ModuleCard";
import { FC } from "react";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";

const AdminPage: FC = () => {
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
            name="Machine"
            link="/admin/machine"
          />
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
            name="Paper"
            link="/admin/paper"
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
            name="User"
            link="admin/user"
          />
        </div>
      </div>
    </ContentArea>
  );
};

export default AdminPage;
