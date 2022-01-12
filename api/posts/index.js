const { CosmosDB } = require("../shared_modules")

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const id = context.bindingData.id;
    const db = new CosmosDB();

    let posts = null
    if (id !== undefined) {
        posts = await db.getPostById(id)
    }
    else {
        posts = await db.getPosts();
    }

    context.res = {
        body: posts
    };
}