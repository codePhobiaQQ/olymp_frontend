import Button from "@shared/ui/Button/Button.tsx";
import cn from "classnames";
import cls from "./SwitcherBtn.module.scss";

type sizeType = 'sm' | 'm' | 'l'

interface SwitcherBtnProps {
  text?: string
  size?: sizeType
  onClick?: () => void
}

const sizeTypeClassMapper: Record<sizeType, string> = {
  'sm': cls.sm,
  'm': cls.m,
  'l': cls.l,
}

export const SwitcherBtn = (props: SwitcherBtnProps) => {
  const { text = '', size = 'm', onClick } = props

  return <Button onClick={onClick} variant="only_text" className={cn(cls.SwitcherBtn, sizeTypeClassMapper[size])}>{text}</Button>;
};