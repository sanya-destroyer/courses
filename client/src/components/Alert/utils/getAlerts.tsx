import {IAlert} from '../model/alert.model';
import {Alert} from '../Alert';

const getAlertItems = (alerts: IAlert[], removeAlert: (id: number) => void) => {
    if( !alerts.length ) return;

    return (
        <div className='alerts'>
            {alerts.map((alert) => (
                <Alert
                    key={alert.id}
                    onAnimationEnd={() => removeAlert(alert.id)}
                >
                    {alert.message}
                </Alert>
            ))}
        </div>
    )
}

export default getAlertItems;
