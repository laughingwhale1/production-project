import React, { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children?: ReactNode; // то что мы телепортируем
    element?: HTMLElement; // то, куда мы телепортируем
}

export const Portal: FC<PortalProps> = (props) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
