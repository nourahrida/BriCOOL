import { createServer } from "http";
import { Server } from "socket.io";
import { addNotification } from "../controllers/NotificationController.js";

//socket Server
export default function SocketServer(app) {
    const httpServer = createServer(app);
    const io = new Server(httpServer, {
        cors: {
            origin: [process.env.URL_WEB_SITE],
            credentials: true,
            // methods: ["GET", "POST", "PUT", "DELETE"],
        }
    });

    let onlineUsers = [];

    const addUser = (userId, userSocketId) => {
        !onlineUsers.some((user) => user.userId === userId) && onlineUsers.push({ userId, userSocketId });
        console.log(onlineUsers);
    };

    const removeUser = (userSocketId) => {
        onlineUsers = onlineUsers.filter((user) => user.userSocketId !== userSocketId);
    };

    const getUserSocketId = (userId) => {
        return onlineUsers.find((user) => user.userId === userId);
    };

    io.on("connection", (socket) => {
        //console.log( socket.handshake.query);

        socket.on("newUser", ({ userId }) => {
            //  console.log("add user " + userId);
            addUser(userId, socket.id);
        });

        socket.on("SendMessage", async ({ userId, to, message }) => {
            if (to && userId && message) {
                const from = getUserSocketId(to);
                // console.log( `send to ${rec.userSocketId} from ${userId}`);
                const data = await addNotification({ userId, to, message });
                console.log(data);
                from && data && io.to(from.userSocketId).emit("notif", data);
                
            }
        });

        socket.on('disconnect', (reason) => {
            // console.log(onlineUsers);
            removeUser(socket.id);
            // console.log(`remove user ${socket.id}`);
            // console.log(onlineUsers);
        });

    });
    return httpServer
}