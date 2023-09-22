import SequeLize from 'sequelize';
let conn;

async function connect() {
  if (conn) {
    return conn;
  }

  try {
    conn = new SequeLize("bdName", null, null,{
      dialect: 'sqlite',
      storage: "data/bd.sqlite"
    });
    console.log('Connected');

    await conn.authenticate();
    console.log('Connected successfully');

    const Data = conn.define("Data", {
      id: { type: SequeLize.INTEGER, primaryKey: true, autoIncrement: true },
      Name: SequeLize.STRING,
    });

    await conn.sync({ force: true });

    return Data;
  } catch (error) {
    console.log('Problem with connecting', error);
    throw error;
  }
}

export default connect;