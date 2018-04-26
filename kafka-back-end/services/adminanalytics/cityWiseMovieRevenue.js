var moment = require('moment');
var Sequelize = require('sequelize');
const db = require('../../db/mysql');


function handle_request(msg, callback) {
    console.log(`Incoming message: ${JSON.stringify(msg)}`);
    let condition = {};
    let query = "select halls.city,SUM(total_price) as average from billings,movie_schedules,movies,halls where " +
        "movies.id = movie_schedules.movie_id AND " +
        "billings.movie_schedule_id = movie_schedules.id AND " +
        "movie_schedules.hall_id = halls.id";
    if (msg.movie_id) {
        query = query + " AND movie_schedules.movie_id = " + msg.movie_id
    }
    query = query + " GROUP BY halls.city order by total_price desc;";
    console.log(`Incoming Query message:`, query);
    db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT })
        .then((cityWiseMovieRevenueList) => {
            callback(null, cityWiseMovieRevenueList)
        });
}

module.exports = {
    handle_request
}