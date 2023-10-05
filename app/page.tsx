import ContentArea from "@/Components/ContentArea";
import { FC } from "react";
import ModuleCard from "@/Components/ModuleCard";
import { BiSolidBookAlt } from "react-icons/bi";

const Home: FC = () => {
  return (
    <ContentArea>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full flex justify-around items-center">
          <ModuleCard
            icon={
              <BiSolidBookAlt
                className={
                  "text-themeText text-6xl border-themeText border-solid border-2 rounded-full p-2"
                }
              />
            }
            description="Click hear to get quick quotation
            or
            Search exciting quotations"
            name="Books"
            link="books"
          />
        </div>
      </div>
    </ContentArea>
  );
};

export default Home;
