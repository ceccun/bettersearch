const fs = require("fs-extra");

const travel = [
    "routes/static"
]


const lastSteps = () => {
    travel.forEach((path) => {
        fs.copySync(path, `dist/${path}`);
    })

    console.log("Last steps completed!")
}

lastSteps();