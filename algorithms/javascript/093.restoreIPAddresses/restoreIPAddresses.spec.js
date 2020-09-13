import { restoreIpAddresses } from './restoreIPAddresses'

describe('restoreIpAddresses', function () {
  it('test case 1', function () {
    const s = '25525511135'
    const result = ['255.255.11.135', '255.255.111.35']
    expect(restoreIpAddresses(s).sort()).toEqual(result.sort())
  })
  it('test case 2', function () {
    const s = '0000'
    const result = ['0.0.0.0']
    expect(restoreIpAddresses(s).sort()).toEqual(result.sort())
  })
  it('test case 3', function () {
    const s = '1111'
    const result = ['1.1.1.1']
    expect(restoreIpAddresses(s).sort()).toEqual(result.sort())
  })
  it('test case 4', function () {
    const s = '010010'
    const result = ['0.10.0.10', '0.100.1.0']
    expect(restoreIpAddresses(s).sort()).toEqual(result.sort())
  })
  it('test case 5', function () {
    const s = '101023'
    const result = ['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3']
    expect(restoreIpAddresses(s).sort()).toEqual(result.sort())
  })
})
