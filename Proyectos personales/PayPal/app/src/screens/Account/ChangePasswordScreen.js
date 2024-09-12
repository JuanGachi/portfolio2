import { Layout } from "../../layouts";
import { Separator } from "../../components/Shared";
import { ChangePasswordForm } from "../../components/Account";

export function ChangePasswordScreen() {
  return (
    <Layout.Basic>
      <Separator height={20} />
      <ChangePasswordForm />
    </Layout.Basic>
  );
}
