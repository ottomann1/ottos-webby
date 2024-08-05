import { CtaButton } from "../_components/cta-button";
import { PrimaryButton } from "../_components/primary-button";
import { SecondaryButton } from "../_components/secondary-button";

export default function DesignSystem(){
  return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>This is where I show off my components.</h1>
          <CtaButton/>
          <PrimaryButton/>
          <SecondaryButton/>

         </main>)
}
