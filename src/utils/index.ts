export const responseErrorHandler = (errors: any, toast: any) => {
  for (let i = 0; i < errors.length; i++) {
    const error = errors[i];
    if (error.extensions?.exception.validationErrors) {
      const validationErrors = error.extensions.exception.validationErrors;
      for (let x = 0; x < validationErrors.length; x++) {
        const constraints: string[] = Object.values(
          validationErrors[x].constraints
        );
        for (let y = 0; y < constraints.length; y++) {
          toast(constraints[y], { variant: "warning" });
        }
      }
    } else {
      toast(error.message, { variant: "warning" });
    }
  }
};
