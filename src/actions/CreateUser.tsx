'use server'

import { createDoc } from '@/mongodb'

export async function CreateUser(state: any, data: any) {
  const docData: any = {}
  data.forEach(function (value: any, key: any) {
    docData[key] = value
  })
  createDoc({ collection: 'users', docData })
}
