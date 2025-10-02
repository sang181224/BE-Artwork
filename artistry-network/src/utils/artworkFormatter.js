// File mới: src/utils/artworkFormatter.js

function formatArtwork(artwork) {
    // Tách mảng reactions và các thông tin còn lại
    const { reactions, ...restOfArt } = artwork;

    return {
        ...restOfArt,
        // Tạo ra trường userReaction đơn giản
        userReaction: reactions.length > 0 ? reactions[0].reactionType.name : null,
    };
}

module.exports = {
    formatArtwork,
};