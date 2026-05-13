import { createContext } from 'react';

export type AlertContextType = {
        alert: boolean;
        setAlert: React.Dispatch<React.SetStateAction<boolean>>;
        addTitle: string;
        addDetail: string;
}
export const AlertContext = createContext<AlertContextType | null>(null)