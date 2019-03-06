import * as functions from 'firebase-functions'
import { firestore as db } from './utils'

export const deleteMessage = functions.https.onRequest(async (req, res) => {
  const querySnapshot = await db.collection('messages').where('message', '==', req.query.message).get().catch((err) => res.send(err))

  if(!('status' in querySnapshot)) {
      querySnapshot.forEach((doc: FirebaseFirestore.DocumentData) => {
        db.collection('messages').doc(doc.id).delete().then(() => res.send('Delete Success')).catch((err) => res.send(err))
      })
   }
   return
})
