import { expect } from "chai";
import Pessoa from "../src/Pessoa.js";

describe("Testes da classe Pessoa", () => {
  it("deve retornar true para idade maior que 17", () => {
    const pessoa = new Pessoa();
    const resultado = pessoa.ehMaiorDeIdade(18);
    expect(resultado).to.be.true;
  });

  it("deve retornar false para idade menor que 18", () => {
    const pessoa = new Pessoa();
    const resultado = pessoa.ehMaiorDeIdade(16);
    expect(resultado).to.be.false;
  });
});

