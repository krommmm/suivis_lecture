import { Md_Formulaire } from "../../../js/classes/models/Md_Formulaire";

describe('Regex password Majuscule', () => {
    const mdForm = new Md_Formulaire();

    it('should test valid majuscules', () => {
        const pw = "SDFFSDF";
        const pw2 = "SDDsfdfdfHGFHfg";

        const result = mdForm.regexTestpasswordMaj(pw);
        const result2 = mdForm.regexTestpasswordMaj(pw2);

        expect(result).toBe(true);
        expect(result2).toBe(true);
    });

    it('should test invalid majuscules', () => {
        const pw = "87684";
        const pw2 = "dkfsdf";
        const pw3 = ">sdsf<";

        const result = mdForm.regexTestpasswordMaj(pw);
        const result2 = mdForm.regexTestpasswordMaj(pw2);
        const result3 = mdForm.regexTestpasswordMaj(pw3);

        expect(result).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(false);
    });

});