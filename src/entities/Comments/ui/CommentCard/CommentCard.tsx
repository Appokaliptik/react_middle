import { classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/AppRoutes/AppRoutes';
import cls from './CommentCard.module.scss';
import { Comments } from '../../models/types/comments';

interface CommentCardProps {
  className?: string;
  comments?: Comments;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comments, isLoading } = props;
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" className={cls.avatar} />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton className={cls.text} width="100%" height={50} />
      </div>
    );
  }

  if (!comments) {
    return null;
  }
  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comments.user.id}`} className={cls.header}>
        {comments.user.avatar ? <Avatar size={30} src={comments.user.avatar} className={cls.avatar} /> : null}
        <Text title={comments.user.username} />
      </AppLink>
      <Text className={cls.text} text={comments.text} />
    </div>
  );
});
