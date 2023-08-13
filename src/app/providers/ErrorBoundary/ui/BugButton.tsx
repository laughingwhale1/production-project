import React, { FC, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button } from 'shared/ui/Button';
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

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrowError}
        >
            throw error
        </Button>
    );
};
