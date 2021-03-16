import { LocalstorageHelper } from "./localstorage.helper";

export class DarkModeHelper {

    private _localstorageHelper = new LocalstorageHelper();
    /**
     * key in darkmode in localstorage
     */
    private _dark_model_label = "dark-mode";

    /**
     * add class dark in html
     * storage status in localstorage
     * @param status 
     */
    darkMode(status: boolean = true) {
        if (status === true) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
        this._localstorageHelper.setItem(this._dark_model_label, status);
    }

    /**
     * return darkmode status with localstorage
     * @returns 
     */
    status(): boolean {
        return this._localstorageHelper.getItem<boolean>(this._dark_model_label) ?? false;
    }

}