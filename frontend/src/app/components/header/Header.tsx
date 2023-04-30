import React from 'react';
import { useBreakpoint } from '../../../core/hooks/useBreakpoint.hook';
import { MobileHeader } from './MobileHeader/MobileHeader';
import { DesktopHeader } from './DesktopHeader/DesktopHeader';
import { useBrewAppContext } from '../../../context/state';

export const Header: React.FC = () => {
    const { isMobile } = useBreakpoint();
    const { header: headerContext } = useBrewAppContext();

    const changeSelectedIndex = (index: number) => {
        headerContext.setHeaderSelectedIndex(index);
    }

    return (
        isMobile ?
            <MobileHeader
                selectedIndex={headerContext.headerSelectedIndex}
                changeSelectedIndex={changeSelectedIndex}
            />
            : <DesktopHeader
                selectedIndex={headerContext.headerSelectedIndex}
                changeSelectedIndex={changeSelectedIndex}
            />
    );
};
