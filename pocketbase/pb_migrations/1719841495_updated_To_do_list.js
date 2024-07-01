/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kohcmmu71z7clk7")

  collection.name = "todos"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kohcmmu71z7clk7")

  collection.name = "To_do_list"

  return dao.saveCollection(collection)
})
