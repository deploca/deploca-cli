import * as fs from 'fs'
import * as path from 'path'
import * as yaml from 'js-yaml'
import api from '../api'
import Utilities from './utilities'

export default class Package {
    source: string;

    constructor(source:string) {
        this.source = source;
    }

    async validate() : Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                const configObject = await this.getConfigFileObject()
                if (!configObject.version)
                    throw `file 'deploca-package.yml' is not a valid configuration file. please read the documentations.`
                return resolve(true)
            } catch (error) {
                return reject(error)
            }
        })
    }

    async deploy(target:string, token:string, enableValidation:boolean = true) : Promise<any> {
        return new Promise<boolean>(async (resolve, reject) => {
            let compressed_file = ''
            try {
                // validation
                if (enableValidation) {
                    console.log(`validating the package manifest file ...`);
                    await this.validate();
                }
                // compress source directory
                console.log(`compressing the source directory ...`);
                compressed_file = await Utilities.compress(this.source)
                // upload the file
                console.log(`uploading the package file ...`);
                const uploaded_filename = await Utilities.uploadAttachment(compressed_file)
                //console.log(`uploaded with file name: ${uploaded_filename}`);
                // push to the branch
                console.log(`deploying to: '${target}'`);
                const params = { token, target, contentsFileName: uploaded_filename }
                const postContentsResult = await api.post('/projects/branches/contents', params)
                return resolve(postContentsResult.data)
            } catch (error) {
                return reject(error)
            } finally {
                Utilities.deleteFile(compressed_file)
            }
        })
    }

    async getConfigFileObject() : Promise<any> {
        return new Promise<any>((resolve, reject) => {
            try {
                const file_path = path.join(this.source, 'deploca-package.yml')
                const file_contents = fs.readFileSync(file_path, 'utf8')
                const file_object = yaml.safeLoad(file_contents)
                if (!file_object)
                    throw `config file is not a valid yaml file`
                return resolve(file_object)
            } catch (error) {
                return reject(error)
            }
        })
    }
}