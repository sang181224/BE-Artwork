const jwt = require('jsonwebtoken');

function optionalAuth(req, res, next) {
    const authHeader = req.headers.authorization;

    // Nếu có token, hãy thử xác thực
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, 'sang181224');
            req.user = decoded; // Gắn thông tin user nếu token hợp lệ
            console.log("req user: ", req.user)
        } catch (error) {
            // Nếu token sai, không làm gì cả, cứ coi như là khách
            req.user = null;
        }
    }
    next();
}

module.exports = optionalAuth;