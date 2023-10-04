"use client";
import ContentArea from "@/Components/ContentArea";
import { Action, MachineResponse, TableColumn } from "@/utils/types";
import { FC } from "react";
import useMachines from "@/Hooks/useMachines";
import AppButton from "@/Components/AppButton";
import { HiPlusSm } from "react-icons/hi";
import { useStore } from "@/Store";
import AppSearch from "@/Components/AppSearch";
import AppTable from "@/Components/AppTable";
import { TableCell, TableRow } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import EditMachine from "@/Components/EditMachine";
import DeleteMachine from "@/Components/DeleteMachine";
import AddMachine from "@/Components/AddMachine";

const MachinePage: FC = () => {
  const { setPopupState, setActionPopupState } = useStore((state) => state);

  const columns: TableColumn[] = [
    {
      name: "Machine Type",
    },
    {
      name: "Plate Price",
    },
    {
      name: "Make Ready Price",
    },
    {
      name: "Description",
    },
    {
      name: "Actions",
    },
  ];

  const { machines, error, loading } = useMachines();

  const generateActions = (machine: MachineResponse): Action[] => {
    return [
      {
        name: "Edit",
        action: () =>
          setPopupState({
            isOpen: true,
            children: <EditMachine machine={machine} />,
            title: "Edit Machine",
          }),
      },
      {
        name: "Delete",
        action: () =>
          setPopupState({
            isOpen: true,
            title: "Delete Machine",
            children: <DeleteMachine machine={machine} />,
          }),
      },
    ];
  };

  return (
    <ContentArea>
      <div className="w-full h-16 flex justify-between items-center">
        <div>
          <AppButton
            title="Add Machine"
            icon={<HiPlusSm />}
            onClick={() =>
              setPopupState({
                isOpen: true,
                title: "Add Machine",
                children: <AddMachine />,
              })
            }
          />
        </div>
        <div>
          <AppSearch placeholder="Search Machine" />
        </div>
      </div>
      <div>
        <AppTable columns={columns}>
          {machines?.map((machine: MachineResponse, index: number) => (
            <TableRow key={index} sx={{ maxHeight: 100 }}>
              <TableCell>{machine.name}</TableCell>
              <TableCell>{machine.platePrice}</TableCell>
              <TableCell>{machine.makeReadyPrice}</TableCell>
              <TableCell>{machine.description}</TableCell>
              <TableCell align="center">
                <i
                  className="relative"
                  onClick={(e) =>
                    setActionPopupState({
                      isOpen: true,
                      actions: generateActions(machine),
                      position: {
                        x: e.clientX,
                        y: e.clientY,
                      },
                    })
                  }
                >
                  <BsThreeDotsVertical className="cursor-pointer action hover:bg-themeBackgroundDark transition-all delay-100 text-3xl p-2 rounded-full action" />
                </i>
              </TableCell>
            </TableRow>
          ))}
        </AppTable>
      </div>
    </ContentArea>
  );
};

export default MachinePage;
