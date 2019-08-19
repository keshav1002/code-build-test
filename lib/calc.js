const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
}

const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

const addTwoRandomNumbers = () => {
    const rand1 = getRandomNumber();
    const rand2 = getRandomNumber();
    return `${rand1} + ${rand2} = ${addTwoNumbers(rand1, rand2)}`;
}

module.exports = {
    addTwoNumbers,
    addTwoRandomNumbers
}