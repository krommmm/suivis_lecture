import { Md_Formulaire } from "../../../js/classes/models/Md_Formulaire";

describe('Regex password charLength', () => {
    const mdForm = new Md_Formulaire();

    it('should test valid charLength', () => {

        const pw = "123456123456";
        const pw2 = "fdgfddgidkfhjgiduofhgjiudfgdfg";
        const pw3 = ">$*<%+=@!,;:?.>$*<%+=@!,;:?.";

        const result = mdForm.regexTestpassword12Char(pw);
        const result2 = mdForm.regexTestpassword12Char(pw2);
        const result3 = mdForm.regexTestpassword12Char(pw3);

        expect(result).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(true);
    });

    it('should test unvalid charLength', () => {
        const pw = "123";
        const pw2 = "rrgg";
        const pw3 = "SDFSF";


        const result = mdForm.regexTestpassword12Char(pw);
        const result2 = mdForm.regexTestpassword12Char(pw2);
        const result3 = mdForm.regexTestpassword12Char(pw3);

        expect(result).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(false);
    });

   
});