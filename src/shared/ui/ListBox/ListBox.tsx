import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import cls from './ListBox.module.scss';
import { HStack } from '../Stack';

export interface ListBoxItem {
  value: string,
  content: string,
  disabled?: boolean
}

export type DropdownDirection = 'top' | 'bottom';

interface ListBoxProps {
  className?: string;
  items: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  readonly?: boolean;
  label?: string;
  direction?: DropdownDirection;
  onChange: (value: string) => void;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: cls.optionsBottom,
  top: cls.optionsTop,
};

export function ListBox(props: ListBoxProps) {
  const {
    className,
    items,
    defaultValue,
    label,
    readonly,
    value,
    onChange,
    direction = 'bottom',
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];
  return (
    <HStack gap="8">
      {label
        && label}
      <HListbox
        as="div"
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListbox.Button
          className={cls.trigger}

        >
          {value ?? defaultValue}
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [cls.active]: active,
                    [cls.disabled]: item.disabled,
                  })}
                >
                  {selected
                    ? (
                      <span className={cls.selected}>
                        {item.content}
                      </span>
                    )
                    : item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
}
