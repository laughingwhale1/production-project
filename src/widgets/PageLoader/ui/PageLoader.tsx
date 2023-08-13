import React, { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Loader } from 'shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(cls.PageLoader)}>
        <Loader />
    </div>
);
