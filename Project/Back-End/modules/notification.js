import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    // NotificationType: { type: mongoose.Schema.Types.ObjectId, ref: 'notificationType'},
    NotificationType: { type: mongoose.Schema.Types.String, required: true, default: "Notif"},
    RecipientId: { type: String, require: true },
    SenderId: { type: String, require: false },
    SendDateTime: { type: Date, require: true, default: Date.now() },
    Read: { type: Boolean, require: true, default: false },
    MessageData: { type: String, require: true }
});



const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;