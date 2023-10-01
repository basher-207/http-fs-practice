const fs = require('fs').promises;

const fsFunc = async function (operation, filename, text){

    let output ={
        result: 'Operation unknown',
        status: 400
    }

    if(operation === 'create'){
        await fs.writeFile(filename, text, (err) => {
            if (err) throw err;
        });
        output = {
            result: `${filename} was created`,
            status: 201
        }
        return output;
    }

    if(operation === 'read'){
        let fileExist;

        await fs.access(filename)
        .then(() => {fileExist = true})
        .catch(() => {fileExist = false})

        if(fileExist){
            const fileData = await fs.readFile(filename, (err, data) => {
                if(!err) throw err;
                return data;
            });
            output = {
                result: fileData,
                status: 201
            }
            return output;
        }

        output.result = `File not found`
        return output;
    }

    return output;
};

module.exports = fsFunc;