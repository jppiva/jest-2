import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import { Turma } from '../src/turma.js';

describe('Turma', () => {
    let turma;

    beforeEach(() => {
        turma = new Turma(2);
    });

    afterEach(() => {
        turma = null;
    });

    it('matricula o primeiro aluno e retorna a quantidade atual', () => {
        expect(turma.matricular('Aang')).toBe(1);
    });

    it('matricula alunos enquanto existir vaga', () => {
        expect(turma.matricular('Aang')).toBe(1);
        expect(turma.matricular('Katara')).toBe(2);
    });

    it('recusa matricula quando a turma fica cheia', () => {
        turma.matricular('Aang');
        turma.matricular('Katara');

        expect(() => turma.matricular('Sokka')).toThrow('Turma lotada');
    });

    it('começa vazia a cada teste', () => {
        expect(turma.matricular('Toph')).toBe(1);
    });
});
