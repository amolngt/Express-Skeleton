var table = "product";

function all(db) {
  return new Promise(function(resolve, reject) {
    db.collection(table)
      .find()
      .toArray(function(err, docs) {
        resolve(docs);
      });
  });
}


module.exports = { all };
