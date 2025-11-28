const axios = require('axios');
const fs = require('fs').promises; // Sử dụng fs.promises để xử lý bất đồng bộ

const HUGGING_FACE_TOKEN = process.env.HUGGING_FACE_TOKEN;
// SỬA LỖI CUỐI CÙNG: Sử dụng URL mới của Hugging Face với tiền tố /hf-inference/models/
// Đây là cấu trúc URL chính xác cho endpoint router mới theo tài liệu.
const IMAGE_MODERATION_API_URL = 'https://router.huggingface.co/hf-inference/models/Falconsai/nsfw_image_detection';
const TEXT_MODERATION_API_URL = 'https://router.huggingface.co/hf-inference/models/unitary/toxic-bert';

/**
 * Phân tích nội dung văn bản sử dụng Hugging Face API.
 * @param {string} text - Nội dung văn bản cần phân tích.
 * @returns {Promise<boolean>} - Trả về true nếu nội dung bị cho là độc hại, ngược lại false.
 */
const moderateText = async (text) => {
    if (!text || text.trim() === '') {
        return false; // Bỏ qua nếu không có text
    }
    try {
        const response = await axios.post(TEXT_MODERATION_API_URL, {
            inputs: text
        }, {
            headers: { 'Authorization': `Bearer ${HUGGING_FACE_TOKEN}` }
        });

        // Dữ liệu trả về có dạng [[{"label": "toxic", "score": 0.9...}, ...]]
        const results = response.data[0];
        console.log('Text moderation response:', results);

        // Tìm nhãn 'toxic' hoặc các nhãn độc hại khác
        const toxicLabel = results.find(label => label.label === 'toxic');

        if (!toxicLabel) {
            return false; // Nếu không có nhãn 'toxic', coi như an toàn
        }

        const toxicityScore = toxicLabel.score;

        // Ngưỡng vi phạm, bạn có thể điều chỉnh trong file .env
        const TOXICITY_THRESHOLD = parseFloat(process.env.TOXICITY_THRESHOLD || '0.8');

        console.log(`Text moderation score: Toxicity=${toxicityScore}`);

        // Nếu điểm số vượt ngưỡng, coi là vi phạm
        if (toxicityScore > TOXICITY_THRESHOLD) {
            return true;
        }

        return false;
    } catch (error) {
        console.error('Lỗi khi gọi Hugging Face Text Moderation API:', error.response ? error.response.data : error.message);
        // Mặc định không chặn nếu API lỗi để tránh chặn nhầm
        return false;
    }
};

/**
 * Phân tích hình ảnh sử dụng Hugging Face API.
 * @param {string} imagePath - Đường dẫn đến file ảnh.
 * @returns {Promise<boolean>} - Trả về true nếu ảnh bị cho là NSFW, ngược lại false.
 */
const moderateImage = async (imagePath) => {
    try {
        const imageData = await fs.readFile(imagePath); // Đọc file bất đồng bộ
        const response = await axios.post(IMAGE_MODERATION_API_URL, imageData, {
            headers: {
                'Authorization': `Bearer ${HUGGING_FACE_TOKEN}`,
                'Content-Type': 'application/octet-stream',
            },
        });

        console.log('Image moderation response:', response.data);

        // Tìm nhãn 'nsfw' và kiểm tra điểm số
        const nsfwLabel = response.data.find(label => label.label === 'nsfw');
        // Ngưỡng vi phạm, bạn có thể điều chỉnh trong file .env
        const NSFW_THRESHOLD = parseFloat(process.env.NSFW_THRESHOLD || '0.8');

        return nsfwLabel && nsfwLabel.score > NSFW_THRESHOLD;
    } catch (error) {
        console.error(`Lỗi khi kiểm duyệt ảnh ${imagePath}:`, error.response ? error.response.data : error.message);
        return false; // Mặc định không chặn nếu API lỗi
    }
};

module.exports = { moderateText, moderateImage };