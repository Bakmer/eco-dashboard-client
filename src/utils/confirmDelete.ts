import Swal from "sweetalert2";
import { myTheme } from "../theme/theme";
import messages from "../constants/messages";

const { CONFIRM_DELETE_ERROR } = messages;

interface ConfirmDeleteParams {
  confirmText: string;
  action: Function;
  onSuccess?: Function;
}

export const confirmDelete = (x: ConfirmDeleteParams) => {
  Swal.fire({
    text: x.confirmText,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: myTheme.palette.primary.main,
    cancelButtonColor: myTheme.palette.secondary.light,
    confirmButtonText: "Si, eliminar",
    cancelButtonText: "Cancelar",
    showLoaderOnConfirm: true,
    preConfirm: async () => {
      try {
        const res = await x.action();
        if (res.data) {
          return res;
        } else {
          Swal.showValidationMessage(res.errors[0].message);
        }
      } catch (error) {
        Swal.showValidationMessage(CONFIRM_DELETE_ERROR);
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((res) => {
    if (res.isConfirmed) {
      if (x.onSuccess) {
        return x.onSuccess;
      } else {
        return;
      }
    } else {
      return;
    }
  });
};
