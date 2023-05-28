import Notification from "../modules/notification.js";

export const addNotification = async ({ userId, to, message }) => {
    try {
        const notificationData = {
            RecipientId: to,
            SenderId: userId,
            MessageData: message,
        };

        const notification = new Notification(notificationData);

        await notification.save();
        
        return notification;
    } catch (error) {
        console.log(error);
        return undefined;
    }
};