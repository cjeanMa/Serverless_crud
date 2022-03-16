const AWS = require("aws-sdk")

const deleteTask = async (event) =>{

    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    await dynamoDb.delete({
        TableName: "TaskTable",
        Key: {
            id
        }
    }).promise(); 
    //const taskDeleted = result.
    return ({
        status: 200,
        body: {
            msg: "Task Eliminado"
        }
    })

}

module.exports = {
    deleteTask
}