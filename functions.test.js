const func = require('./functions')


test('should return 2', () => { 
    expect(func.returnTwo()).toEqual(2)

})

test('should great with name', () => { 
    expect(func.greeting('James')).toEqual('hello, James')
    expect(func.greeting('Jill')).toEqual('hello, Jill')

})

test('should add ' ,() => { 
    expect(func.add(1,2)).toEqual(3)
    expect(func.add(5,9)).toEqual(14)

})

test('should multi ' ,() => { 
    expect(func.multiply(1,2)).toEqual(2)
    expect(func.multiply(5,5)).toEqual(25)

})

test('should divide ' ,() => { 
    expect(func.divide(100,2)).toEqual(50)
    expect(func.divide(25,5)).toEqual(5)

})

test('should sub ' ,() => { 
    expect(func.subtract(10,2)).toEqual(8)
    expect(func.subtract(10,9)).toEqual(1)

})

