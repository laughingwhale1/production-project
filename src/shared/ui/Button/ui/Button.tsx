import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: string
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        theme,
        onClick,
        className,
        children,
        ...otherProps
    } = props;
    // asd
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [cls[theme]])}
            {...otherProps}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
