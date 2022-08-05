import * as C from './ResumeItem.styles';

type Props = {
  title: string
  value: number
  color?: string
}

export const ResumeItem = ({title, value, color}: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Value color={color}>R$ {value}</C.Value>
    </C.Container>

  );
}