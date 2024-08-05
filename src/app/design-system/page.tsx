import { CtaButton } from "../_components/cta-button";
import { DarkModeSwitch } from "../_components/dark-mode-switch/dark-mode-switch";
import { PrimaryButton } from "../_components/primary-button";
import { SecondaryButton } from "../_components/secondary-button";

export default function DesignSystem(){
  return (<main className="max-w-5xl mx-auto flex flex-col items-center bg-white shadow-lg justify-between p-24">
          <div className="flex flex-col margin-top-4 p-5">
          <h1>This is where I show off my components.</h1>
          <CtaButton/>
          <PrimaryButton/>
          <SecondaryButton/>
          <DarkModeSwitch/>
          </div>

         </main>)
}
