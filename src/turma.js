export class Turma {
    constructor(capacidadeMaxima) {
        if (
            typeof capacidadeMaxima !== 'number'
            || !Number.isFinite(capacidadeMaxima)
            || !Number.isInteger(capacidadeMaxima)
            || capacidadeMaxima < 1
        ) {
            throw new Error('Capacidade inválida');
        }

        this.capacidadeMaxima = capacidadeMaxima;
        this.alunos = [];
    }

    matricular(nome) {
        if (this.alunos.length >= this.capacidadeMaxima) {
            throw new Error('Turma lotada');
        }

        this.alunos.push(nome);
        return this.alunos.length;
    }
}
