import React, {FC} from 'react';
import {classNames} from "shared/lib/helpers/classNames";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={ classNames(cls.AppLink, {}, [className, cls[theme]]) }
            {...otherProps}
        >
            {children}
        </Link>
    );
};