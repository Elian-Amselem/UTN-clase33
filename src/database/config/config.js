module.exports = {
    "development": {
        "username": "root", //Aca el usuario root, o el nombre que hayan elegido
        "password": "", //Aca va la contraseña de MySQL, en caso que la tenga, sino va vacio "" 
        "database": "movies_db", //Nombre de la base de datos
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
