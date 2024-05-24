module.exports = (bookData) => {
  if (!bookData) {
    throw {
      status: 400,
      message: 'Inavalid Data'
    }
  }
  if (bookData.title && bookData.title.length === 0) {
    throw {
      status: 400,
      message: 'For create a book it is necessary a title'
    }
  }

  if (bookData.author && bookData.author.length < 3) {
    throw {
      status: 400,
      message: 'The author name name need have 3 more characters'
    }
  }

  if (bookData.year && bookData.year.length === 0) {
    throw {
      status: 400,
      message: 'For create the book its necessary a year'
    }
  }

  const regexYear = /^\d{4}$/

  if (!(regexYear.test(bookData.year))) {
    throw {
      status : 400,
      message: 'Year from books its not valid'
    }
  }

  if (!bookData.publisher || bookData.publisher.length <= 3) {
    throw {
      status: 400,
      message: 'Publisher is not valid'
    }
  }
}