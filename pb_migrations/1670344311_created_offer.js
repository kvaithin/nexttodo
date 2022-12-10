migrate((db) => {
  const collection = new Collection({
    "id": "eds353h8nqsa5ph",
    "created": "2022-12-06 16:31:51.570Z",
    "updated": "2022-12-06 16:31:51.570Z",
    "name": "offer",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "twpk9cn2",
        "name": "offer_title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qcz8x1mh",
        "name": "offer_desc",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "9yvo6vis",
        "name": "product_name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0aajjq2r",
        "name": "product_img",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "dmycuk3n",
        "name": "offer_highlight",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("eds353h8nqsa5ph");

  return dao.deleteCollection(collection);
})
