import { ChangeEvent, useMemo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './Select.module.scss';
import { HStack } from '../Stack';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    onChange,
    value,
    readonly,
  } = props;

  const optionsList = useMemo(() => options?.map((item) => (
    <option
      className={cls.option}
      value={item.value}
      key={item.value}
    >
      {item.content}

    </option>
  )), [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
    }
  };

  return (
    <HStack gap="8">
      {label && (
        <div>
          {`${label}`}
        </div>
      )}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>

    </HStack>
  );
};
