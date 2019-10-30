import * as yargs from 'yargs';
import { ob as car, fileReader} from './datalogic';


// const t = yargs.options({
//   car: {type: "string", demandOption: true, descrube: 'car name', alias: 't'},
//   kind: {type: 'string',demandOption: true,describe: 'kind content',alias: 'txt'},
//   color: {type: 'string',demandOption: true,describe: 'car color',alias: 'clr'}
// });


const carOptions:any = {
  type: 'string',
  demandOption: true,
  describe: 'car name',
  alias: 't'
};
const kindOptions:any = {
  type: 'string',
  demandOption: true,
  describe: 'kind content',
  alias: 'txt'
}

// add
const argv = yargs.command({
  command: 'add',
  describe: 'fff',
  builder: {
    car: carOptions,
    kind: kindOptions
  },
  handler(args:any) {
    car.addCar(args.car, args.kind)
  }
})
 
// read
.command({
  command: 'read',
  describe: 'show data',
  builder: {
    car: {...carOptions, demandOption: false}
  },
  handler(args: any) {
    if(args.car) {
      fileReader(args.car, 'showOne')
    } else fileReader('showall')
    
  }
})
//update
.command({
  command: 'update',
  describe: 'show data',
  builder: {
    car: carOptions,
    kind: kindOptions
  },
  handler(args: any) {
    fileReader(args.car, args.kind, 'update')
  }
})
//delete
.command({
  command: "delete",
  describe: "delete car",
  builder: {
    car: carOptions
  },
  handler(args: any) {
   fileReader(args.car, 'delete')
    
  }
})
 yargs.parse()
