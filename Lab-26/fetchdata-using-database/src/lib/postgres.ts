import {Pool} from "pg";

const pool = new Pool({
  connectionString: "postgresql://neondb_owner:npg_v3TxH1KfbZBe@ep-crimson-meadow-a1jl1y7f-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  ssl: {
    rejectUnauthorized: false,
  },
})

export default pool