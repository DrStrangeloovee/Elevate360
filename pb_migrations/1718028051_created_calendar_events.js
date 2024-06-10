/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mv3iks4ds9pswtf",
    "created": "2024-06-10 14:00:51.039Z",
    "updated": "2024-06-10 14:00:51.039Z",
    "name": "calendar_events",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sv141zj2",
        "name": "events",
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
  const collection = dao.findCollectionByNameOrId("mv3iks4ds9pswtf");

  return dao.deleteCollection(collection);
})
