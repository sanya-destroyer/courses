import {IAlert} from '../model/alert.model';
import getAlerts from '../utils/getAlerts';
import {fireEvent, render, screen} from '@testing-library/react';
import getAlertItems from '../utils/getAlerts';

const alertTestId = "alert-element"

const mockedAlerts: IAlert[] = [
    {
        id: 1,
        message: "Alert1"
    },
    {
        id: 2,
        message: "Alert2"
    },
    {
        id: 3,
        message: "Alert3"
    }
]

describe('getAlerts', () => {
    let alerts: IAlert[];
    let mockedCallback = jest.fn(() => console.log('callback worked'));

    beforeEach(() => {
        alerts = [...mockedAlerts];
    })


    it('should render alert elements', () => {
        const alertItems = getAlerts(alerts, mockedCallback);

        render(alertItems as JSX.Element);

        const alertItemsQuery = screen.getAllByTestId(alertTestId);

        expect(alertItemsQuery.length).toBe(mockedAlerts.length);
    });

    it('should return undefined if array is empty', function () {
        alerts = [];

        const alertItems = getAlerts(alerts, mockedCallback);

        expect(alertItems).toBeUndefined();
    });

    it('should remove element on animationend', () => {

        const removeAlert = (id: number) => {
            alerts = alerts.filter((alert) => alert.id !== id );
        };

        const alertItems = getAlertItems(alerts, removeAlert);

        render(alertItems as JSX.Element);

        const alertItemsQuery = screen.getAllByTestId(alertTestId);

        fireEvent.animationEnd(alertItemsQuery[0]);

        expect(alerts.length).toBe(mockedAlerts.length - 1);
    })
});