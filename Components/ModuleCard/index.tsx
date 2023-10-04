import { FC, ReactNode } from "react";
import AppButton from "../AppButton";
import AppLink from "../AppLink";

interface Props {
  icon: ReactNode;
  description: string;
  name: string;
  link: string;
}

const ModuleCard: FC<Props> = ({ icon, description, name, link }) => {
  return (
    <div className="w-[250px] h-[300px] shadow-md shadow-themePrimaryBlue">
      <div className="w-full h-full p-6">
        <div className="w-full h-full">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-full h-2/6 ">
              <div className="w-full h-full flex justify-center items-center">
                {icon}
              </div>
            </div>
            <div className="w-full h-4/6">
              <div className="w-full h-full flex justify-center items-center">
                <p className="text-center text-themeText text-sm">
                  {description}
                </p>
              </div>
            </div>
            <div className="w-full h-2/6 ">
              <div className="w-full h-full flex justify-center items-center">
                <AppLink title={name} link={link} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
