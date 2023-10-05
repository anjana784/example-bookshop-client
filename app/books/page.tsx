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
// import useCustomers from "@/Hooks/useCustomers";
import { useStore } from "@/Store";
import AddBook from "@/Components/AddBook";
import EditBook from "@/Components/EditBook";
import DeleteBook from "@/Components/DeleteBook";

const CustomerPage: FC = () => {
  const columns: TableColumn[] = [
    {
      name: "Name",
    },
    {
      name: "Author",
    },
    {
      name: "Genre",
    },
    {
      name: "Price",
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
            children: <EditBook customer={customer} />,
            title: "Edit Book",
          }),
      },
      {
        name: "Delete",
        action: () =>
          setPopupState({
            isOpen: true,
            title: "Delete Book",
            children: <DeleteBook customer={customer} />,
          }),
      },
    ];
  };

  const { setPopupState, setActionPopupState } = useStore((state) => state);

  // const { customers, error, loading } = useCustomers();

  return (
    <ContentArea>
      <div className="w-full h-16 flex justify-between items-center">
        <div>
          <AppButton
            title="Add Book"
            icon={<HiPlusSm />}
            onClick={() =>
              setPopupState({
                isOpen: true,
                title: "Add Book",
                children: <AddBook />,
              })
            }
          />
        </div>
        <div>
          <AppSearch placeholder="Search Book" />
        </div>
      </div>
      <div>
        <AppTable columns={columns}>
          {/* {customers?.map((customer: CustomerResponse, index: number) => (
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
          ))} */}
          <TableRow sx={{ maxHeight: 100 }}>
            <TableCell>Example Name</TableCell>
            <TableCell>Example author</TableCell>
            <TableCell>Example Genre</TableCell>
            <TableCell>Example price</TableCell>
            <TableCell align="center">
              <i
                className="relative"
                // onClick={(e) =>
                //   setActionPopupState({
                //     isOpen: true,
                //     actions: generateActions(customer),
                //     position: {
                //       x: e.clientX,
                //       y: e.clientY,
                //     },
                //   })
                // }
              >
                <BsThreeDotsVertical className="cursor-pointer action hover:bg-themeBackgroundDark transition-all delay-100 text-3xl p-2 rounded-full action" />
              </i>
            </TableCell>
          </TableRow>
        </AppTable>
      </div>
    </ContentArea>
  );
};

export default CustomerPage;
