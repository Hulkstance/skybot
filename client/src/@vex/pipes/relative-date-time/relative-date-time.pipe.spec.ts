import { RelativeDateTimePipe } from '@vex/pipes/relative-date-time/relative-date-time.pipe';

describe('RelativeDateTimePipe', () => {
  it('create an instance', () => {
    const pipe = new RelativeDateTimePipe();
    expect(pipe).toBeTruthy();
  });
});
