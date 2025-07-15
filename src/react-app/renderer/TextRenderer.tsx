export type TextRendererProps = {
  text: string;
}

export function TextRenderer({ text }: TextRendererProps) {
  return <span>{text}</span>
}