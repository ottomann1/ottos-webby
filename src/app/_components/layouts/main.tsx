type Props = {
  children :React.ReactNode
}

export function Main({
  children,
}: Props ){
  return (
    <main className="max-w-5xl mx-auto flex flex-col shadow-lg">
    {children}
    </main>
  )
}
