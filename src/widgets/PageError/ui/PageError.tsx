import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const onReloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError)}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button
                onClick={onReloadPage}
            >
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
};
