import { Md_Formulaire } from "../../../js/classes/models/Md_Formulaire";
 
 describe('regexEmail tests', () => {
     const mdForm = new Md_Formulaire();
 
     it('should test valides email', () => {
         const name1 = "titi@gmx.fr";
         const name2 = "jean@wanadoo.com";
         const name3 = "didier@cherie.fm";
 
         const result1 = mdForm.regexTestEmail(name1);
         const result2 = mdForm.regexTestEmail(name2);
         const result3 = mdForm.regexTestEmail(name3);
 
         expect(result1).toBe(true);
         expect(result2).toBe(true);
         expect(result3).toBe(true);
     });
 
     it('should test unvalides email', () => {
         const name1 = "@)))=)=";
         const name2 = "87684864864";
         const name3 = "Géronimo<><<";
 
         const result1 = mdForm.regexTestEmail(name1);
         const result2 = mdForm.regexTestEmail(name2);
         const result3 = mdForm.regexTestEmail(name3);
 
         expect(result1).toBe(false);
         expect(result2).toBe(false);
         expect(result3).toBe(false);
     });
 

 });