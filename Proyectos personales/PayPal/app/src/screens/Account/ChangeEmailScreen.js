import { Layout } from "../../layouts";
import { Separator } from "../../components/Shared";
import { ChangeEmailForm } from "../../components/Account";

export function ChangeEmailScreen() {
  return (
    <Layout.Basic>
      <Separator height={20} />
      <ChangeEmailForm />
    </Layout.Basic>
  );
}
