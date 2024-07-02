/// <reference path="../pb_data/types.d.ts" />

const defaultUsers = [
    { username: "radwan", name: "Mariam Radwan", email: "if23b023@technikum-wien.at" },
    { username: "marco", name: "Marco Auenhammer", email: "if23b501@technikum-wien.at" },
    { username: "hagar", name: "Hagar Ahmed", email: "if23b004@technikum-wien.at" },
    { username: "imad", name: "Imad Taher", email: "if22b016@technikum-wien.at" },
    { username: "nick", name: "Nick Müllner", email: "if23b503@technikum-wien.at" },
    { username: "demooo", name: "Demo", email: "demo@example.com" },
]

migrate((db) => {
    const dao = new Dao(db);

    const collection = dao.findCollectionByNameOrId("users")

    defaultUsers.forEach(user => {
        const record = new Record(collection)
        record.setUsername(user.username)
        if (user.username === "demo") {
            record.setPassword("demo1234")
        } else {
            record.setPassword("1234567890")
        }
        record.set("name", user.name)
        record.set("email", user.email)
        dao.saveRecord(record)
    });

}, (db) => { // optional revert
    const dao = new Dao(db);

    try {
        defaultUsers.forEach(user => {
            const record = dao.findAuthRecordByEmail("users", user.email)
            dao.deleteRecord(record)
        });

    } catch (_) { /* most likely already deleted */ }
})