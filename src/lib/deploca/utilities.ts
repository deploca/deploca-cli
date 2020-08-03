import * as FormData from 'form-data'
import * as zipper from 'zip-local'
import * as crypto from 'crypto'
import * as path from 'path'
import * as fs from 'fs'
import * as os from 'os'
import api from '../api'

export default class Utilities {

    static async uploadAttachment(file:string) : Promise<string> {
        return new Promise((resolve, reject) => {
            const fd = new FormData();
            fd.append('file', fs.createReadStream(file));
            var headers = { 
                //'Authorization': `Bearer ${access_token}`,
                ...fd.getHeaders()
            }
            api.post('/projects/attachments', fd, { headers }).then(r => {
                return resolve(r.data as string)
            }).catch(error => reject(error))
        })
    }

    static async compress(source:string) : Promise<string> {
        return new Promise((resolve, reject) => {
            var saveFilename = crypto.randomBytes(6).readUIntLE(0,6).toString(36) + '.zip'
            saveFilename = path.join(os.tmpdir(), saveFilename)
            try {
                zipper.sync.zip(source).compress().save(saveFilename);
                return resolve(saveFilename)
            } catch (error) {
                return reject(error)
            }
        })
        // return new Promise((resolve, reject) => {
        //     zipper.zip(source, (error, zipped) => {
        //         throw zipped
        //         if (!error) {
        //             zipped.compress() // compress before exporting
        //             zipped.save('./_deploy.zip', error => {
        //                 if (!error) {
        //                     return resolve('./_deploy.zip')
        //                 }
        //                 return reject(error)
        //             })
        //         }
        //         return reject(error)
        //     })
        // })
    }

    static deleteFile(file:string) {
        fs.unlinkSync(file)
    }

}