export interface Customer {
  _id?: string;
  __v?: number;
  companyName: string;
  address: string;
  phone: string;
  email: string;
}

export interface CustomerResponse {
  _id: string;
  __v: number;
  companyName: string;
  address: string;
  phone: string;
  email: string;
}

export interface Machine {
  name: string;
  description: string;
  platePrice: number;
  makeReadyPrice: number;
}

export interface MachineResponse {
  _id: string;
  __v: number;
  name: string;
  description: string;
  platePrice: number;
  makeReadyPrice: number;
}

export interface Product {
  type: string;
  varient: string;
  unitPrice: number;
  manufacturer: string;
  size: {
    width: number;
    height: number;
  };
}

export interface PaperVarient {
  _id?: string;
  varient: string;
  unitPrice: number;
  size: {
    width: number;
    height: number;
  };
}

export interface Paper {
  _id?: string;
  __v?: number;
  type: string;
  varients: PaperVarient[];
  manufacturer: string;
}

export interface ProductResponse {
  _id: string;
  __v: number;
  type: string;
  varient: string;
  unitPrice: number;
  manufacturer: string;
  size: {
    width: number;
    height: number;
  };
}

export interface JobOption {
  name: string;
  price?: number;
  wastage?: number;
  total?: number;
  type?: {
    name: string;
    price: number;
  };
  pricePerColor?: number;
  pricePerInch?: number;
}

export interface JobOptionResponse {
  _id: string;
  __v: number;
  name: string;
  price?: number;
  wastage?: number;
  total?: number;
  type?: {
    name: string;
    price: number;
  };
  pricePerColor: number;
  pricePerInch: number;
}

export interface TableColumn {
  name: string;
}

export interface PopupState {
  isOpen: boolean;
  title: string;
  children: React.ReactNode | null;
}

export interface Action {
  name: string;
  action: () => void;
}

export interface ActionPopupState {
  isOpen: boolean;
  actions: Action[] | null;
  position: {
    x: number;
    y: number;
  } | null;
}

export interface QuotationGenerationProgress {
  jobOptionSelection: "completed" | "incompleted";
}

export interface Quotation {
  customer: Customer;
  description: string;
  quontity: number;
  unitPriceInUSD: number;
  USDRate: number;
  createdAt: Date;
}
export interface QuotationCalculationSheet {
  jobOptions: JobOption[];
  customer?: Customer;
  machineType?: MachineResponse;
  paper?: Product;
  jobSize?: number;
  numberOfColors?: number;
  numberOfUps?: number;
  createdAt?: Date;
  quantity?: number;
  costOfPrinting?: number;
  margin?: number;
  total?: number;
  ourUnitPrice?: number;
  commision?: number;
  customerUnitPrice?: number;
  priceInUSD?: number;
  quotation?: Quotation;
  progress: QuotationGenerationProgress;
}
