import {Command, flags} from '@oclif/command'
import Package from '../../lib/deploca/package'

export default class Deploy extends Command {
  static description = 'deploys the package to the cloud'
  static examples = [
    `$ deploca package:deploy`,
    `$ deploca package:deploy --target|-t project/branch`,
    `$ deploca package:deploy --path|-p /path/to/package/dir`,
    `$ deploca package:deploy --token|-a your-api-token`,
    `$ deploca package:deploy --no-validate`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    path: flags.string({char: 'p', description: 'define the package root directory path'}),
    target: flags.string({char: 't', description: 'the <project>/<branch> to deploy to'}),
    token: flags.string({char: 'a', description: 'your api token'}),
    'no-validate': flags.boolean({ description: 'dont validate package manifest file'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Deploy)

    try {
      const token = flags.token ?? process.env['DEPLOCA_APITOKEN']
      if (!token || token == '') throw `api token is required`

      if (!flags.target || flags.target == '') throw `target is required`
      const source = flags.path ?? process.cwd()

      const pack = new Package(source)
      const result = await pack.deploy(flags.target, token, !!!flags['no-validate'])
      this.log(`${result.services.length} services successfully deployed to ${flags.target}.`)
    } catch (error) {
      var err_message = error + '\n' + (
        (error && error.response && error.response.status == 401) ? 'Your api token is invalid.' :
        (error && error.response && error.response.data) ? error.response.data.message : '');
      this.error(err_message)
    }
    
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
