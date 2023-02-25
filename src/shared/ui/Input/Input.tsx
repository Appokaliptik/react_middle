import { classNames } from 'shared/libs/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string,
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    onChange,
    value,
    placeholder,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <input
      type={type}
      onChange={onChangeHandler}
      className={classNames(cls.Input, {}, [className])}
      value={value}
      placeholder={placeholder}
      {...otherProps}
    />
  );
});
