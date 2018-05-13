export const buildUserObject = (user) => {
    const { _id } = user;
    const res = Object.assign({}, user._doc, { id: _id });
    delete res._id;
    delete res.password;
    delete res.__v;
    return res;
};
