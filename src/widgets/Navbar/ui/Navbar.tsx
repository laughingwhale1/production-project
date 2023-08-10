import React, {FC} from 'react';
import {classNames} from "shared/lib/helpers/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";


interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar)}>
            <ThemeSwitcher className={'asdasd'} />
            <div className={classNames(cls.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={classNames(cls.mainLink)}>Main page</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About page</AppLink>
            </div>

        </div>
    );
};
