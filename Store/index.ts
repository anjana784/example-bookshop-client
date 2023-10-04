import { create } from "zustand";
import {
  ActionPopupState,
  JobOption,
  PopupState,
  QuotationCalculationSheet,
} from "@/utils/types";

interface State {
  // popup state
  popupState: PopupState;

  //action popup state
  actionPopupState: ActionPopupState;

  //quotation generate state
  quotationCalculationSheet: QuotationCalculationSheet;
}

interface Action {
  // popup state
  setPopupState: (newPopUpState: PopupState) => void;

  //action popup state
  setActionPopupState: (state: ActionPopupState) => void;

  //quotation generate state
  addJobOption: (jobOption: JobOption) => void;
  removeJobOption: (jobOption: JobOption) => void;

  //quotation generation progress
  updateJobOptionSelectionProgress: (
    progress: "completed" | "incompleted"
  ) => void;
}

export const useStore = create<State & Action>()((set) => ({
  //popup state
  popupState: {
    isOpen: false,
    title: "",
    children: null,
  },
  setPopupState: (newPopUpState) => set(() => ({ popupState: newPopUpState })),

  //action popup state
  actionPopupState: {
    isOpen: false,
    actions: null,
    position: null,
  },
  setActionPopupState: (state) => set(() => ({ actionPopupState: state })),

  //quotation generation popup state
  quotationCalculationSheet: {
    jobOptions: [],
    progress: {
      jobOptionSelection: "incompleted",
    },
    machineType: undefined, //jobdata
    paper: undefined, //job data
    customer: undefined, //jobdata
    commision: undefined,
    costOfPrinting: undefined,
    createdAt: undefined,
    customerUnitPrice: undefined,
    jobSize: undefined, //jobdata
    margin: undefined,
    numberOfColors: undefined, //jobdata
    numberOfUps: undefined,
    ourUnitPrice: undefined,
    priceInUSD: undefined,
    quantity: undefined,
    quotation: undefined,
    total: undefined,
  },
  addJobOption: (jobOption) =>
    set((state) => ({
      quotationCalculationSheet: {
        ...state.quotationCalculationSheet,
        jobOptions: [...state.quotationCalculationSheet.jobOptions, jobOption],
      },
    })),
  removeJobOption: (jobOption) =>
    set((state) => ({
      quotationCalculationSheet: {
        ...state.quotationCalculationSheet,
        jobOptions: state.quotationCalculationSheet.jobOptions.filter(
          (option) => option.name !== jobOption.name
        ),
      },
    })),

  //quotation generation progress
  updateJobOptionSelectionProgress: (progress) =>
    set((state) => ({
      quotationCalculationSheet: {
        ...state.quotationCalculationSheet,
        progress: {
          ...state.quotationCalculationSheet.progress,
          jobOptionSelection: progress,
        },
      },
    })),
}));
