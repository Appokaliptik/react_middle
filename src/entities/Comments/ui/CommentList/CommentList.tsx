import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentList.module.scss';
import { Comments } from '../../models/types/comments';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comments[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, comments } = props;
  const { t } = useTranslation('articles_details');

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading className={cls.comment} />
        <CommentCard isLoading className={cls.comment} />
        <CommentCard isLoading className={cls.comment} />
      </div>
    );
  }
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            key={comment.id}
            className={cls.comment}
            comments={comment}
          />
        ))
        : <Text text={t('no comments')} />}
    </div>
  );
});
