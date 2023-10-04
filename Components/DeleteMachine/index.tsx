import { FC, Fragment, useState } from "react";
import AppInput from "../AppInput";
import AppButton from "../AppButton";
import { deleteMachine } from "@/lib/machine";
import { MachineResponse, Machine } from "@/utils/types";
import { useStore } from "@/Store";
import { toast } from "react-toastify";
import { successIcon } from "../ToastifyIcons";
import { mutate } from "swr";

interface Props {
  machine: MachineResponse;
}

const DeleteMachine: FC<Props> = ({ machine }) => {
  const { popupState, setPopupState } = useStore((state) => state);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<String | null>(null);

  const [machineState, setMachineState] = useState<Machine>({
    name: machine.name,
    platePrice: machine.platePrice,
    makeReadyPrice: machine.makeReadyPrice,
    description: machine.description,
  });

  const clickHandler = async () => {
    setLoading(true);
    const response = await deleteMachine(machine._id);
    setLoading(false);
    if (response) {
      if (response.status === "error") {
        setError(response.message);
      } else {
        mutate("/api/machine");
        setPopupState({ ...popupState, isOpen: false });
        toast.success("Machine deleted successfully", {
          icon: successIcon,
        });
      }
    }
  };

  return (
    <Fragment>
      <AppInput
        placeholder="Machine Name"
        fullWidth
        className="my-4"
        onChange={(e) =>
          setMachineState({ ...machineState, name: e.traget.value })
        }
        value={machineState.name}
      />
      <AppInput
        placeholder="Plate Price"
        fullWidth
        className="my-4"
        onChange={(e) =>
          setMachineState({ ...machineState, platePrice: e.target.value })
        }
        value={machineState.platePrice.toString()}
      />
      <AppInput
        placeholder="Make Ready Price"
        fullWidth
        className="my-4"
        onChange={(e) =>
          setMachineState({ ...machineState, makeReadyPrice: e.target.value })
        }
        value={machineState.makeReadyPrice.toString()}
      />
      <AppInput
        placeholder="Description"
        fullWidth
        className="my-4"
        onChange={(e) =>
          setMachineState({ ...machineState, description: e.target.value })
        }
        value={machineState.description}
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className="absolute bottom-0 right-0">
        <AppButton
          title="Delete"
          onClick={clickHandler}
          className="w-full"
          loading={loading}
        />
      </div>
    </Fragment>
  );
};

export default DeleteMachine;
