import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/helpers/classNames";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher";


interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {className} = props;

    const [collapsed, setCollapsed] = useState(false);


    const onToggle = () => {
        setCollapsed(collapsed => !collapsed)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher className={'asdasd'} />
                <LangSwitcher />
            </div>
        </div>
    );
};