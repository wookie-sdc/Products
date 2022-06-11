const { Pool } = require('pg');

describe('testing postgres', () => {

    let pgPool;

    beforeAll(() => {
        pgPool = new Pool({
          host: process.env.HOST,
          user: process.env.USER,
          port: process.env.DEFAULTPORT,
          password: process.env.PASSWORD,
          database: process.env.DATABASE
        });
    });

    afterAll(async () => {
        await pgPool.end();
    });

    it('should test ', async () => {
        const client = await pgPool.connect();
        try {
            await client.query('BEGIN');

            const { rows } = await client.query('SELECT 1 AS "result"');
            expect(rows[0]["result"]).toBe(1);

            await client.query('ROLLBACK');
        } catch(err) {
          throw err;
        } finally {
            client.release();
        }

    })

});