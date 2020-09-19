describe('Teste cenários conversor',()=>{
    it('Quando eu executo a função somarValoresInteiros, passando os valores "15" e "12", o resultado da soma deve ser 27',()=>{
        const moduloConversor = require('./conversor');
        expect(moduloConversor.somarValoresInteiros("15","12")).toBe(27);        
    })    
    
    it('Quando eu executo a função somarValoresDecimais, passando os valores "25.45" e "12.10", o resultado da soma deve ser 37.55',()=>{
        const moduloConversor = require('./conversor');
        expect(moduloConversor.somarValoresDecimais("25.45","12.10")).toBe(37.55);        
    })
})