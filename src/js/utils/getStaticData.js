import NotificationManager from "react-notifications/lib/NotificationManager";

export default async (fileName, errorText, errorTitle) => {
    // get location origin to fetch whether dev or prod
    const origin = process.env.NODE_ENV == 'development'
        ? ''
        : `${window.location.origin}`;

    try {
        // get file, but append random param to prevent browser caching
        const response = await fetch(`${origin}/${fileName}?nocache=${new Date().getTime()}`);
        const data = await response.json();
        return data;
    } catch (e) {
        NotificationManager.error(`${errorTitle}`, `${errorText}`, 2000);
        return false;
    }
}