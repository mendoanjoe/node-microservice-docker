const mongoose = require('mongoose');

const { String, ObjectId } = mongoose.Schema.Types;

const RefreshTokenSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'users',
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
  createdByIp: {
    type: String,
    required: true,
  },
  revoked: {
    type: Date,
  },
  revokedByIp: {
    type: String,
  },
  replacedByToken: {
    type: String,
  },
},
{
  collection: 'refresh_token',
});

RefreshTokenSchema.virtual('isExpired').get(() => Date.now() >= this.expires);

RefreshTokenSchema.virtual('isActive').get(() => !this.revoked && !this.isExpired);

RefreshTokenSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc, ret) {
    // eslint-disable-next-line no-param-reassign
    delete ret.user;
  },
});

module.exports = mongoose.model('RefreshToken', RefreshTokenSchema);
