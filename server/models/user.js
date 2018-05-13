import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import 'mongoose-type-email';

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    files: [{}],
});

userSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();

    const user = this;

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err);
            }

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) {
            return callback(err);
        }

        callback(null, isMatch);
    });
};

const model = mongoose.model('user', userSchema);

export default model;