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

export interface Book {
  _id?: string;
  __v?: number;
  name: string;
  author: string;
  genre: string;
  price: string;
}
