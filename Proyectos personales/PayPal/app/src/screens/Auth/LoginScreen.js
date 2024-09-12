import { Layout } from "../../layouts";
import { LoginForm } from "../../components/Auth";

export function LoginScreen() {
  return (
    <Layout.Auth>
      <LoginForm />
    </Layout.Auth>
  );
}
