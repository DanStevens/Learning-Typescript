export default function using<T> 
    (name: string, values: T[], func: Function) { 
    for (var i = 0, count = values.length; i < count; i++) { 
        func.apply(Object, [values[i]]); 
    } 
}