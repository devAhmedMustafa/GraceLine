import { intRandom } from "../Math/Random";
import { checkUniqueIndex } from "../Storage/Array";

const layers : number[] = []

const maxLayers : number = 300

export function getUniqueIdx(){

    let idx: number = intRandom(0, maxLayers);

    while (!checkUniqueIndex(idx, layers)){
        idx = intRandom(0, maxLayers);
    }

    layers.push(idx)

    return idx;

}