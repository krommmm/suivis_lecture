import { Md_Formulaire } from "../../../js/classes/models/Md_Formulaire";

describe('regexName tests', () => {
    const mdForm = new Md_Formulaire();

    it('should test valides names', () => {
        const name1 = "ZERsdfh";
        const name2 = "ZERsdfsfsdf";
        const name3 = "Géronimo";

        const result1 = mdForm.regexTestName(name1);
        const result2 = mdForm.regexTestName(name2);
        const result3 = mdForm.regexTestName(name3);

        expect(result1).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(true);
    });

    it('should test unvalides names', () => {
        const name1 = "@)))=)=";
        const name2 = "87684864864";
        const name3 = "Géronimo<><<";

        const result1 = mdForm.regexTestName(name1);
        const result2 = mdForm.regexTestName(name2);
        const result3 = mdForm.regexTestName(name3);

        expect(result1).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(false);
    });


});