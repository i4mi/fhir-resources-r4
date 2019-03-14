export class ApiMethods {
    
    // config is part of wrapper
    //_config: ApiConfig;

    constructor(public _config?: ApiConfig) {

    }

    create(config?: ApiConfig) {

    }

    update() {
        this._config 
    }

    read() {

    }

    vread() {

    }

    search() {

    }

    delete() {

    }
}

/** part of wrapper */
export interface ApiConfig {
    base_url: string,
    access_token: string,
    authorization_type: string
}

/** part of wrapper 
export class EGAL extends ApiMethods {

    _config?: ApiConfig;

    create(OBJ: Object) {
        return super.create(this._config.base_url, )
    }
}*/