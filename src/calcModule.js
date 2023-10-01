const calc = function (operation, a, b){

    let output = {
        result: 'Operation unknown',
        status: 400
    }

    switch (operation) {
        case 'add':
            output.result = Number(a) + Number(b);
            output.status = 200;
            break;
        case 'sub':
            output.result = Number(a) - Number(b);
            output.status = 200;
            break;
        case 'mul':
            output.result = Number(a) * Number(b);
            output.status = 200;
            break;
        case 'div':
            output.result = Number(a) / Number(b);
            output.status = 200;
            break;
    
        default:
            break;
    };

    return output;
};

module.exports = calc;