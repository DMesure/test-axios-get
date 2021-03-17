const simpleLogger = async () => {
    for (let i = 1; i < 6; i++) {
        console.log(`Log nr: ${i}`);
    }
}

const execute = async () => {
    await simpleLogger();
}

execute();