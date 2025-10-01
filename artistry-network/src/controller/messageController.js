const messageModel = require('../model/messageModel');
const pusher = require('../config/pusher');

// Gửi tin nhắn mới
const sendMessage = async (req, res) => {
    try {
        const senderId = req.user.userId;
        const { receiverId, content } = req.body;

        if (!receiverId || !content) {
            return res.status(400).json({ message: "Thiếu thông tin người nhận hoặc nội dung." });
        }

        const messageData = { senderId, receiverId: parseInt(receiverId), content };
        const newMessage = await messageModel.createMessage(messageData);

        // Trigger Pusher event
        // Sắp xếp ID để đảm bảo tên kênh nhất quán
        const ids = [senderId, parseInt(receiverId)].sort((a, b) => a - b);
        const channelName = `private-chat-${ids[0]}-${ids[1]}`;

        await pusher.trigger(channelName, 'new-message', {
            message: newMessage
        });

        res.status(201).json(newMessage);
    } catch (error) {
        console.error("Lỗi khi gửi tin nhắn:", error);
        res.status(500).json({ message: "Lỗi server." });
    }
};

// Lấy lịch sử cuộc trò chuyện
const getMessages = async (req, res) => {
    try {
        const userId1 = req.user.userId;
        const userId2 = parseInt(req.params.otherUserId);

        const conversation = await messageModel.getConversation(userId1, userId2);
        res.status(200).json(conversation);
    } catch (error) {
        console.error("Lỗi khi lấy lịch sử chat:", error);
        res.status(500).json({ message: "Lỗi server." });
    }
};

// Xác thực cho kênh private của Pusher
const authPusher = async (req, res) => {
    try {
        const socketId = req.body.socket_id;
        const channel = req.body.channel_name;
        const userId = req.user.userId;

        // Logic xác thực: chỉ cho phép user đăng ký kênh mà họ là thành viên
        const channelParts = channel.split('-');
        const isMember = channelParts.includes(userId.toString());

        if (!isMember) {
            return res.status(403).send('Forbidden');
        }

        // For presence channels, you must provide user_info
        const presenceData = {
            user_id: userId.toString(),
            user_info: {
                name: req.user.username, // Lấy username từ token
            },
        };

        const auth = pusher.authorizeChannel(socketId, channel, presenceData);
        res.send(auth);
    } catch (error) {
        console.error("Lỗi khi xác thực Pusher:", error);
        res.status(500).json({ message: "Lỗi server." });
    }
};


module.exports = {
    sendMessage,
    getMessages,
    authPusher,
};
