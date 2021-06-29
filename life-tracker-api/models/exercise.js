const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class Exercise {
  static async addExercise({ user, data }) {
    const query = `
      INSERT INTO exercises(name,category,duration,intensity,user_id) VALUES ($1, $2, $3, $4,(select id from users WHERE users.email = $5)) RETURNING name, category, duration, intensity;
      `;
    const result = await db.query(query, [data.name, data.category, data.duration, data.intensity, user.email]);

    return result.rows[0];
  }
}

module.exports = Exercise;
