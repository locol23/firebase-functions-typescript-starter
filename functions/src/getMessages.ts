import * as functions from 'firebase-functions'
import { firestore as db } from './utils'

export const getMessages = functions.https.onRequest(async (req, res) => {
  const querySnapshot = await db.collection('messages').get().catch((err) => res.send(err))

  if(!('status' in querySnapshot)) {
    const result: any[] =[]
    querySnapshot.forEach((doc: FirebaseFirestore.DocumentData) => {
      result.push(doc.data())
    })
    return res.send(result)
  }
  return
})
