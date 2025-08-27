type Props = {
  children: React.ReactNode;
}

export function ButtonRenderer({ children }: Props){
  return <button type="button">{children}</button>
}