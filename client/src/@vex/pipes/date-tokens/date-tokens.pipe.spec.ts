import { DateTokensPipe } from '@vex/pipes/date-tokens/date-tokens.pipe';

describe('DateTokensPipe', () => {
  it('create an instance', () => {
    const pipe = new DateTokensPipe();
    expect(pipe).toBeTruthy();
  });
});
