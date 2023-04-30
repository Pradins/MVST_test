import React, { useState } from 'react';

export type Devices = {
    isMobile: boolean;
    isDesktop: boolean;
};

export enum Breakpoints {
    MAX_MOBILE = 480,
    MIN_DESKTOP = 1025
}

export const useBreakpoint = (): Devices => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    const deviceHandler = (): void => {
        const currentWindowWidth = window.innerWidth;

        setIsMobile(currentWindowWidth <= Breakpoints.MAX_MOBILE);
        setIsDesktop(currentWindowWidth >= Breakpoints.MIN_DESKTOP);
    };

    React.useEffect(() => {
        deviceHandler();
        window.addEventListener('resize', deviceHandler);
        return (): void => window.removeEventListener('resize', deviceHandler);
    }, []);

    return {
        isMobile,
        isDesktop
    };
};

//
// import { useEffect, useState } from 'react';
//
// type WindowDimensions = {
//     width: number | undefined;
//     height: number | undefined;
// };
//
// const useWindowDimensions = (): WindowDimensions => {
//     const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
//         width: undefined,
//         height: undefined,
//     });
//
//     useEffect(() => {
//         function handleResize(): void {
//             setWindowDimensions({
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//             });
//         }
//         handleResize();
//         window.addEventListener('resize', handleResize);
//         return (): void => window.removeEventListener('resize', handleResize);
//     }, []);
//
//     return windowDimensions;
// };
//
// export default useWindowDimensions;
