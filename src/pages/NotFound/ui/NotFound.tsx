import React, { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound: FC<NotFoundProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFound, {}, [])}>
            {t('Страница не найдена')}
        </div>
    );
};