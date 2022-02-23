const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 3,
        comment_text: "This is awesome!"
    },
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Awesome! Thanks to everyone who has contributed"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We keep growing...!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very helpful!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;