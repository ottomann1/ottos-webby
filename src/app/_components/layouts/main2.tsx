type Props = {
  children: React.ReactNode;
};

export function Main2({ children }: Props) {
  return (
    <main className="max-w-5xl mx-auto flex flex-col rounded drop-shadow-2xl">
      <div className="p-5">{children}</div>
    </main>
  );
}
