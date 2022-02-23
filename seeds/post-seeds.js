const { Post } = require('../models');

const postData = [
    {
        title: "Slack",
        post_content: "Slack suffered an outage for a few hours yesterday, allowing us to be reacquainted with our old friend GChat.",
        user_id: 3
    },
    {
        title: "US home prices",
        post_content: "US home prices grew at the fastest rate on record last year—up 18.8%.",
        user_id: 1
    },
    {
        title: "Volkswagen",
        post_content: "Volkswagen is prepping an IPO for Porsche that could value the brand at up to $96 billion.",
        user_id: 2

    },
    {
        title: "Sony",
        post_content: "Sony unveiled the design of its next-gen PlayStation VR2 headset",
        user_id: 5
    },
    {
        title: "Your investments sustainability (ESG)",
        post_content: "Investing long term to reach your financial goals can be a fantastic idea. Doing so while supporting environmental, social, and governance (ESG) issues? Even better. The thing is, manually building a diversified portfolio with companies operating sustainably can feel overwhelming.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

