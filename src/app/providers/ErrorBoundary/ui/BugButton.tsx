import React, { FC, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
// import cls from './BugButton.module.scss';

interface BugButtonProps {
    className?: string;
}

// component for error boundary testing
export const BugButton: FC<BugButtonProps> = ({ className }) => {
    const [error, setError] = useState(false);

    const onThrowError = () => {
        setError(true);
    };

    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrowError}
        >
            {t('Кинуть ошибку')}
        </Button>
    );
};
