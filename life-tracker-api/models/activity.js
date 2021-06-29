const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class Activity {
  // query for finding the average calories, exercise minutes, and sleep hours
  static async listAvgExercises({ user }) {
    const query = `
      select AVG(duration) AS avg_duration from exercises join users on users.id = exercises.user_id group by users.id having users.email = $1
      `;
    const result = await db.query(query, [user.email]);

    return result.rows[0];
  }
}

module.exports = Activity;

// insert into exercises(name,category,duration,intensity,user_id) VALUES ('run', 'run', 40, 4, (select id from users WHERE users.email = 'de@mo'));

// select AVG(duration) AS avgDuration from exercises join users on users.id = exercises.user_id group by users.id having users.email = 'de@mo';
