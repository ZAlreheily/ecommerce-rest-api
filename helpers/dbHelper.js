const idFormatError = () => {
    const err = new Error("ID is not valid.");
    err.status = 400;
    return err;
};

const productNotFoundError = () => {
    const err = new Error("Product with that ID is not found.");
    err.status = 404;
    return err;
}

module.exports = { idFormatError, productNotFoundError };