import axios from 'axios'

import { API } from '../config'

function actionTemplate() {
  // const promise = axios.get(API)
  return { type: 'TYPE', payload: 'payload' }
}

export default actionTemplate
