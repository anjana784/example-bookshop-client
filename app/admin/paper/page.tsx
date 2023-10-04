"use client";
import ContentArea from "@/Components/ContentArea";
import { Action, Paper, PaperVarient, TableColumn } from "@/utils/types";
import { FC } from "react";
import usePapers from "@/Hooks/usePapers";
import AppButton from "@/Components/AppButton";
import { HiPlusSm } from "react-icons/hi";
import { useStore } from "@/Store";
import AppSearch from "@/Components/AppSearch";
import AppTable from "@/Components/AppTable";
import { TableCell, TableRow } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddPaper from "@/Components/AddPaper";
import ViewPaper from "@/Components/ViewPaper";
import EditPaper from "@/Components/EditPaper";
import DeleteProduct from "@/Components/DeletePaper";

const ProductPage: FC = () => {
  const { setPopupState, setActionPopupState } = useStore((state) => state);

  const columns: TableColumn[] = [
    {
      name: "Paper Type",
    },
    {
      name: "Vairent",
    },
    {
      name: "Unit Price",
    },
    {
      name: "Manufacturer",
    },
    {
      name: "size",
    },
    {
      name: "Actions",
    },
  ];

  const { papers, error, loading } = usePapers();

  const generateActions = (paper: Paper, varient: PaperVarient): Action[] => {
    return [
      {
        name: "View",
        action: () =>
          setPopupState({
            isOpen: true,
            children: <ViewPaper paper={paper} varient={varient} />,
            title: "View Paper",
          }),
      },
      {
        name: "Edit",
        action: () =>
          setPopupState({
            isOpen: true,
            children: <EditPaper paper={paper} varient={varient} />,
            title: "Edit Paper",
          }),
      },
      {
        name: "Delete",
        action: () =>
          setPopupState({
            isOpen: true,
            title: "Delete Product",
            children: <DeleteProduct paper={paper} varient={varient} />,
          }),
      },
    ];
  };

  return (
    <ContentArea>
      <div className="w-full h-16 flex justify-between items-center">
        <div>
          <AppButton
            title="Add Paper"
            icon={<HiPlusSm />}
            onClick={() =>
              setPopupState({
                isOpen: true,
                title: "Add Paper",
                children: <AddPaper />,
              })
            }
          />
        </div>
        <div>
          <AppSearch placeholder="Search Paper" />
        </div>
      </div>
      <div>
        <AppTable columns={columns}>
          {papers?.map((paper: Paper) => {
            return paper.varients.map((paperVarient: PaperVarient) => {
              return (
                <TableRow key={paperVarient._id} sx={{ maxHeight: 100 }}>
                  <TableCell>{paper.type}</TableCell>
                  <TableCell>{paperVarient.varient}</TableCell>
                  <TableCell>{paperVarient.unitPrice}</TableCell>
                  <TableCell>{paper.manufacturer}</TableCell>
                  <TableCell>
                    {paperVarient.size.width} x {paperVarient.size.height}
                  </TableCell>
                  <TableCell align="center">
                    <i
                      className="relative"
                      onClick={(e) => {
                        setActionPopupState({
                          isOpen: true,
                          actions: generateActions(paper, paperVarient),
                          position: {
                            x: e.clientX,
                            y: e.clientY,
                          },
                        });
                      }}
                    >
                      <BsThreeDotsVertical className="cursor-pointer action hover:bg-themeBackgroundDark transition-all delay-100 text-3xl p-2 rounded-full action" />
                    </i>
                  </TableCell>
                </TableRow>
              );
            });
          })}
        </AppTable>
      </div>
    </ContentArea>
  );
};

export default ProductPage;
