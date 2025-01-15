import { Md_Formulaire } from "../../../js/classes/models/Md_Formulaire";

describe('Regex password specialChar', () => {
    const mdForm = new Md_Formulaire();

    it('should test valid specialChar', () => {

        const pw = "@@@@@";
        const pw2 = ">$*<%+=@!,;:?.";
        const pw3 = ">$*<%+=@!,;:?.>$*<%+=@!,;:?.";

        const result = mdForm.regexTestpasswordSpecialChar(pw);
        const result2 = mdForm.regexTestpasswordSpecialChar(pw2);
        const result3 = mdForm.regexTestpasswordSpecialChar(pw3);

        expect(result).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(true);
    });

    it('should test unvalid specialChar', () => {
        const pw = "ihdoEEhdgdgigZEEZR";
        const pw2 = "erzrzrr";
        const pw3 = "48646456";


        const result = mdForm.regexTestpasswordSpecialChar(pw);
        const result2 = mdForm.regexTestpasswordSpecialChar(pw2);
        const result3 = mdForm.regexTestpasswordSpecialChar(pw3);

        expect(result).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(false);
    });

});