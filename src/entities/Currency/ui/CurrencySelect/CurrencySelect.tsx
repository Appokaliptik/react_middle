import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { DropdownDirection } from 'shared/types/ui';
import { Currency } from '../../models/types/Currency';

interface CurrencySelectProps {
  className?: string;
  readonly?: boolean;
  value?: Currency;
  direction?: DropdownDirection,
  onChange?: (value: Currency) => void;

}
const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
    direction,
  } = props;
  const { t } = useTranslation('translation');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      className={classNames('', {}, [className])}
      value={value}
      label={t('currency')}
      onChange={onChangeHandler}
      items={options}
      readonly={readonly}
      direction={direction}
    />
  );
});
