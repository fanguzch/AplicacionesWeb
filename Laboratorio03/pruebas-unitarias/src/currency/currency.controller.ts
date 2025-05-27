import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('dollarEquivalent')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get(':amount')
  obtenerEquivalenteDolar(@Param('amount', ParseFloatPipe) amount: number) {
    return this.currencyService.obtenerEquivalenteDolar(amount);
  }
}
