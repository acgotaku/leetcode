import { OrderedStream } from './OrderedStream'

describe('OrderedStream', function () {
  it('test case 1', function () {
    const os = new OrderedStream(5)

    expect(os.insert(3, 'ccccc')).toEqual([])
    expect(os.insert(1, 'aaaaa')).toEqual(['aaaaa'])
    expect(os.insert(2, 'bbbbb')).toEqual(['bbbbb', 'ccccc'])
    expect(os.insert(5, 'eeeee')).toEqual([])
    expect(os.insert(4, 'ddddd')).toEqual(['ddddd', 'eeeee'])
  })
})
