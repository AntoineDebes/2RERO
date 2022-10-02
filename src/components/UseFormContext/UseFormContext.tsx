import { useForm, FormProvider } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { ReactFCC } from "src/types/react";

interface UseFormContextProps {}

const UseFormContext: ReactFCC<UseFormContextProps> = ({ children }) => {
  const methods = useForm({
    mode: "all",
    shouldFocusError: true,
    shouldUnregister: true,
  });
  return (
    <FormProvider {...methods}>
      {children} <Outlet />
    </FormProvider>
  );
};

export default UseFormContext;
