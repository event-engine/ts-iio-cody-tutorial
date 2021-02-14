import * as fs from "fs";

test("Add buildingId (string) and name (string) properties to AddBuilding", () => {
    expect(fs.existsSync('src/Command/AddBuilding.ts')).toBe(true);

    const commandContent = fs.readFileSync('src/Command/AddBuilding.ts', 'utf8');

    expect(commandContent).toBe(
`
export interface AddBuilding {
  buildingId: string;
  name: string;

}
`);
})
