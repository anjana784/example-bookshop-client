import { FC, Fragment, useState } from "react";
import AppInput from "../AppInput";
import AppButton from "../AppButton";
import { updateCustomer } from "@/lib/customer";
import { CustomerResponse, Customer } from "@/utils/types";
import { useStore } from "@/Store";
import { toast } from "react-toastify";
import { successIcon } from "../ToastifyIcons";
import { mutate } from "swr";

interface Props {
  customer: CustomerResponse;
}

const EditBook: FC<Props> = ({ customer }) => {
  const { popupState, setPopupState } = useStore((state) => state);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<String | null>(null);

  const [customerState, setCustomerState] = useState<Customer>({
    companyName: customer.companyName,
    email: customer.email,
    address: customer.address,
    phone: customer.phone,
  });

  const clickHandler = async () => {
    setLoading(true);
    const response = await updateCustomer(customer._id, {
      companyName: customerState.companyName,
      email: customerState.email,
      address: customerState.address,
      phone: customerState.phone,
    });
    setLoading(false);
    if (response) {
      if (response.status === "error") {
        setError(response.message);
      } else {
        mutate("/api/customer");
        setPopupState({ ...popupState, isOpen: false });
        toast.success("Customer updated successfully", {
          icon: successIcon,
        });
      }
    }
  };

  return (
    <Fragment>
      <AppInput
        placeholder="Company name"
        fullWidth
        className="my-4"
        onChange={(e) =>
          setCustomerState({ ...customerState, companyName: e.target.value })
        }
        value={customerState.companyName}
      />
      <AppInput
        placeholder="Email"
        fullWidth
        className="my-4"
        onChange={(e) =>
          setCustomerState({ ...customerState, email: e.target.value })
        }
        value={customerState.email}
      />
      <AppInput
        placeholder="Address"
        fullWidth
        className="my-4"
        onChange={(e) =>
          setCustomerState({ ...customerState, address: e.target.value })
        }
        value={customerState.address}
      />
      <AppInput
        placeholder="Phone"
        fullWidth
        className="my-4"
        onChange={(e) =>
          setCustomerState({ ...customerState, phone: e.target.value })
        }
        value={customerState.phone}
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className="absolute bottom-0 right-0">
        <AppButton
          title="Update"
          onClick={clickHandler}
          className="w-full"
          loading={loading}
        />
      </div>
    </Fragment>
  );
};

export default EditBook;
