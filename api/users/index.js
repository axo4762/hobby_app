const { CosmosDB } = require("../shared_modules")

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const id = context.bindingData.id;
    const db = new CosmosDB();

    let users = null
    if (id !== undefined) {
        users = await db.getUserById(id)
    }
    else {
        users = await db.getUsers();
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: users
    };
}