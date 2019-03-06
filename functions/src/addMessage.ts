import * as functions from 'firebase-functions'
import { firestore as db } from './utils'

export const addMessage = functions.https.onRequest(async (req, res) => {
  const message = req.query.message
  return await db.collection('messages').add({ message }).then((docRef) => {
    return res.send(`Success ID: ${docRef.id}`)
  }).catch((err) => res.send(err))
})
