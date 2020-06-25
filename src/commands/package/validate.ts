import {Command, flags} from '@oclif/command'
import Package from '../../lib/deploca/package'

export default class Deploy extends Command {
  static description = 'validate the package to check its ok to deploy'

  static examples = [
    `$ deploca package:validate`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    path: flags.string({char: 'p', description: 'define the package root directory path'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Deploy)
    const source = flags.path ?? process.cwd()

    try {
        const pack = new Package(source)
        const result = await pack.validate()
        this.log(`package is valid.`)
    } catch (error) {
        this.error(`package is not valid.\n${error}`)
    }
  }
}
