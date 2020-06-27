import {Command, flags} from '@oclif/command'
import Package from '../../lib/deploca/package'

export default class Deploy extends Command {
  static description = 'deploys the package to the cloud'
  static examples = [
    `$ deploca package:deploy`,
    `$ deploca package:deploy --target|-t project/branch`,
    `$ deploca package:deploy --path|-p /path/to/package/dir`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    path: flags.string({char: 'p', description: 'define the package root directory path'}),
    target: flags.string({char: 't', description: 'the <project>/<branch> to deploy to'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Deploy)
    try {
      if (!flags.target || flags.target == '') throw `target is required`
      const source = flags.path ?? process.cwd()

      const pack = new Package(source)
      const result = await pack.deploy(flags.target)
      this.log(`${result.services.length} services successfully deployed to ${flags.target}.`)
    } catch (error) {
      this.error(`deploy failed.\n${error}`)
    }
    
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
