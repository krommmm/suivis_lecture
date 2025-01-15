 import { Md_Formulaire } from "../../../js/classes/models/Md_Formulaire";

describe('Regex password Number', () => {
    const mdForm = new Md_Formulaire();

    it('should test valid number', () => {

        const pw = "87dd684";
        const pw2 = "ZERR4646ERZER";
        const pw3 = "4674564864686";

        const result = mdForm.regexTestpasswordNumber(pw);
        const result2 = mdForm.regexTestpasswordNumber(pw2);
        const result3 = mdForm.regexTestpasswordNumber(pw3);

        expect(result).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(true);
    });

    it('should test NaN chars', () => {
        const pw = "ihdoEEhdgdgigZEEZR";
        const pw2 = "erzrzrr";
        const pw3 = "sfsdfddfsdfSDFSDFSDF";


        const result = mdForm.regexTestpasswordNumber(pw);
        const result2 = mdForm.regexTestpasswordNumber(pw2);
        const result3 = mdForm.regexTestpasswordNumber(pw3);

        expect(result).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(false);
    });
});