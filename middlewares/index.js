const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err.stack) // Logging error ke console untuk debugging

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Terjadi kesalahan pada server',
    })
}

const notFoundMiddleware = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Halaman tidak ditemukan',
    })
}

module.exports = { errorHandlerMiddleware, notFoundMiddleware }