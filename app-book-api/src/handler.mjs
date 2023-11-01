import {
    nanoid
} from 'nanoid';

import books from './books.mjs';

const addBookHandler = (request, h) => {
    const req_body = request.payload;

    if (!req_body.name) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    }

    if (req_body.readPage > req_body.pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    }

    const bookId = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const newBook = {
        id: bookId,
        name: req_body.name,
        year: req_body.year,
        author: req_body.author,
        summary: req_body.summary,
        publisher: req_body.publisher,
        pageCount: req_body.pageCount,
        readPage: req_body.readPage,
        reading: req_body.reading,
        finished: req_body.pageCount === req_body.readPage,
        insertedAt,
        updatedAt,
    };
    books.push(newBook);

    const isSuccess = books.filter((book) => book.id === bookId).length > 0;
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId
            },
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Buku gagal ditambahkan',
    });
    response.code(500);
    return response;
};

const getAllBooksHandler = (request, h) => {
    let filteredBooks = [...books];
    const {
        name,
        reading,
        finished
    } = request.query;

    if (name !== undefined && name.trim().length > 0) {
        filteredBooks = filteredBooks.filter((book) =>
            book.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    const numReading = Number.parseInt(reading, 10);
    if (!Number.isNaN(numReading)) {
        filteredBooks = filteredBooks.filter((book) => book.reading === !!numReading);
    }

    const numFinished = Number.parseInt(finished, 10);
    if (!Number.isNaN(numFinished)) {
        filteredBooks = filteredBooks.filter((book) => book.finished === !!numFinished);
    }

    return {
        status: 'success',
        data: {
            books: filteredBooks.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher,
            })),
        },
    };
};

const getBookByIdHandler = (request, h) => {
    const {
        bookId
    } = request.params;

    const book = books.filter((n) => n.id === bookId)[0];

    if (book !== undefined) {
        return {
            status: 'success',
            data: {
                book,
            },
        };
    }
    const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
    });
    response.code(404);
    return response;
};

const editBookByIdHandler = (request, h) => {
    const {
        bookId
    } = request.params;
    const req_body = request.payload;

    if (!req_body.name) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    }

    if (req_body.readPage > req_body.pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    }

    const updatedAt = new Date().toISOString();

    const index = books.findIndex((book) => book.id === bookId);

    if (index !== -1) {
        books[index] = {
            ...books[index],
            name: req_body.name,
            year: req_body.year,
            author: req_body.author,
            summary: req_body.summary,
            publisher: req_body.publisher,
            pageCount: req_body.pageCount,
            readPage: req_body.readPage,
            reading: req_body.reading,
            updatedAt,
        };
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui',
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
    response.code(404);
    return response;
};

const deleteBookByIdHandler = (request, h) => {
    const {
        bookId
    } = request.params;

    const index = books.findIndex((book) => book.id === bookId);

    if (index !== -1) {
        books.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil dihapus',
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);
    return response;
};

export {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler
};