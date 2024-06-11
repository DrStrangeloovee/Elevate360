/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kohcmmu71z7clk7",
    "created": "2024-06-11 14:22:46.869Z",
    "updated": "2024-06-11 14:22:46.869Z",
    "name": "To_do_list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "unqoavbx",
        "name": "Task",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xcych2bn",
        "name": "Reminder",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "qgsn1fro",
        "name": "Deadline",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kohcmmu71z7clk7");

  return dao.deleteCollection(collection);
})
