const isValidEmail = (email) => {
    var mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.match(mailformat)) {
        return true;
    }
    return false;
};

const isValidPassword = (password) => {
    if (password.length >= 8) {
        return true;
    }
    return false;
};

module.exports = { isValidEmail,isValidPassword };