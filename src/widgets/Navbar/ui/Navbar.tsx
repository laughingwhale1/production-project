import React, { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={classNames(cls.Navbar)}>
        <div className={classNames(cls.links)}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={classNames(cls.mainLink)}>Main page</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About page</AppLink>
        </div>

    </div>
);
