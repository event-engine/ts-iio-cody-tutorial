import * as fs from "fs";

test("Generate command called AddBuilding", () => {
    expect(fs.existsSync('src/Command/AddBuilding.ts')).toBe(true);
})
