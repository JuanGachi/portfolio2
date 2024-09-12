import { Layout } from "../../layouts";
import { Separator } from "../../components/Shared";
import { ChangeFullNameForm } from "../../components/Account";

export function ChangeFullNameScreen() {
  return (
    <Layout.Basic>
      <Separator height={20} />
      <ChangeFullNameForm />
    </Layout.Basic>
  );
}
