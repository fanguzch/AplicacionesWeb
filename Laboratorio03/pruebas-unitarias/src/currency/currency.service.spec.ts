import { CurrencyService } from './currency.service';
import { BadRequestException } from '@nestjs/common';

describe('CurrencyService', () => {
  let servicio: CurrencyService;

  beforeEach(() => {
    servicio = new CurrencyService();
    // Forzar un valor de dólar fijo sin llamar a la API
    (servicio as any).valorDolarVenta = 500;
  });

  it('debería retornar el equivalente correcto en dólares', () => {
    const colones = 1000;
    const resultado = servicio.obtenerEquivalenteDolar(colones);
    expect(resultado).toBe(2); // 1000 / 500
  });

  it('debería lanzar excepción si se envía un valor inválido', () => {
    expect(() => servicio.obtenerEquivalenteDolar(-10)).toThrow(BadRequestException);
  });
});
