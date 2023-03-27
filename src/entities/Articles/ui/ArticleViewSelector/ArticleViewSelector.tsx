import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list.svg';
import TileIcon from 'shared/assets/icons/tile.svg';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../models/types/article';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView,
  onViewClick?: (view: ArticleView) => void;
}
const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
  {
    view: ArticleView.TILE,
    icon: TileIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;
  const { t } = useTranslation();

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType, index) => (
        <Button
          theme={ButtonVariant.CLEAR}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames(cls.icon, { [cls.selected]: viewType.view === view }, [])}
          />
        </Button>
      ))}
    </div>
  );
});
