type Props = {
  text: string;
}

export function TextRenderer({ text }: Props) {
  return <span>{text}</span>
}