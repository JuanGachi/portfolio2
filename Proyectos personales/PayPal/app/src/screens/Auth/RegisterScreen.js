import { Layout } from "../../layouts";
import { RegisterForm } from "../../components/Auth";

export function RegisterScreen() {
  return (
    <Layout.Auth>
      <RegisterForm />
    </Layout.Auth>
  );
}
