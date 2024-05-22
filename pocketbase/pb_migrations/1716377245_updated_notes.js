/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5wnpf1rhshg0ysz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sueey8ka",
    "name": "tools",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5wnpf1rhshg0ysz")

  // remove
  collection.schema.removeField("sueey8ka")

  return dao.saveCollection(collection)
})
