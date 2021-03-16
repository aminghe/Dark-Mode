export class LocalstorageHelper {

    /**
     * add item in localStorage
     * @param key
     * @param value 
     */
    setItem<T>(key: string, value: T) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * get item in localStorage
     * @param key
     * @returns 
     */
    getItem<T>(key: string): T | undefined {
        let value = localStorage.getItem(key);

        if(!value) return;

        let item : T = JSON.parse(value);
        return item;
    }

    /**
     * remove item with key in localStorage
     * @param key 
     */
    removeItem(key: string) {
        localStorage.removeItem(key);
    }

    /**
     * clear all item in localStorage
     */
    clear() {
        localStorage.clear();
    }


}