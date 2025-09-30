const jwt = require('jsonwebtoken');
function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized1' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, 'sang181224');
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Error during token verification: ', error);
        return res.status(401).json({ error: 'Unauthorized2' });
    }
}
module.exports = requireAuth;