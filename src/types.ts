export type Class = string | Record<string, boolean> | (string | Record<string, boolean>)[];

type ButtonType = 'primary' | 'secondary';

type LinkType = ButtonType | 'icon' | 'tag';

type ButtonNativeType = 'button' | 'submit' | 'reset';

export interface IButtonProps {
  nativeType?: ButtonNativeType;
  type?: ButtonType;
  text?: string;
}

export interface ILinkProps {
  type?: LinkType;
  text?: string;
  link?: string;
  isPhone?: boolean;
}

export interface IAnimatedCountProps {
  startValue?: number;
  targetValue: number;
  duration?: number;
  counterText?: string;
  description?: string;
}

export interface IAccordeonItem {
  title: string;
  description: string;
}

export interface ISlide extends IAccordeonItem {
  imageSrc: string;
  imageAlt: string;
}

export interface IAccordeonProps {
  items: IAccordeonItem[];
}

export interface IModalProps {
  isOpen: boolean;
}

type InputType = 'text' | 'tel';

type InpurAutocomplete = 'off' | 'on';

export interface IInputProps {
  label?: string;
  type?: InputType;
  autocomplete?: InpurAutocomplete;
  placeholder?: string;
}