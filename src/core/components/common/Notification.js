import {NotificationManager} from "react-notifications";

const DEFAULT_DELAY = 5000;

class Notification {

    static info(msg, title, delay = DEFAULT_DELAY) {
        NotificationManager.info(msg, title, delay);
    }

    static error(msg, title, delay = DEFAULT_DELAY) {
        NotificationManager.error(msg, title, delay);
    }

    static success(msg, title, delay = DEFAULT_DELAY) {
        NotificationManager.success(msg, title, delay);
    }
}

export default Notification;
