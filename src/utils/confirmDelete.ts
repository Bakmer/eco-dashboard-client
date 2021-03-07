import Swal from "sweetalert2";
import { myTheme } from "../theme/theme";

interface ConfirmDeleteParams {
  confirmText: string;
  successText: string;
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
        return res;
      } catch (error) {
        return console.log(error);
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((res) => {
    if (res.isConfirmed) {
      Swal.fire({
        icon: "success",
        confirmButtonColor: myTheme.palette.primary.main,
        confirmButtonText: `Ok`,
        text: x.successText,
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
    }
  });
};
