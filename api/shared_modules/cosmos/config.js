const config = {
    endpoint: process.env.COSMOS_URI,
    key: process.env.COSMOS_KEY,
    databaseId: "HobbyApp",
    usersContainerId: "Users",
    postsContainerId: "Posts",
    partitionKey: { kind: "Hash", paths: ["/id"] }
  };
  
module.exports = config;