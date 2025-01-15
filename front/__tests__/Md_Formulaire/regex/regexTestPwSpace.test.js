import { Md_Formulaire } from "../../../js/classes/models/Md_Formulaire";

describe('Regex password no Space', () => {
    const mdForm = new Md_Formulaire();

    it('should test a string with space', () => {

        const pw = "87 684";
        const pw2 = "ZERR    ERZER";
        const pw3 = "   ";

        const result = mdForm.regexTestpasswordSpace(pw);
        const result2 = mdForm.regexTestpasswordSpace(pw2);
        const result3 = mdForm.regexTestpasswordSpace(pw3);

        expect(result).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(true);
    });

    it('should test a string without space', () => {
        const pw = "ihdoEEhdgdgigZEEZR";
        const pw2 = "erzrzrr";
        const pw3 = "sf68s4f68s4fs8f4sd6ffSDF8789746";


        const result = mdForm.regexTestpasswordSpace(pw);
        const result2 = mdForm.regexTestpasswordSpace(pw2);
        const result3 = mdForm.regexTestpasswordSpace(pw3);

        expect(result).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(false);
    });

});