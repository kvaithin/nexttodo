migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eds353h8nqsa5ph")

  // remove
  collection.schema.removeField("snznbfkv")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eds353h8nqsa5ph")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "snznbfkv",
    "name": "product_tag",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
