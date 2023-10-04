"use client";
import AppTable from "@/Components/AppTable";
import { Action, CustomerResponse, TableColumn } from "@/utils/types";
import { FC } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ContentArea from "@/Components/ContentArea";
import AppButton from "@/Components/AppButton";
import { HiPlusSm } from "react-icons/hi";
import AppSearch from "@/Components/AppSearch";
import { BsThreeDotsVertical } from "react-icons/bs";
import useCustomers from "@/Hooks/useCustomers";
import { useStore } from "@/Store";
import AddCutomer from "@/Components/AddCustomer";
import EditCutomer from "@/Components/EditCustomer";
import DeleteCutomer from "@/Components/DeleteCustomer";

const CustomerPage: FC = () => {
  const columns: TableColumn[] = [
    {
      name: "Company Name",
    },
    {
      name: "Email",
    },
    {
      name: "Address",
    },
    {
      name: "Phone",
    },
    {
      name: "Actions",
    },
  ];

  const generateActions = (customer: CustomerResponse): Action[] => {
    return [
      {
        name: "Edit",
        action: () =>
          setPopupState({
            isOpen: true,
            children: <EditCutomer customer={customer} />,
            title: "Edit Customer",
          }),
      },
      {
        name: "Delete",
        action: () =>
          setPopupState({
            isOpen: true,
            title: "Delete Cutomer",
            children: <DeleteCutomer customer={customer} />,
          }),
      },
    ];
  };

  const { setPopupState, setActionPopupState } = useStore((state) => state);

  const { customers, error, loading } = useCustomers();

  return (
    <ContentArea>
      <div className="w-full h-16 flex justify-between items-center">
        <div>
          <AppButton
            title="Add Customer"
            icon={<HiPlusSm />}
            onClick={() =>
              setPopupState({
                isOpen: true,
                title: "Add Customer",
                children: <AddCutomer />,
              })
            }
          />
        </div>
        <div>
          <AppSearch placeholder="Search Customer" />
        </div>
      </div>
      <div>
        <AppTable columns={columns}>
          {customers?.map((customer: CustomerResponse, index: number) => (
            <TableRow key={index} sx={{ maxHeight: 100 }}>
              <TableCell>{customer.companyName}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.address}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell align="center">
                <i
                  className="relative"
                  onClick={(e) =>
                    setActionPopupState({
                      isOpen: true,
                      actions: generateActions(customer),
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

export default CustomerPage;
