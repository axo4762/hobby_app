const { CosmosClient } = require("@azure/cosmos");
const config = require("./config");


class CosmosDB {
    constructor() {
        const { endpoint, key, databaseId, usersContainerId, postsContainerId } = config;
        const client = new CosmosClient({ endpoint, key });
        this.database = client.database(databaseId);
        this.usersContainer = this.database.container(usersContainerId);
        this.postsContainer = this.database.container(postsContainerId);
    }

    getUsers = async() => {
        const querySpec = {
            query: `SELECT * from c`
        };
        const { resources: items } = await this.usersContainer.items
            .query(querySpec)
            .fetchAll();

        return items;
    };

    getUserById = async(id) => {
        const querySpec = {
            query: `SELECT * from c where c.id = @id`,
            parameters: [{name: `@id`, value: id.toString()}]
        };
        const { resources: items } = await this.usersContainer.items
            .query(querySpec)
            .fetchAll();
        
        return items[0];
    }

    getPosts = async() => {
        const querySpec = {
            query: `SELECT * from c`
        };
        const { resources: items } = await this.postsContainer.items
            .query(querySpec)
            .fetchAll();

        return items;
    };

    getPostById = async(id) => {
        const querySpec = {
            query: `SELECT * from c where c.id = @id`,
            parameters: [{name: `@id`, value: id.toString()}]
        };
        const { resources: items } = await this.postsContainer.items
            .query(querySpec)
            .fetchAll();
        
        return items[0];
    }
}


module.exports = CosmosDB;