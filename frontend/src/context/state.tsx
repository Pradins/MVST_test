import React, { Dispatch, ReactElement, SetStateAction, useContext, useMemo, useState } from 'react';

export interface BrewAppProviderProps {
    children: React.ReactNode;
}

export type BrewAppContextType = {
    header: {
        headerSelectedIndex: number | null;
        setHeaderSelectedIndex: Dispatch<SetStateAction<number>>;
    }
};

const BrewAppContext = React.createContext<BrewAppContextType>(undefined);

export const useBrewAppContext = (): BrewAppContextType => {
    const context = useContext(BrewAppContext);
    if (context === undefined) throw new Error('useBrewApp must be used within a BrewAppProvider');
    return context;
};

export const BrewAppProvider = ({ children }: BrewAppProviderProps,): ReactElement => {
    const [headerSelectedIndex, setHeaderSelectedIndex] = useState(0);

    const headerState = useMemo(
        () => ({ headerSelectedIndex, setHeaderSelectedIndex }),
        [headerSelectedIndex],
    );

    return (
        <BrewAppContext.Provider
            value={{
                header: headerState,
            }}>
            {children}
        </ BrewAppContext.Provider>
    );
};
