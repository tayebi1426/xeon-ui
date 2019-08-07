import {NotificationManager} from "react-notifications";

class Notification{

    static info(msg,title, delay='5000'){
        NotificationManager.info(msg,title, delay);
    }
    static error(msg,title, delay='5000'){
        NotificationManager.error(msg,title, delay);
    }

    static success(msg,title, delay='5000'){
        NotificationManager.success(msg,title, delay);
    }
}
export default Notification;
