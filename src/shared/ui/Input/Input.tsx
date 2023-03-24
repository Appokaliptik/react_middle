import { classNames, Mods } from 'shared/libs/classNames/classNames';
import {
  ChangeEvent, InputHTMLAttributes, memo,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value = '',
    onChange,
    type = 'text',
    placeholder,
    readonly,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  const mods: Mods = {
    [cls.readonly]: readonly,
  };
  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      <div>{placeholder}</div>
      <input
        type={type}
        onChange={onChangeHandler}
        className={cls.Input}
        placeholder={placeholder}
        value={value}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
