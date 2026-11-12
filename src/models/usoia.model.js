const db = require('../config/db');

class UsoiaModel {
    static async findAll(callback) {
        db.query('SELECT * FROM usoia', callback);
    }

    static async findById(id, callback) {
        db.query('SELECT * FROM usoia WHERE id = ?', [id], callback);
    }

    static async create(data, callback) {
        db.query('INSERT INTO usoia SET ?', [data], callback);
    }

    static async update(id, data, callback) {
        db.query('UPDATE usoia SET ? WHERE id = ?', [data, id], callback);
    }

    static async delete(id, callback) {
        db.query('DELETE FROM usoia WHERE id = ?', [id], callback);
    }
}

module.exports = UsoiaModel;
