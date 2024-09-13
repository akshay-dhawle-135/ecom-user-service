module.exports.handler = async (event) => {
  
  console.log('env SSM', process.env.API_KEY);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
