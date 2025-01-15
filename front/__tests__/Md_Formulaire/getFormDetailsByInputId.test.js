import { describe, it, expect, beforeEach } from 'vitest';
import { Md_Formulaire } from '../../js/classes/models/Md_Formulaire';

describe('Md_Formulaire', () => {
  let mdFormulaire;

  beforeEach(() => {
    mdFormulaire = new Md_Formulaire();
  });

  describe('getFormDetailsByInputId', () => {
    it('should return correct details for password input', () => {
      const mockInput = {
        closest: () => ({ id: 'signUpForm' })
      };
      const mockIsValid = {
        majuscule: true,
        minuscule: true,
        space: false,
        chiffre: true,
        specialChar: true,
        charLength: true
      };

      const result = mdFormulaire.getFormDetailsByInputId(mockInput, mockIsValid, 'password');

      expect(result).toEqual({
        formName: 'inscription',
        inputName: 'password',
        elements: {
          majuscule: { passedRegex: true },
          minuscule: { passedRegex: true },
          chiffre: { passedRegex: true },
          specialChar: { passedRegex: true },
          charLength: { passedRegex: true },
          space: { passedRegex: true },
        }
      });
    });

    it('should return correct details for non-password input', () => {
      const mockInput = {
        closest: () => ({ id: 'signUpForm' })
      };
      const mockIsValid = true;

      const result = mdFormulaire.getFormDetailsByInputId(mockInput, mockIsValid, 'email');

      expect(result).toEqual({
        formName: 'inscription',
        inputName: 'email',
        passedRegex: true
      });
    });

    it('should handle connection form correctly', () => {
      const mockInput = {
        closest: () => ({ id: 'loginForm' })
      };
      const mockIsValid = true;

      const result = mdFormulaire.getFormDetailsByInputId(mockInput, mockIsValid, 'email');

      expect(result).toEqual({
        formName: 'connection',
        inputName: 'email',
        passedRegex: true
      });
    });
  });
});
