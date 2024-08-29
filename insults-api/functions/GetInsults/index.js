const { sendResponse } = require('../../responses/index.js')

const insults = [
  "Yer maw’s got a face like a bulldog chewing a wasp.",
  "You’ve got the charm of a damp sock.",
  "Yer as welcome as a fart in a spacesuit.",
  "You’re so dense, light bends around you.",
  "If brains were dynamite, you wouldn’t have enough to blow yer nose."
]

exports.handler = async (event) => {
  return sendResponse(200, insults);
};
