import {Command, flags} from '@oclif/command'
import Package from '../../lib/deploca/package'

export default class Deploy extends Command {
  static description = 'deploys the package to the cloud'
  static examples = [
    `$ deploca package:deploy`,
    `$ deploca package:deploy --path /path/to/package/dir`,
    `$ deploca package:deploy --branch branch-to-deploy-to`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    path: flags.string({char: 'p', description: 'define the package root directory path'}),
    branch: flags.string({char: 'b', description: 'the branch to deploy to, default: development'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Deploy)
    const branch = flags.branch ?? 'development'
    const source = flags.path ?? process.cwd()

    try {
      const pack = new Package(source)
      const result = await pack.deploy(branch)
      this.log(`successfully deployed to ${branch}.`)
    } catch (error) {
      this.error(`deploy failed.\n${error}`)
    }
    
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
