const db = require('../config/db');

class UsuarioModel {
    static async findAll(callback) {
        db.query('SELECT * FROM usuario', callback);
    }

    static async findById(id, callback) {
        db.query('SELECT * FROM usuario WHERE id = ?', [id], callback);
    }

    static async create(data, callback) {
        db.query('INSERT INTO usuario SET ?', [data], callback);
    }

    static async update(id, data, callback) {
        db.query('UPDATE usuario SET ? WHERE id = ?', [data, id], callback);
    }

    static async delete(id, callback) {
        db.query('DELETE FROM usuario WHERE id = ?', [id], callback);
    }
}

module.exports = UsuarioModel;
