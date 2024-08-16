export function checkUniqueIndex(idx: number, array: Array<any>){

    return (array[idx] == undefined);
    
}

export function arrayToMap(arr: Array<any>, keyIdentifier: any){
    let map : any = {};
    arr.forEach((item, index) => {
        map[item[keyIdentifier]] = item;
    });

    return map;
}