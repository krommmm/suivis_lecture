import { Md_Formulaire } from "../../../js/classes/models/Md_Formulaire";

describe('Regex password  Minuscule', () => {
    const mdForm = new Md_Formulaire();

    it('should test valid minuscules', () => {
        const pw = "ihdoEEhdgdgigZEEZR";
        const pw2 = "erzrzrr";

        const result = mdForm.regexTestpasswordMin(pw);
        const result2 = mdForm.regexTestpasswordMin(pw2);

        expect(result).toBe(true);
        expect(result2).toBe(true);
    });

    it('should test invalid minuscules', () => {
        const pw = "87684";
        const pw2 = "ZERRERZER";
        const pw3 = ">sdsf<";

        const result = mdForm.regexTestpasswordMin(pw);
        const result2 = mdForm.regexTestpasswordMin(pw2);
        const result3 = mdForm.regexTestpasswordMin(pw3);

        expect(result).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(true);
    });

});