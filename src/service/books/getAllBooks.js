module.exports = async ({
  repository, config, filters
}) => {
  const query = {}

  if (filters) {
    if (filters.author) {
      query.author = new RegExp(filters.author, 'i')
    }
    if (filters.title) {
      query.title = new RegExp(filters.title, 'i')
    }
    if (filters.year) {
      query.year = new RegExp(filters.year, 'i')
    }
  }

  const responseDB = await repository.listAllDB({
    db: config.dbName, collection: config.dbBooksCollection, query
  })
  return responseDB
}