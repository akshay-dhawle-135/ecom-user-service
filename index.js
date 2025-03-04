const { DataSource } = require('typeorm');

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST, 
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
});

module.exports.handler = async () => {
  try {
    if (!dataSource.isInitialized) {
      await dataSource.initialize();
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Database connected successfully!' }),
    };
  } catch (error) {
    console.error('Database connection error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Database connection failed!', error: error.message }),
    };
  }
};
