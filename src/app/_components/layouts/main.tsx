type Props = {
  children: React.ReactNode;
};

export function Main({ children }: Props) {
  return (
    <main className="max-w-5xl mx-auto flex flex-col drop-shadow-2xl">
      <div className="p-8 w-full bg-content text-text drop-shadow-2xl rounded">
      {children}
      </div>
    </main>
  );
}
