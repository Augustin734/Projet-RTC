import { createMessageService, getMessagesByChannelService, deleteMessageService } from '../Models/MessageModel.js';

export const createMessage = async (req, res, next) => {
  try {
    const { channelId, content } = req.body;
    const userId = req.user.id;

    const newMessage = await createMessageService(userId, channelId, content);

    res.status(201).json({
      message: "Message créé avec succès",
      data: newMessage
    });
  } catch (error) {
    next(error);
  }
};

export const getMessagesByChannel = async (req, res, next) => {
  try {
    const { channelId } = req.params;

    const messages = await getMessagesByChannelService(channelId);

    res.status(200).json({
      message: "Messages récupérés avec succès",
      data: messages
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMessage = async (req, res, next) => {
  try {
    const { messageId } = req.params;
    await deleteMessageService(messageId);

    res.status(200).json({
      message: "Message supprimé avec succès"
    });
  } catch (error) {
    next(error);
  }
};