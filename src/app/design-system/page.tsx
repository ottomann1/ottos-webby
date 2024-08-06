import {
  Main,
  CtaButton,
  PrimaryButton,
  SecondaryButton,
  DarkModeSwitch,
} from "../_components";
export default function DesignSystem() {
  return (
    <Main>
      <div className="flex flex-col margin-top-4 p-5">
        <h1>This is where I show off my components.</h1>
        <CtaButton />
        <PrimaryButton />
        <SecondaryButton />
        <DarkModeSwitch />
      </div>
    </Main>
  );
}
