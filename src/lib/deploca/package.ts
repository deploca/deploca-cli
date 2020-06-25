import * as fs from 'fs'
import * as path from 'path'
import * as yaml from 'js-yaml'
import axios from 'axios'

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

    async deploy(branch:string) : Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                await this.validate();
                console.log(`starting to deploy to the branch: ${branch}`);
                resolve(true)
            } catch (error) {
                return reject(error)
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