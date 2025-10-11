const commentModel = require('../model/commentModel');
const createComment = async (req, res) => {
    const idUser = req.user.userId;
    const idArtwork = parseInt(req.params.id);
    const data = req.body;
    console.log(data);
    if (!data.content || data.content.trim() === '') {
        return res.status(400).json({ error: 'Nội dung không được để trống' })
    }
    if (!data.parentId) {
        const existingComment = await commentModel.findCommentByUser(idUser, idArtwork);
        if (existingComment) {
            return res.status(409).json({ error: 'Bạn chỉ được bình luận 1 lần' })
        }
    }
    const currentUser = await commentModel.findUserCurrent(idUser);
    if (!currentUser) {
        return res.status(404).json({ error: 'User không tồn tại' });
    }
    const dataComment = {
        content: data.content,
        image_user: currentUser.avatarUrl,
        name_user: currentUser.name,
        parentId: data.parentId ? parseInt(data.parentId) : 0,
        authorId: idUser,
        artworkId: idArtwork
    }
    const newComment = await commentModel.createComment(dataComment);
    return res.status(200).json(newComment);
}
const deleteComment = async (req, res) => {
    try {
        const commentId = parseInt(req.params.id);
        const userId = (req.user.userId);
        const comment = await commentModel.findCommentById(commentId);
        if (!comment || comment.authorId !== userId) {
            return res.status(403).json('Không tìm thấy bình luận hoặc người dùng không có quyền xoá');
        }
        await commentModel.removeComment(commentId);
        res.status(200).json({ message: "Xóa bình luận thành công." });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server." });
    }
};
module.exports = {
    createComment,
    deleteComment
}