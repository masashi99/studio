export type BoxRendererProps = {
  children: React.ReactNode;
}

export function BoxRenderer({ children }: BoxRendererProps) {
  return <div>{children}</div>
} 