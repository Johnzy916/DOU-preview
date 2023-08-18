import NotificationManager from "react-notifications/lib/NotificationManager";

export default async (fileName, errorText, errorTitle) => {

    try {
        // get file, but append random param to prevent browser caching
        const response = await fetch(`${fileName}?nocache=${new Date().getTime()}`);
        const data = await response.json();
        return data;
    } catch (e) {
        NotificationManager.error(`${errorTitle}`, `${errorText}`, 2000);
        return false;
    }
}