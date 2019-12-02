const interpreter = intcode => {
    /*
    An Intcode program is a list of integers separated by commas (like 1,0,0,3,99). To run one, start by looking at the first integer (called position 0). Here, you will find an opcode - either 1, 2, or 99. The opcode indicates what to do; for example, 99 means that the program is finished and should immediately halt. Encountering an unknown opcode means something went wrong.
    */
    let operations = intcode.split(',');
    operations = operations.map(_ => Number(_));

    /*
    Once you're done processing an opcode, move to the next one by stepping forward 4 positions.
    */
    for (let i = 0; i < operations.length; i += 4) {
        switch (operations[i]) {
            case 99:
                return operations.join(',');
            /*
            Opcode 1 adds together numbers read from two positions and stores the result in a third position. The three integers immediately after the opcode tell you these three positions - the first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored.
            */
            case 1:
                operations[operations[i + 3]] = operations[operations[i + 1]] + operations[operations[i + 2]];
                break;
            /*
            Opcode 2 works exactly like opcode 1, except it multiplies the two inputs instead of adding them. Again, the three integers after the opcode indicate where the inputs and outputs are, not their values.
            */
            case 2:
                operations[operations[i + 3]] = operations[operations[i + 1]] * operations[operations[i + 2]];
                break;
        }
    }
}

// find 19690720
for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
        let this_try = interpreter(`1,${noun},${verb},3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,5,23,1,23,5,27,2,27,10,31,1,31,9,35,1,35,5,39,1,6,39,43,2,9,43,47,1,5,47,51,2,6,51,55,1,5,55,59,2,10,59,63,1,63,6,67,2,67,6,71,2,10,71,75,1,6,75,79,2,79,9,83,1,83,5,87,1,87,9,91,1,91,9,95,1,10,95,99,1,99,13,103,2,6,103,107,1,107,5,111,1,6,111,115,1,9,115,119,1,119,9,123,2,123,10,127,1,6,127,131,2,131,13,135,1,13,135,139,1,9,139,143,1,9,143,147,1,147,13,151,1,151,9,155,1,155,13,159,1,6,159,163,1,13,163,167,1,2,167,171,1,171,13,0,99,2,0,14,0`);
        let output = this_try.split(',')[0];
        if (output === "19690720") {
            console.log(noun, verb, 100 * noun + verb);
            process.exit()
        }
    }
}
