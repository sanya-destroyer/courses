import {createContext, ReactNode, useContext, useState} from "react";

import {IAlert} from "../components/Alert/model/alert.model";

interface IAlertContext {
    getAlerts: () => IAlert[];
    removeAlert: (id: number) => void;
    addAlert: (message: string) => void;
}

interface AlertContextProviderProps {
    children: ReactNode;
}

const AlertContext = createContext({} as IAlertContext);

export function useAlert() {
    return useContext(AlertContext);
}

export default function AlertProvider({children}: AlertContextProviderProps) {
    const [alerts, setAlerts] = useState<IAlert[]>([]);

    const getAlerts = () => {
        return alerts;
    }

    const addAlert = (message: string) => {
        setAlerts((prevState) =>
            [...prevState,
                {
                    id: new Date().getTime() + Math.random() * 1000,
                    message
                }
            ]);
    }

    const removeAlert = (id: number) => {
        setAlerts(prevState =>
            prevState.filter((alert) => alert.id !== id)
        )
    }

    return (
        <AlertContext.Provider value={{
            getAlerts,
            addAlert,
            removeAlert
        }}>
            {children}
        </AlertContext.Provider>
    )
}
