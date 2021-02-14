import * as fs from "fs";

test("Add addBuilding(command: AddBuilding) function in exercises/src/Aggregate/Building", () => {
    expect(fs.existsSync('src/Aggregate/Building/addBuilding.ts')).toBe(true);

    const content = fs.readFileSync('src/Aggregate/Building/addBuilding.ts', 'utf8');

    expect(content).toBe(
        `import {AddBuilding} from "../../Command/AddBuilding";

export function addBuilding(command: AddBuilding): void {}
`);
})
