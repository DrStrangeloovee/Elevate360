/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rgzvai8jj319pwm",
    "created": "2024-06-11 13:34:21.636Z",
    "updated": "2024-06-11 13:34:21.636Z",
    "name": "calendar_events",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j6euhieh",
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
  const collection = dao.findCollectionByNameOrId("rgzvai8jj319pwm");

  return dao.deleteCollection(collection);
})
