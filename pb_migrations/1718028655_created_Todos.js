/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dfs78eoqg4i8ov6",
    "created": "2024-06-10 14:10:55.086Z",
    "updated": "2024-06-10 14:10:55.086Z",
    "name": "Todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r6sblvlh",
        "name": "Todo",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dfs78eoqg4i8ov6");

  return dao.deleteCollection(collection);
})
