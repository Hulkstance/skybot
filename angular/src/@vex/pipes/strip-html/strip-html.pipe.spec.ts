import { StripHtmlPipe } from '@vex';

describe('StripHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new StripHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
