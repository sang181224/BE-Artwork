function requireAdmin(req, res, next) {
    const ADMIN_ROLE_ID = 1; // Giả sử ID của quyền Admin trong DB là 1

    if (req.user && req.user.roleId === ADMIN_ROLE_ID) {
        next();
        
    } else {
        res.status(403).json({ message: "Forbidden: Yêu cầu quyền Admin." });
    }
}
module.exports = requireAdmin;