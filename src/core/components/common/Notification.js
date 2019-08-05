import {NotificationManager} from "react-notifications";

class Notification{

    static info(msg,title){
        NotificationManager.info(msg,title);
    }
    static error(msg,title){
        NotificationManager.error(msg,title);
    }

    static success(msg,title){
        NotificationManager.success(msg,title);
    }
}
export default Notification;