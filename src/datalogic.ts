import * as fs from "fs"
import * as path from "path"
import chalk from "chalk"
const carPAth = path.join(__dirname, '../dist/car.json')
//carryng getCar
function getCurrCar(cars: any) {
    return function(car: any) {
       return cars.find((item: any) => item.car === car);
    }
}

// read file operation 
function fileReader(param1?: any, param2?: any, param3?:any) {
    fs.readFile(carPAth, 'utf-8', (err, content) => {
        // console.log(param1, param2)
        if( err ) {
            console.log(err)
        } else {
            if(typeof param1 === 'function') {
                try {
                    param1(JSON.parse(content)) ;
                    console.log(chalk.green("The new car was created."))
                } catch (error) {
                    param1([])
                }
            } else 
            //
            if(param1 && param2 === 'showOne') {
                const cars = JSON.parse(content);
                const isExsist:any = getCurrCar(cars)(param1);
                if(isExsist) {
                    console.log(isExsist)
                } else console.log(chalk.red('No such car was found'));
            } else
            //
            if(param1 === 'showall') {
                console.log(JSON.parse(content))
            } else
            //
            if(param1 && param2 && param3 === 'update') {
                const cars = JSON.parse(content);
                const isExsist:any = getCurrCar(cars)(param1); 
                if(isExsist) {
                    isExsist.kind = param2;
                    fs.writeFile(carPAth, JSON.stringify(cars, null, 2), (err) => {
                        if(err) {
                            throw new Error("error for updating")
                        }
                        else console.log(chalk.green("The car sucessfully updated"))
                    })

                } else console.log(chalk.bgYellow("No such found any car for UPDATE"))
            } else
            //
            if (param1 && param2 === "delete") {
                console.log(param1)
                let cars = JSON.parse(content);
                const isExsist:any = getCurrCar(cars)(param1);
                if(isExsist) {
                    cars = cars.filter((item: any) => item.car !== param1);
                        console.log(cars)
                    fs.writeFile(carPAth, JSON.stringify(cars, null, 2), (err) => {
                        if(err) {
                            throw new Error("error for deleting")
                        }
                        else console.log(chalk.bgYellow("The car sucessfully deleted"))
                    })
                } else console.log(chalk.bgYellow("NO such car found for delete"))
            }

        }
    })
}

const ob = {
    addCar(car: string, kind: string) {
        fileReader((cars: any) => {
            let isExist = getCurrCar(cars)(car)
            if(isExist) {
                console.log(chalk.red('that car already exist'))
            } else {
                cars.push({car, kind});
                fs.writeFile(carPAth, JSON.stringify(cars, null, 2), (err) => {
                    if(err) {
                        throw new Error("alert alert alert")
                    }
                })
            }
        })
    }
}
export {ob, fileReader};
