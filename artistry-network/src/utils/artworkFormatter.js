
function formatArtwork(artwork, loggedInUserId) {
    // Tách mảng reactions và các thông tin còn lại
    const { reactions, ...restOfArt } = artwork;    
    const isOwner = loggedInUserId === artwork.authorId;
    return {
        ...restOfArt,
        // Tạo ra trường userReaction đơn giản
        userReaction: reactions.length > 0 ? reactions[0].reactionType.name : null,
        isOwner: isOwner
    };
}

module.exports = {
    formatArtwork,
};