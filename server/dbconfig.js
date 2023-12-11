import sql from 'mssql/msnodesqlv8.js'

const pool = new sql.ConnectionPool({
  database: 'socialMedia',
  server: 'localhost',
  driver: 'msnodesqlv8',
  user:'beily',
  password:'SNgu3512',
  options: {
    trustedConnection: true,
    trustServerCertificate:true,
  }
})
export default pool;
