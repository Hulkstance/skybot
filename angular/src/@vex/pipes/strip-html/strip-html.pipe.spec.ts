import { StripHtmlPipe } from '@vex/pipes/strip-html/strip-html.pipe';

describe('StripHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new StripHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
