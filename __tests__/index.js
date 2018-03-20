import sinon from 'sinon';

import DateLib from '../src/index';

describe('DateLib test', () => {
  test('getCurrentDateString', () => {
    let clock = sinon.useFakeTimers(new Date(2018, 2, 16).getTime()); // Setting up a fake timer.
    expect(DateLib.getCurrentDateString('yyyy/mm/dd')).toBe('2018/03/16');
    expect(DateLib.getCurrentDateString('yyyy-mm-dd')).toBe('2018-03-16');
    expect(DateLib.getCurrentDateString('yyyy*mm-dd')).toBe('2018*03-16');
    expect(DateLib.getCurrentDateString('mm-yyyy-dd')).toBe('03-2018-16');
    expect(DateLib.getCurrentDateString('mm-dd-yyyy')).toBe('03-16-2018');
    expect(DateLib.getCurrentDateString('yyyy$mm&dd')).toBe('2018$03&16');

    clock = sinon.useFakeTimers(new Date(2018, 10, 6).getTime());
    expect(DateLib.getCurrentDateString('yyyy/mm/dd')).toBe('2018/11/06');
    expect(DateLib.getCurrentDateString('yyyy-mm-dd')).toBe('2018-11-06');
    expect(DateLib.getCurrentDateString('yyyy*mm-dd')).toBe('2018*11-06');
    expect(DateLib.getCurrentDateString('mm-yyyy-dd')).toBe('11-2018-06');
    expect(DateLib.getCurrentDateString('mm-dd-yyyy')).toBe('11-06-2018');
    clock.restore();
  });

  test('getDateString', () => {
    expect(DateLib.getDataString('01/01/2018', 'yyyy/mm/dd')).toBe('2018/01/01');
    expect(DateLib.getDataString('02/03/2018', 'yyyy/mm/dd')).toBe('2018/02/03');
    expect(DateLib.getDataString('01-01-2018', 'yyyy/mm/dd')).toBe('2018/01/01');
    expect(DateLib.getDataString('02/03/2018', 'yyyy-mm-dd')).toBe('2018-02-03');
    expect(DateLib.getDataString('2018/03/16', 'mm-dd-yyyy')).toBe('03-16-2018');
    expect(DateLib.getDataString(new Date('2018/03/16'), 'mm-dd-yyyy')).toBe('03-16-2018');
    expect(DateLib.getDataString(new Date('2018/03/16'), 'mm/dd/yyyy')).toBe('03/16/2018');
    expect(DateLib.getDataString(new Date('01-02-2018'), 'yyyy/mm/dd')).toBe('2018/01/02');
    expect(() => DateLib.getDataString(1, 'yyyy/mm/dd')).toThrowError('Please offer a date string or Date object for the param.');
    expect(() => DateLib.getDataString({}, 'yyyy/mm/dd')).toThrowError('Please offer a date string or Date object for the param.');
    expect(() => DateLib.getDataString([], 'yyyy/mm/dd')).toThrowError('Please offer a date string or Date object for the param.');
    expect(() => DateLib.getDataString(true, 'yyyy/mm/dd')).toThrowError('Please offer a date string or Date object for the param.');
  });
});
