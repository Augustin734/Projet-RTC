import mongoose from 'mongoose';

const { Schema } = mongoose;

const messageSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId, // <-- ici
    required: true,
    ref: 'User', // référence au modèle User
  },
  channelId: {
    type: String,
    required: true,
    ref: 'Channel',
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
});

const Message = mongoose.model('Message', messageSchema);

export const createMessageService = async (userId, channelId, content) => {
  const newMessage = await Message.create({
    userId,
    channelId,
    content
  });

  return newMessage;
};

export const getMessagesByChannelService = async (channelId) => {
  const messages = await Message
    .find({ channelId })
    .sort({ createdAt: 1 })
    .populate('userId', 'first_name name'); // <-- populate ici

  return messages;
};

export const deleteMessageService = async (messageId) => {
  const deletedMessage = await Message.findByIdAndDelete(messageId);

  if (!deletedMessage) throw new Error("Message non trouvé");

  return deletedMessage;
};