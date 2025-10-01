type ButtonType = "submit" | "reset" | "button";

export interface IButtonProps {
  children: React.ReactNode;
  variant: string;
  type: ButtonType;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
