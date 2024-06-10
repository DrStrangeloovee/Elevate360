/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5wnpf1rhshg0ysz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lw8ynys9",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5wnpf1rhshg0ysz")

  // remove
  collection.schema.removeField("lw8ynys9")

  return dao.saveCollection(collection)
})
