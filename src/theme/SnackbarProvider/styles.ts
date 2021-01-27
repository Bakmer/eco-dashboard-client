import styled from "styled-components";
import { SnackbarProvider } from "notistack";

export default styled(SnackbarProvider)`
  #notistack-snackbar {
    line-height: initial;
  }

  .SnackbarItem-action-26 {
    .MuiSvgIcon-root {
      border-radius: 50%;
      padding: 3px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;
